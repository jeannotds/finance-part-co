import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  residence: string;

  @Column()
  telephone: number;
}
