import { ApiProperty } from '@nestjs/swagger';
import { ResponseMessage } from './response-message.model';

export class ResponseObject<T = unknown> {
  // Swagger decorator: documents this field in the response schema.
  @ApiProperty({ example: true })
  success!: boolean;

  // Swagger decorator: documents nested object type in Swagger schemas.
  @ApiProperty({ type: ResponseMessage })
  responseMessage!: ResponseMessage;

  // Swagger decorator: documents this field in the response schema.
  @ApiProperty({ example: '2026-04-19T00:00:00.000Z' })
  serverTime!: string;

  // Swagger decorator: documents generic payload in the response schema.
  @ApiProperty({ required: false })
  data!: T;

  constructor(success: boolean, responseMessage: ResponseMessage, serverTime: string, data: T) {
    this.success = success;
    this.responseMessage = responseMessage;
    this.serverTime = serverTime;
    this.data = data;
  }
}
