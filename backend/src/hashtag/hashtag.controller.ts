import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HashtagService } from './hashtag.service';
import { HashtagDTO } from './hashtag.dto';
import { response } from 'express';

@Controller('Hashtag')
@ApiTags('Hashtag')
export class HashtagController {
  constructor(private hashtagService: HashtagService) {}

  @Get()
  async ShowAllHashtags() { //Pegando todas as hashtags cadastradas
    try {
      return await this.hashtagService.ShowAll();
    } catch (e) {
      return e;
    }
  }
  //Cadastrando hashtag
  @Post()
  async createHashtag(@Body() data: HashtagDTO) {
    try {
      await this.hashtagService.create(data); //chamando a função no service para fazer a operação no BD
      return { mensagem: 'Hashtag cadastrada com sucesso!' };
    } catch (e) {
      return e;
    }
  }
  //buscando hashtag específica por um id
  @Get(':id')
  async readHashtag(@Param('id') id: string) {
    try {
      const response = await this.hashtagService.read(id) //chamando a função no service para fazer a operação de busca no BD
      if (!response){
        throw new NotFoundException('Hashtag não encontrada.')
      }

      return response

    } catch (e) {
      return e;
    }
  }
  //editando (update) hashtag (buscando por id)
  @Put(':id')
  async updateHashtag(
    @Param('id') id: string,
    @Body() data: HashtagDTO,
  ) {
    try {
      await this.hashtagService.update(id, data); //chamando a função no service para fazer a operação no BD
      return { mensagem: 'Hashtag editada com sucesso!' };
    } catch (e) {
      return e;
    }
  }
  //deletando hashtag (buscando por id)
  @Delete(':id')
  async destroyHashtag(@Param('id') id: string) {
    try {
      const getHashtag = await this.hashtagService.read(id)
      if(!getHashtag){
        throw new NotFoundException('Hashtag não encontrada.')
      }
      await this.hashtagService.destroy(id); //chamando a função no service para fazer a operação no BD
      return {mensagem:'sucesso ao deletar hashtag'}
    } catch (e) {
      return e;
    }
  }
}
