import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { Author } from 'src/author/entities/author.entity';

@Injectable()
export class AuthorService {
  create(createAuthorInput: CreateAuthorInput) {
    return { ...createAuthorInput };
  }

  findAll() {
    // return `This action returns all author`;
    return [
      {
        id: 1,
        lastName: 'last',
        firstName: 'first',
      },
      {
        id: 2,
        lastName: 'last2',
        firstName: 'first2',
      },
    ] as Author[];
  }

  findOne(id: number) {
    return `This action returns a #${id} author`;
  }

  update(id: number, updateAuthorInput: UpdateAuthorInput) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
