import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { DemoMessage } from './model/demo-message.model';
import { CreateDemoMessageRequest } from './request/create-demo-message.request';
import { UpdateDemoMessageRequest } from './request/update-demo-message.request';

@Injectable()
export class DemoMessagesService {
  private nextId = 3;

  private messages: DemoMessage[] = [
    { id: 'msg-1', content: 'Welcome to class 12 demo.', name: 'Carlos Gardel' },
    { id: 'msg-2', content: 'Controller delegates, service contains logic.', name: 'Matias' },
  ];

  listMessages(): DemoMessage[] {
    return this.messages;
  }

  createMessage(request: CreateDemoMessageRequest): DemoMessage {
    if (!request.content?.trim() || !request.name?.trim()) {
      throw new BadRequestException('Content and name are required');
    }

    const message: DemoMessage = {
      id: `msg-${this.nextId}`,
      content: request.content.trim(),
      name: request.name.trim(),
    };

    this.nextId += 1;
    this.messages.unshift(message);

    return message;
  }

  updateMessage(messageId: string, request: UpdateDemoMessageRequest): DemoMessage {
    const message = this.messages.find((item) => item.id === messageId);

    if (!message) {
      throw new NotFoundException('Message not found');
    }

    if (!request.content && !request.name) {
      throw new BadRequestException('At least one field is required');
    }

    if (request.content) {
      message.content = request.content.trim();
    }

    if (request.name) {
      message.name = request.name.trim();
    }

    return message;
  }

  replaceMessage(messageId: string, request: CreateDemoMessageRequest): DemoMessage {
    const message = this.messages.find((item) => item.id === messageId);

    if (!message) {
      throw new NotFoundException('Message not found');
    }

    if (!request.content?.trim() || !request.name?.trim()) {
      throw new BadRequestException('Content and name are required');
    }

    message.content = request.content.trim();
    message.name = request.name.trim();

    return message;
  }

  deleteMessage(messageId: string): { deletedMessageId: string } {
    const previousLength = this.messages.length;

    this.messages = this.messages.filter((item) => item.id !== messageId);

    if (this.messages.length === previousLength) {
      throw new NotFoundException('Message not found');
    }

    return {
      deletedMessageId: messageId,
    };
  }
}
