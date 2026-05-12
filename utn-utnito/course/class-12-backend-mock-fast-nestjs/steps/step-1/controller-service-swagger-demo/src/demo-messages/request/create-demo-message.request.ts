import { ApiProperty } from '@nestjs/swagger';

export class CreateDemoMessageRequest {
  // Swagger decorator: documents this field in the request schema.
  @ApiProperty({ example: 'Hola clase 12' })
  content!: string;

  // Swagger decorator: documents this field in the request schema.
  @ApiProperty({ example: 'Carlos Gardel' })
  name!: string;
}
