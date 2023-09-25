import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';
import { DeleteResult } from 'typeorm';

@ObjectType()
export class DeleteAuthorOutput {
  @Field(() => Boolean)
  status: boolean;

  @Field(() => String)
  description: string;

  @Field(() => Int)
  affectedRow: number;
}
