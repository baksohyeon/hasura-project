import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Author {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column('varchar')
  @Field()
  lastName: string;

  @Column('varchar')
  @Field()
  firstName: string;
}
