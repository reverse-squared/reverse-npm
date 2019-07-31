export function switchObject<T>(key: string, obj: { [key: string]: T} ):T {
  return obj[key] || obj['default'];
}
