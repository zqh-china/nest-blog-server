export class CreateTagDto {
  name: string;
  description?: string;
}

export class UpdateTagDto {
  id: number;
  name: string;
  description?: string;
}
