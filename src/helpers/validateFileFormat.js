export function validateFileFormat(file, types) {
  return types.some((type) => file.type === type);
}
