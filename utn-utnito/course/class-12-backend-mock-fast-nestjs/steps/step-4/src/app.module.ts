import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConversationModule } from './conversation/conversation.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [HealthModule, AuthModule, ConversationModule],
})
export class AppModule {}
