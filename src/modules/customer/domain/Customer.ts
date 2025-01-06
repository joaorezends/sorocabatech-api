import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CustomerType } from './CustomerType';

@Entity({ name: 'customers' })
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  type: CustomerType;

  @Column()
  document: string;
}
