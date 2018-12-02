export const removeTilde = (str) => {
  let mapTilde = {
    'A~': '',
    'B~': '',
    'C~': '',
    'D~': '',
    'E~': '',
    'F~': ''
  }
  return str.replace(/A~|B~|C~|D~|E~/gi, (matched) =>  mapTilde[matched])
}
