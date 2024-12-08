export class CreateArticleDto {
  title: string;
  content: string;
  author_id: number;
  category_id: number;
  tag_id?: string;
}

export class UpdateArticleDto {
  id: number;
  title?: string;
  content?: string;
  author_id?: number;
  category_id?: number;
  tag_id?: string;
  publish_status?: string;
}
