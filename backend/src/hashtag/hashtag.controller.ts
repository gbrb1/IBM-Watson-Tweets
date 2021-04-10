import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HashtagService } from './hashtag.service';
import { HashtagDTO } from './hashtag.dto';

@Controller('Hashtag')
@ApiTags('Hashtag')
export class HashtagController {
  constructor(private hashtagService: HashtagService) {}

  @Get()
  async ShowAllHashtags() {
    try {
      return await this.hashtagService.ShowAll();
    } catch (e) {
      return e;
    }
  }

  @Post()
  async createHashtag(@Body() data: HashtagDTO) {
    try {
      await this.hashtagService.create(data);
      return { mensagem: 'Hashtag cadastrada com sucesso!' };
    } catch (e) {
      return e;
    }
  }

  @Get(':hashtag')
  async readHashtag(@Param('hashtag') hashtag: string) {
    try {
      return await this.hashtagService.read(hashtag);
    } catch (e) {
      return e;
    }
  }

  @Put(':hashtag')
  async updateHashtag(
    @Param('hashtag') hashtag: string,
    @Body() data: Partial<HashtagDTO>,
  ) {
    try {
      await this.hashtagService.update(hashtag, data);
      return { mensagem: 'Hashtag editada com sucesso!' };
    } catch (e) {
      return e;
    }
  }

  @Delete(':hashtag')
  async destroyHashtag(@Param('hashtag') hashtag: string) {
    try {
      await this.hashtagService.destroy(hashtag);
      return { mensagem: 'Hashtag deletada com sucesso!' };
    } catch (e) {
      return e;
    }
  }
}
