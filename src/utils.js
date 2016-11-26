export function leftpad(padString, length, target) {
  if (target.length < length) {
    return leftpad(padString, length, padString + target)
  } else {
    return target
  }
}
