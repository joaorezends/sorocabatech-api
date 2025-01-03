import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { SocialType } from './SocialType';

@Entity({ name: 'socials' })
export class Social {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: SocialType;

  @Column()
  value: string;
}
