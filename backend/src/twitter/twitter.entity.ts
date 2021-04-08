import { ApiResponseProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

//Tabela no banco de dados
@Entity('tweet')
export class TweetEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  @ApiResponseProperty()
  idTweet: number;

  @Column('text')
  @ApiResponseProperty()
  userName: string;

  @Column('text')
  @ApiResponseProperty()
  text: string;

  @CreateDateColumn()
  created: Date;

  constructor(partial: Partial<TweetEntity>) {
    Object.assign(this, partial);
  }
}
