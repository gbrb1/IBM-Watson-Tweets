import { ApiResponseProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

//mapeando tabela no banco de dados
@Entity('hashtag')
export class HashtagEntity { 
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  @ApiResponseProperty()
  nome: string;

  @Column('text')
  @ApiResponseProperty()
  descricao: string;

  @CreateDateColumn()
  @ApiResponseProperty()
  criadoEm: string;

  constructor(partial: Partial<HashtagEntity>) {
    Object.assign(this, partial);
  }
}
