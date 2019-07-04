function catchFallback(cb, ifError) {
  try {
    const returnVal = cb();

    if (returnVal instanceof Promise) {
      return returnVal.catch(() => {
        return ifError;
      });
    }
  } catch (e) {
    return ifError;
  }
}

module.exports = catchFallback;
