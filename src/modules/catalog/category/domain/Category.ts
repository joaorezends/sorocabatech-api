import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'categories' })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  active: boolean;

  @Column()
  name: string;

  @Column()
  description: string | null;

  @Column()
  featured: boolean;

  @Column()
  seo_title: string | null;

  @Column()
  seo_description: string | null;

  @Column()
  seo_url: string | null;

  @Column()
  category_id: string | null;
}
