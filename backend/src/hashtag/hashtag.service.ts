import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HashtagEntity } from './hashtag.entity';
import { HashtagDTO } from './hashtag.dto';

@Injectable()
export class HashtagService {
  constructor(
    @InjectRepository(HashtagEntity)
    private hashtagRepository: Repository<HashtagEntity>,
  ) {}

  async ShowAll() {
    const dados = await this.hashtagRepository.find();

    return { dados: dados, total: dados.length };
  }

  async create(data: HashtagDTO) {
    

    const hashtag = new HashtagEntity({
      nome: data.nome,
      descricao: data.descricao,
    });

    await this.hashtagRepository.save(hashtag);
    return hashtag;
  }

  async read(id: string) {
    return await this.hashtagRepository.findOne({ where: { id: id } });
  }

  async update(id: string, data: Partial<HashtagDTO>) {
    await this.hashtagRepository.update({ id: id }, data);
    return await this.hashtagRepository.findOne({ id: id });
  }

  async destroy(id: string) {
    return await this.hashtagRepository.delete({ id: id });
  }
}
