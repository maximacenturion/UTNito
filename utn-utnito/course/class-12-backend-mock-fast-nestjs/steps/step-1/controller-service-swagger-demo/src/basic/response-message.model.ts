import { ApiProperty } from '@nestjs/swagger';

export class ResponseMessage {
  // Swagger decorator: documents this field in the response schema.
  @ApiProperty({ example: '0000' })
  messageCode!: string;

  // Swagger decorator: documents this field in the response schema.
  @ApiProperty({ example: 'OK' })
  message!: string;

  constructor(messageCode: string, message: string) {
    this.messageCode = messageCode;
    this.message = message;
  }
}
