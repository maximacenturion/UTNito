import { Module } from '@nestjs/common';
import { DemoMessagesModule } from './demo-messages/demo-messages.module';

@Module({
  imports: [DemoMessagesModule],
})
export class AppModule {}
