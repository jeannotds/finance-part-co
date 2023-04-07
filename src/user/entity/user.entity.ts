import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  adress: string;

  @Column()
  email: string;

  @Column()
  image: string;
}
