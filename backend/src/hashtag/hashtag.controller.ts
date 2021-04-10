import { Controller, Delete, Get, Post, Put, Body, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HashtagService } from './hashtag.service';
import { HashtagDTO } from './hashtag.dto';

@Controller('Hashtag')
@ApiTags('Hashtag')


export class HashtagController{
    
    constructor(private hashtagService: HashtagService){

    }

    @Get('/hashtag')
    ShowAllHashtags(){
        return this.hashtagService.ShowAll();
    }

    @Post()
    createHashtag(@Body() data: HashtagDTO){
        return this.hashtagService.create(data);
    }

    @Get(':id')
    readHashtag(@Param('id') id: string){
        return this.hashtagService.read(id);
    }

    @Put(':id')
    updateHashtag(@Param('id') id: string, @Body() data: Partial<HashtagDTO>){
        return this.hashtagService.update(id, data);
    }

    @Delete(':id')
    destroyHashtag(@Param('id') id: string){
        return this.hashtagService.destroy(id);
    }
   


}

