import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ResponseMessage } from '../basic/response-message.model';
import { ResponseObject } from '../basic/response-object.model';
import { DemoMessagesService } from './demo-messages.service';
import { CreateDemoMessageRequest } from './request/create-demo-message.request';
import { UpdateDemoMessageRequest } from './request/update-demo-message.request';

// Swagger decorator: groups these endpoints under "demo-messages" in Swagger UI.
@ApiTags('demo-messages')
// Nest decorator: sets the base HTTP route for this controller.
@Controller('demo-messages')
export class DemoMessagesController {
  constructor(private readonly demoMessagesService: DemoMessagesService) {}

  /** Controller passthrough to service list method. */
  // Nest decorator: handles HTTP GET requests for this endpoint.
  @Get()
  // Swagger decorator: adds endpoint summary to Swagger documentation.
  @ApiOperation({ summary: 'GET - List all messages' })
  listMessages() {
    return new ResponseObject(
      true,
      new ResponseMessage('0000', 'Messages listed'),
      new Date().toISOString(),
      this.demoMessagesService.listMessages(),
    );
  }

  /** Controller passthrough to service create method. */
  // Nest decorator: handles HTTP POST requests for this endpoint.
  @Post()
  // Swagger decorator: adds endpoint summary to Swagger documentation.
  @ApiOperation({ summary: 'POST - Create a message' })
  // Swagger decorator: documents the expected JSON body schema.
  @ApiBody({ type: CreateDemoMessageRequest })
  createMessage(@Body() request: CreateDemoMessageRequest) {
    const message = this.demoMessagesService.createMessage(request);
    return new ResponseObject(
      true,
      new ResponseMessage('0000', 'Message created'),
      new Date().toISOString(),
      message,
    );
  }

  /** Controller passthrough to service partial update method. */
  // Nest decorator: handles HTTP PATCH requests for this endpoint.
  @Patch(':messageId')
  // Swagger decorator: adds endpoint summary to Swagger documentation.
  @ApiOperation({ summary: 'PATCH - Update part of one message' })
  // Swagger decorator: documents the expected JSON body schema.
  @ApiBody({ type: UpdateDemoMessageRequest })
  updateMessage(@Param('messageId') messageId: string, @Body() request: UpdateDemoMessageRequest) {
    const message = this.demoMessagesService.updateMessage(messageId, request);
    return new ResponseObject(
      true,
      new ResponseMessage('0000', 'Message updated (PATCH)'),
      new Date().toISOString(),
      message,
    );
  }

  /** Controller passthrough to service full replace method. */
  // Nest decorator: handles HTTP PUT requests for this endpoint.
  @Put(':messageId')
  // Swagger decorator: adds endpoint summary to Swagger documentation.
  @ApiOperation({ summary: 'PUT - Replace full message (content + name)' })
  // Swagger decorator: documents the expected JSON body schema.
  @ApiBody({ type: CreateDemoMessageRequest })
  replaceMessage(@Param('messageId') messageId: string, @Body() request: CreateDemoMessageRequest) {
    const message = this.demoMessagesService.replaceMessage(messageId, request);
    return new ResponseObject(
      true,
      new ResponseMessage('0000', 'Message replaced (PUT)'),
      new Date().toISOString(),
      message,
    );
  }

  /** Controller passthrough to service delete method. */
  // Nest decorator: handles HTTP DELETE requests for this endpoint.
  @Delete(':messageId')
  // Swagger decorator: adds endpoint summary to Swagger documentation.
  @ApiOperation({ summary: 'DELETE - Remove one message' })
  deleteMessage(@Param('messageId') messageId: string): ResponseObject<{ deletedMessageId: string }> {
    const response = this.demoMessagesService.deleteMessage(messageId);
    return new ResponseObject(
      true,
      new ResponseMessage('0000', 'Message deleted'),
      new Date().toISOString(),
      response,
    );
  }
}
