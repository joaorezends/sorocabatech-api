import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'categories' })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'is_active' })
  isActive: boolean;

  @Column()
  name: string;

  @Column()
  description: string | null;

  @Column({ name: 'is_featured' })
  isFeatured: boolean;

  @Column({ name: 'seo_title' })
  seoTitle: string | null;

  @Column({ name: 'seo_description' })
  seoDescription: string | null;

  @Column({ name: 'seo_url' })
  seoUrl: string | null;

  @Column({ name: 'category_id' })
  categoryId: string | null;
}
