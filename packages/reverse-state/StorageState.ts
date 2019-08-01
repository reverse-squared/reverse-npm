import { SimpleState } from './SimpleState';

const storageStateCache: { [storageName: string]: StorageState<any> } = {};

function resolveValue<Type>(name: string, fallback: Type): Type {
  try {
    if(localStorage.getItem(name)) {
      return JSON.parse(localStorage.getItem(name) || '!');
    }
  } catch(ignored) {
    // fall back
  }
  return fallback;
}

class StorageState<Type> extends SimpleState<Type> {
  protected name!: string;
  protected initialValue!: Type;

  constructor(name: string, initialValue: Type) {
    if (name in storageStateCache) {
      return storageStateCache[name];
    }

    super(resolveValue(name, initialValue));

    this.name = name;
    this.initialValue = initialValue;

    this.onChange((value) => {
      localStorage.setItem(name, JSON.stringify(value));
    });
  }
  reset() {
    localStorage.removeItem(name);
    this.set(this.initialValue);
  }
}
