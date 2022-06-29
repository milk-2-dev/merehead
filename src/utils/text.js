export const truncateText = (text = '', maxSize) => {
  return text.length > maxSize ? text.substring(0, maxSize) + '...' : text
}
