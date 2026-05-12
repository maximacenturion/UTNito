import { Module } from '@nestjs/common';
import { DemoMessagesController } from './demo-messages.controller';
import { DemoMessagesService } from './demo-messages.service';

@Module({
  controllers: [DemoMessagesController],
  providers: [DemoMessagesService],
  exports: [DemoMessagesService],
})
export class DemoMessagesModule {}
