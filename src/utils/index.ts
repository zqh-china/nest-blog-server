import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

const homedir = os.homedir();
const projectConfigDir = path.resolve(homedir, '.mysql', 'blog');
export const getProjectConfig = (field, env) => {
  const fieldPath = path.resolve(projectConfigDir, env, field);
  return fs.readFileSync(fieldPath).toString().trim();
};

export function success(result: any, message: string) {
  return {
    code: 0,
    result,
    message,
  };
}

export function failure(message: string) {
  const result = [];
  return {
    code: -1,
    result,
    message,
  };
}

export function wrapperResponse(p: Promise<any>, message: string) {
  return p
    .then((data) => success(data, message))
    .catch((error) => failure(error.message));
}

export function updateObj(obj1, obj2) {
  for (const key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      const value = obj1[key];
      if (value !== null) {
        // 通过类型断言，告诉TypeScript编译器这里的赋值是安全的
        (obj2 as Record<string, any>)[key] = value;
      }
    }
  }
}
