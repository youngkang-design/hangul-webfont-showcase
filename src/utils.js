export function leftpad(padString, length, target) {
  if (target.length < length) {
    return leftpad(padString, length, padString + target)
  } else {
    return target
  }
}

export function getFontItem(fontData, fontFamily) {
  for (let group of fontData.groups) {
    for (let item of group.items) {
      if (item.family === fontFamily) {
        return item
      }
    }
  }
  throw "no matched font"
}
