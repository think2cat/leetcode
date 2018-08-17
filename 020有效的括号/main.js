/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // '('，')'，'{'，'}'，'['，']'
  if (s && s.length % 2 !== 0) return false
  const t = '({[]})'
  let m = ''
  for (let i = 0; i < s.length; i++) {
    let tmp = s.substr(i, 1)
    let c = t.indexOf(tmp)
    // console.log(i, tmp, c)
    if (c >= 0 && c <= 2) {
      m = t.substr(t.length - 1 - c, 1) + m
      // console.log('++', m)
    } else if (c >= 3 && c <= 6) {
      // console.log('--', tmp, m.indexOf(tmp), m.indexOf(tmp) != 0 ? '错':'对')
      if (m.indexOf(tmp) != 0) {
        return false
      }
      m = m.substr(1)
    }
	if (i == s.length - 1 && m.length > 0) return false
  }
  return true
};