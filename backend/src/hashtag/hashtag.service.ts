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
    //buscando todos os registros no banco hashtag
  async ShowAll() {
    const dados = await this.hashtagRepository.find();
            //array de dados e o lenght
    return { dados: dados, total: dados.length };
  }
  //criar um registro na tabela hashtag
  async create(data: HashtagDTO) {


    const hashtag = new HashtagEntity({
      nome: data.nome,
      descricao: data.descricao,
    });

    await this.hashtagRepository.save(hashtag);
    return hashtag;
  }

  async read(id: string) { //operação no banco pelo service
    return await this.hashtagRepository.findOne({ where: { id: id } });
  }

  async update(id: string, data: Partial<HashtagDTO>) { //operação no banco pelo service
    await this.hashtagRepository.update({ id: id }, data);
    return await this.hashtagRepository.findOne({ id: id });
  }

  async destroy(id: string) { //operação no banco pelo service
    return await this.hashtagRepository.delete({ id: id });
  }
}
