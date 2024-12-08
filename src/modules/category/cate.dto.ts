export class CreateCateDto {
  name: string;
  description?: string;
}

export class UpdateCateDto {
  id: number;
  name: string;
  description: string;
}
