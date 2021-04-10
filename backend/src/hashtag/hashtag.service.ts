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
    //const hashtag = await this.hashtagRepository.create(data);

    const hashtag = new HashtagEntity({
      nome: data.nome,
      descricao: data.descricao,
    });

    await this.hashtagRepository.save(hashtag);
    return hashtag;
  }

  async read(hashtag: string) {
    return await this.hashtagRepository.findOne({ where: { nome: hashtag } });
  }

  async update(hashtag: string, data: Partial<HashtagDTO>) {
    await this.hashtagRepository.update({ nome: hashtag }, data);
    return await this.hashtagRepository.findOne({ nome: hashtag });
  }

  async destroy(hashtag: string) {
    await this.hashtagRepository.delete({ nome: hashtag });
    return { deleted: true };
  }
}
