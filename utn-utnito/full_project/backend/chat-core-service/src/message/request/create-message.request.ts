import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsString,
  MinLength,
  Validate,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { getChatMessageMaxLength } from 'src/shared/config/chat-message.config';
import { ApiErrorCode } from 'src/shared/error/api-error-code.enum';

const CHAT_MESSAGE_MAX_LENGTH = getChatMessageMaxLength();

@ValidatorConstraint({ name: 'ChatMessageMaxLength', async: false })
class ChatMessageMaxLengthConstraint implements ValidatorConstraintInterface {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') {
      return true;
    }

    return value.length <= getChatMessageMaxLength();
  }
}

export class CreateMessageRequest {
  @ApiProperty({
    example: 'Can you explain Sprint 2 backend goals?',
    maxLength: CHAT_MESSAGE_MAX_LENGTH,
  })
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString({ message: ApiErrorCode.CHAT_MESSAGE_INVALID })
  @MinLength(1, { message: ApiErrorCode.CHAT_MESSAGE_EMPTY })
  @Validate(ChatMessageMaxLengthConstraint, { message: ApiErrorCode.CHAT_MESSAGE_TOO_LONG })
  content: string;
}
