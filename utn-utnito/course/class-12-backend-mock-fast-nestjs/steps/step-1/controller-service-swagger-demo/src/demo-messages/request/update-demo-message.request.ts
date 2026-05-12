import { ApiProperty } from '@nestjs/swagger';

export class UpdateDemoMessageRequest {
  // Swagger decorator: documents this optional field in the request schema.
  @ApiProperty({ example: 'Texto corregido', required: false })
  content?: string;

  // Swagger decorator: documents this optional field in the request schema.
  @ApiProperty({ example: 'Matias', required: false })
  name?: string;
}
