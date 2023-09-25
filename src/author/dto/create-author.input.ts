import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAuthorInput {
  @Field(() => Int, { description: 'author id' })
  id: number;

  @Field(() => String, { description: 'last name' })
  lastName: string;

  @Field(() => String, { description: 'first name' })
  firstName: string;
}
