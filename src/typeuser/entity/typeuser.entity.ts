import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Typeuser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
