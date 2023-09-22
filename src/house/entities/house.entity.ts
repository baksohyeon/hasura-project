import { ObjectType, Field, Int } from '@nestjs/graphql';

// Resonse types need to be an object with an "exampleField" that's an Int
@ObjectType()
export class House {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
