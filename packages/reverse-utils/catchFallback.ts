export function catchFallback<Value, Fallback>(cb: () => Value, ifError: Fallback): Value | Fallback {
  try {
    return cb();
  } catch (e) {
    return ifError;
  }
}
export function catchFallbackAsync<Value, Fallback>(cb: () => Promise<Value>, ifError: Fallback): Promise<Value | Fallback> {
  return cb().catch(() => {
    return ifError;
  });
}
