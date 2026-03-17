import { getChatMessageMaxLength } from '../config/chat-message.config';

export enum ApiErrorCode {
  CHAT_MESSAGE_EMPTY = 'CHAT_MESSAGE_EMPTY',
  CHAT_MESSAGE_TOO_LONG = 'CHAT_MESSAGE_TOO_LONG',
  CHAT_MESSAGE_INVALID = 'CHAT_MESSAGE_INVALID',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  BAD_REQUEST = 'BAD_REQUEST',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
}

const BASE_API_ERROR_MESSAGES: Record<ApiErrorCode, string> = {
  [ApiErrorCode.CHAT_MESSAGE_EMPTY]: 'Message content cannot be empty',
  [ApiErrorCode.CHAT_MESSAGE_TOO_LONG]: '',
  [ApiErrorCode.CHAT_MESSAGE_INVALID]: 'Message content must be a string',
  [ApiErrorCode.VALIDATION_ERROR]: 'Request validation failed',
  [ApiErrorCode.BAD_REQUEST]: 'Bad request',
  [ApiErrorCode.INTERNAL_SERVER_ERROR]: 'An unexpected error occurred',
};

export function isApiErrorCode(value: string): value is ApiErrorCode {
  return Object.values(ApiErrorCode).includes(value as ApiErrorCode);
}

export function resolveApiErrorMessage(errorCode: ApiErrorCode): string {
  if (errorCode === ApiErrorCode.CHAT_MESSAGE_TOO_LONG) {
    return `Message content must be shorter than or equal to ${getChatMessageMaxLength()} characters`;
  }

  return BASE_API_ERROR_MESSAGES[errorCode];
}
