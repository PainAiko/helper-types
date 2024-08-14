export const isAnEmptyObjectArray = (array: any[]) => {
    return array.length && Object.keys(array[0]).length;
}

export const isEmpty = (value: any) => {
    return value == undefined || value == null || value == '';
}

export const isNotEmpty = (value: any) => {
    return !isEmpty(value);
}

export const isEmptyObject = (obj: any) => {
    if(obj.constructor != Object) return isEmpty(obj);
    return Object.keys(obj).length === 0 && typeof obj === "object";
}

export function isValidObject(obj:any) {
    if (typeof obj !== 'object') {
        return isNotEmpty(obj);
    }
    for (let key in obj) {
        if (obj[key] == null) {
            return false;
        }
    }
    return true;
}

export const excludeOne = <T>(entity: T, exclude: keyof T): T => {
  const { [exclude]: _, ...rest } = entity
  return rest as T
}

export const excludesKeys = <T>(entity: T, exclude: Array<keyof T>): T => {
    let result: any = {...entity};
    exclude.forEach((key) => {
        delete result[key];
    })
    return result;
}

export const excludeMany = <T>(entity: T[], exclude: keyof T): T[] => {
  return entity.map((item) => {
    const { [exclude]: _, ...rest } = item
    return rest
  }) as T[]
}

export const excludeEmpty = <T>(entity: any):T => {
  const keys = Object.keys(entity);
  const filteredKeys = keys.filter((key) => isNotEmpty(entity[key]) || entity[key]?.toString() == 'false' );
  let result: any = {};
  filteredKeys.forEach((key) => {
    result[key] = entity[key];
  });
  return Object.keys(result).length > 0 ? result : null;
}

export const isNotEmptyAllProperties = (entity: any) => {
  const keys = Object.keys(entity);
  return keys.length > 0 && keys.every((key) => isNotEmpty(entity[key]));
}

export const isEmptyAllProperties = (entity: any) => {
    const keys = Object.keys(entity);
    return keys.length > 0 && keys.every((key) => isEmpty(entity[key]));
}
