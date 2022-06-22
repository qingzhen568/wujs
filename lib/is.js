export const isArray = (val) => {
  return Object.prototype.toString().slice(8, -1).toLowerCase() === 'array';
}