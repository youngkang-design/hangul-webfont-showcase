export function leftpad(padString, length, target) {
  if (target.length < length) {
    return leftpad(padString, length, padString + target)
  } else {
    return target
  }
}

export function getFontItem(fontData, groupIndex, itemIndex) {
  return fontData.groups[groupIndex].items[itemIndex]
}
