import { ApiResponseProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//Mapeando como vai ser a tabela no banco de dados
@Entity()
export class Tweet {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    @ApiResponseProperty()
    idTweet: string;

    @Column('text')
    @ApiResponseProperty()
    userName: string;

    @Column('text')
    @ApiResponseProperty()
    text: string;

    @Column('text')
    @ApiResponseProperty()
    criadoEm: string;

}
