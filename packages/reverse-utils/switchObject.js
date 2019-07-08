function switchObject(key, obj) {
  return obj[key] || obj['default'];
}

module.exports = switchObject;
