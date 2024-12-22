export class CreateCateDto {
  name: string;
  desc?: string;
}

export class UpdateCateDto {
  id: number;
  name: string;
  desc: string;
}
