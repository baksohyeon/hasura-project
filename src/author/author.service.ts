import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from 'src/common/entity/author.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  async create(createAuthorInput: CreateAuthorInput) {
    const newAuthor = this.authorRepository.create(createAuthorInput);
    return this.authorRepository.save(newAuthor);
  }

  findAll() {
    return this.authorRepository.find();
  }

  findOne(id: number) {
    return this.authorRepository.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateAuthorInput: UpdateAuthorInput) {
    return `This action updates a #${id} author`;
  }

  async remove(id: number) {
    const result = await this.authorRepository.delete({ id });
    console.log(`This action removes a #${id} author`);
    return { result };
  }
}
