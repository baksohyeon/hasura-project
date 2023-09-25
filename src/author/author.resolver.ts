import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { Author } from 'src/common/entity/author.entity';
// import { Author } from 'src/common/entity/author.entity';

// @Resolver(() => Author)
@Resolver(() => Author)
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}

  @Mutation((returns) => Author)
  async createAuthor(
    @Args('createAuthorInput') createAuthorInput: CreateAuthorInput,
  ): Promise<Author> {
    return await this.authorService.create(createAuthorInput);
  }

  @Query((type) => [Author])
  findAll() {
    return this.authorService.findAll();
  }

  @Query(() => Author, { name: 'findOne' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.authorService.findOne(id);
  }

  @Mutation(() => Author)
  updateAuthor(
    @Args('updateAuthorInput') updateAuthorInput: UpdateAuthorInput,
  ) {
    return this.authorService.update(updateAuthorInput.id, updateAuthorInput);
  }

  @Mutation(() => Author)
  removeAuthor(@Args('id', { type: () => Int }) id: number) {
    return this.authorService.remove(id);
  }
}
