export function validateFileSize(file, maxMB) {
  return file.size / 1024 / 1024 <= maxMB;
}
