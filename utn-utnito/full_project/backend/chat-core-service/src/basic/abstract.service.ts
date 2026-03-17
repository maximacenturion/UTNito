import { HttpService } from '@nestjs/axios';
import { HttpException, Logger } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { ResponseBuilder } from './response.builder';
import { ResponseObject } from './response-object';
import { ErrorUtils } from 'src/shared/error/error.utils';

export abstract class AbstractService {
  private readonly serviceLogger = new Logger(AbstractService.name);

  constructor(protected readonly httpService: HttpService) {}

  protected async post(
    request: any,
    url: string,
    headers: Record<string, string> = { 'Content-Type': 'application/json' },
  ): Promise<ResponseObject<any>> {
    this.serviceLogger.debug(`POST ${url}`);

    try {
      const response = await firstValueFrom(this.httpService.post(url, request, { headers }));
      return new ResponseBuilder<any>().createSuccessResponse(response.data, 'Request successful');
    } catch (error) {
      return this.handleHttpError(error, url);
    }
  }

  protected async get(
    url: string,
    params: Record<string, any> = {},
    headers: Record<string, string> = { 'Content-Type': 'application/json' },
  ): Promise<ResponseObject<any>> {
    this.serviceLogger.debug(`GET ${url}`);

    try {
      const response = await firstValueFrom(this.httpService.get(url, { headers, params }));
      return new ResponseBuilder<any>().createSuccessResponse(response.data, 'Request successful');
    } catch (error) {
      return this.handleHttpError(error, url);
    }
  }

  protected createRandomId(placeholder: string): string {
    return placeholder + uuidv4();
  }

  private handleHttpError(error: any, url: string): never {
    this.serviceLogger.error(`Request to ${url} failed`, error?.stack);

    const errorDetails = ErrorUtils.extractExternalHttpErrorDetails(error);
    const responseBody = errorDetails.messageCode
      ? new ResponseBuilder<any>().createFailureResponse(
          null,
          errorDetails.messageCode,
          errorDetails.message,
        )
      : new ResponseBuilder<any>().createFailureResponse(null, errorDetails.message);

    throw new HttpException(
      responseBody,
      errorDetails.statusCode,
    );
  }
}
