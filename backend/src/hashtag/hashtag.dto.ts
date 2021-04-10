//Detalha o tipo de dados que são passados para o controller

import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class HashtagDTO {
  @ApiProperty()
  @IsString()
  nome: string;

  @ApiProperty()
  @IsString()
  descricao: string;
}
