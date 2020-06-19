function transform(acc, item) {
  return Object.assign({ [item.id]: item }, acc);
}

function byId(items) {
  if (!items || typeof items === 'string' || !items.length) {
    return {};
  }
  return items.reduce(transform, {});
}

exports.default = byId