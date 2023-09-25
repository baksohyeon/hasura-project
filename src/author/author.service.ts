import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findAll() {
    return this.authorRepository.find();
  }

  async findOne(id: number) {
    const author = await this.authorRepository.findOne({
      where: {
        id,
      },
    });

    if (!author) {
      throw new NotFoundException('해당하는 유저가 없습니다.');
    }

    return author;
  }

  async update(id: number, updateAuthorInput: UpdateAuthorInput) {
    console.log(`This action updates a #${id} author`);

    const author = await this.authorRepository.findOne({
      where: {
        id,
      },
    });

    if (!author) {
      throw new NotFoundException('해당하는 유저가 없습니다.');
    }

    return this.authorRepository.save({ ...author, ...updateAuthorInput });
  }

  async remove(id: number) {
    const result = await this.authorRepository.delete({ id });

    console.log(`This action removes a #${id} author`, result);

    return true;
  }
}
