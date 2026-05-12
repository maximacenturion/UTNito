import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('health')
@Controller('health')
export class HealthController {
  @Get()
  @ApiOperation({ summary: 'Health check for class 12 backend' })
  getHealth() {
    return {
      success: true,
      message: 'Class 12 backend mock start is running',
      class: 12,
      serverTime: new Date().toISOString(),
    };
  }
}
