export enum ApiErrorCode {
  CHAT_MESSAGE_EMPTY = 'CHAT_MESSAGE_EMPTY',
  CHAT_MESSAGE_TOO_LONG = 'CHAT_MESSAGE_TOO_LONG',
  CHAT_MESSAGE_INVALID = 'CHAT_MESSAGE_INVALID',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  BAD_REQUEST = 'BAD_REQUEST',
}

export function isApiErrorCode(value: string): value is ApiErrorCode {
  return Object.values(ApiErrorCode).includes(value as ApiErrorCode);
}
