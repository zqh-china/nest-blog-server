export class CreateUserDto {
  username: string;
  password: string;
  role?: string;
  email?: string;
  phone_number?: string;
  is_active?: boolean;
}
