export class CreateMenuDto {
  name: string;
  path: string;
  pid: number;
  active: number;
  hideMenu: number;
  hideChildrenInMenu: number;
  redirect?: string;
  roles?: string;
  orderNo?: number;
  icon?: string;
  title?: string;
}

export class UpdateMenuDto {
  id: number;
  name: string;
  path: string;
  pid: number;
  active: number;
  hideMenu: number;
  hideChildrenInMenu: number;
  redirect?: string;
  roles?: string;
  orderNo?: number;
  icon?: string;
  title?: string;
}
