import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HashtagEntity } from './hashtag.entity';
import { HashtagDTO } from './hashtag.dto';


@Injectable()

export class HashtagService{
    
    constructor (@InjectRepository(HashtagEntity) private hashtagRepository: Repository<HashtagEntity>, ){}
      
   async ShowAll(){
    return await this.hashtagRepository.find();
    }

    async create(data: HashtagDTO){
        const hashtag = await this.hashtagRepository.create(data);
        await this.hashtagRepository.save(hashtag);
        return hashtag;
    }

    async read(id: string){
        return await this.hashtagRepository.findOne({where: { id }});
    }

    async update(id: string, data: Partial<HashtagDTO>){
        await this.hashtagRepository.update({id}, data);
        return await this.hashtagRepository.findOne({ id});
    }

    async destroy(id: string){
        await this.hashtagRepository.delete({id});
        return {deleted: true};
    }
}
