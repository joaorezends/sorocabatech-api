import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'links' })
export class Link {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;
}
