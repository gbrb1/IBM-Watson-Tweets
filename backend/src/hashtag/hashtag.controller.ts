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
    return await this.hashtagService.ShowAll();
  }

  @Post()
  async createHashtag(@Body() data: HashtagDTO) {
    try {
      return await this.hashtagService.create(data);
    } catch (e) {
      return e;
    }
  }

  @Get(':id')
  async readHashtag(@Param('id') id: string) {
    return await this.hashtagService.read(id);
  }

  @Put(':id')
  async updateHashtag(
    @Param('id') id: string,
    @Body() data: Partial<HashtagDTO>,
  ) {
    return await this.hashtagService.update(id, data);
  }

  @Delete(':id')
  async destroyHashtag(@Param('id') id: string) {
    return await this.hashtagService.destroy(id);
  }
}
