//Detalha o tipo de dados que são passados para o controller

import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class HashtagDTO { //dto é para a entrada de dados
  @ApiProperty()
  @IsString()
  nome: string;

  @ApiProperty()
  @IsString()
  descricao: string;
}
