import { ApiProperty } from '@nestjs/swagger';

export class DemoMessage {
  // Swagger decorator: documents this field in the response schema.
  @ApiProperty({ example: 'msg-1' })
  id!: string;

  // Swagger decorator: documents this field in the response schema.
  @ApiProperty({ example: 'Hola clase 11' })
  content!: string;

  // Swagger decorator: documents this field in the response schema.
  @ApiProperty({ example: 'Carlos Gardel' })
  name!: string;
}
