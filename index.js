function tabindexes () {
  var result = ''
  for (var i = 0; i <= 9; i++) {
    result += ', [tabindex^="' + i + '"]'
  }
  return result
}

module.exports = 'a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls], summary, '  + tabindexes()
