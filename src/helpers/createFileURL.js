export function createFileURL(file) {
  if (file instanceof File || file instanceof Blob) {
    return URL.createObjectURL(file);
  }
  throw Error('File format is not valid!');
}
