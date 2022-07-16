/* exported lastChars */
function lastChars(length, string) {
  if (string.length > length) {
    return string.slice(-length);
  } else if (string.length <= length) {
    return string;
  }
}
