import { HttpException, HttpStatus } from '@nestjs/common';
import {
  ApiErrorCode,
  isApiErrorCode,
  resolveApiErrorMessage,
} from './api-error-code.enum';

export interface ExceptionDetails {
  message: string;
  messageCode?: ApiErrorCode;
}

export interface ExternalHttpErrorDetails extends ExceptionDetails {
  statusCode: HttpStatus;
}

export class ErrorUtils {
  static buildRequestInfo(request: any): string {
    return request
      ? `${request.method} ${request.url} - Body: ${JSON.stringify(request.body || {})}`
      : 'No request context available';
  }

  static buildLogMessage(exception: any, requestInfo: string): string {
    return `Error: ${exception?.message || 'Unknown error'} | Request: ${requestInfo} | Stack: ${exception?.stack || 'No stack'}`;
  }

  static extractExceptionDetails(exception: any, httpStatus: number): ExceptionDetails {
    if (!(exception instanceof HttpException)) {
      return {
        message: resolveApiErrorMessage(ApiErrorCode.INTERNAL_SERVER_ERROR),
        messageCode: ApiErrorCode.INTERNAL_SERVER_ERROR,
      };
    }

    const response = exception.getResponse();

    if (typeof response === 'string') {
      return {
        message: response,
        messageCode: httpStatus >= 500 ? ApiErrorCode.INTERNAL_SERVER_ERROR : undefined,
      };
    }

    if (response && typeof response === 'object') {
      const responseData = response as Record<string, unknown>;
      const responseMessageObject =
        responseData['responseMessage'] && typeof responseData['responseMessage'] === 'object'
          ? (responseData['responseMessage'] as Record<string, unknown>)
          : null;

      const responseMessageCodeValue = responseMessageObject?.['messageCode'];
      const responseMessageValue = responseMessageObject?.['message'];

      if (typeof responseMessageCodeValue === 'string' && isApiErrorCode(responseMessageCodeValue)) {
        return {
          message: resolveApiErrorMessage(responseMessageCodeValue),
          messageCode: responseMessageCodeValue,
        };
      }

      if (typeof responseMessageValue === 'string') {
        return {
          message: responseMessageValue,
        };
      }

      const responseMessageArray = responseData['message'];
      if (Array.isArray(responseMessageArray) && responseMessageArray.length > 0) {
        const firstArrayMessage = responseMessageArray.find((message) => typeof message === 'string') as
          | string
          | undefined;

        if (firstArrayMessage) {
          if (isApiErrorCode(firstArrayMessage)) {
            return {
              message: resolveApiErrorMessage(firstArrayMessage),
              messageCode: firstArrayMessage,
            };
          }

          return {
            message: firstArrayMessage,
            messageCode: ApiErrorCode.VALIDATION_ERROR,
          };
        }

        return {
          message: resolveApiErrorMessage(ApiErrorCode.VALIDATION_ERROR),
          messageCode: ApiErrorCode.VALIDATION_ERROR,
        };
      }

      if (typeof responseData['message'] === 'string') {
        return {
          message: responseData['message'],
          messageCode: httpStatus === HttpStatus.BAD_REQUEST ? ApiErrorCode.BAD_REQUEST : undefined,
        };
      }
    }

    if (httpStatus >= 500) {
      return {
        message: resolveApiErrorMessage(ApiErrorCode.INTERNAL_SERVER_ERROR),
        messageCode: ApiErrorCode.INTERNAL_SERVER_ERROR,
      };
    }

    if (httpStatus === HttpStatus.BAD_REQUEST) {
      return {
        message: resolveApiErrorMessage(ApiErrorCode.BAD_REQUEST),
        messageCode: ApiErrorCode.BAD_REQUEST,
      };
    }

    return {
      message: exception?.message || resolveApiErrorMessage(ApiErrorCode.INTERNAL_SERVER_ERROR),
    };
  }

  static extractExternalHttpErrorDetails(error: any): ExternalHttpErrorDetails {
    if (error?.response) {
      const responseStatus = Number(error.response.status);
      const statusCode =
        Number.isInteger(responseStatus) && responseStatus >= 100 && responseStatus <= 599
          ? (responseStatus as HttpStatus)
          : HttpStatus.BAD_GATEWAY;
      const details = this.extractExceptionDetails(
        new HttpException(error.response.data, statusCode),
        statusCode,
      );

      return {
        statusCode,
        ...details,
      };
    }

    if (error?.request) {
      return {
        statusCode: HttpStatus.SERVICE_UNAVAILABLE,
        message: 'No response received from external service',
      };
    }

    return {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: error?.message || 'Unexpected error',
    };
  }
}
