import AES from 'crypto-js/aes';
import enc from 'crypto-js/enc-utf8';

const salt1 = 's5f4ver4ge6r4g45er4';
const salt2 = '87e1tsv6e27t8y15b49';

export function makeSecureEncrypt(o) {
  const obj = JSON.stringify(o).split('');
  for (let i = 0, l = obj.length; i < l; i += 1) {
    if (obj[i] === '{') {
      obj[i] = '}';
    } else if (obj[i] === '}') {
      obj[i] = '{';
    }
  }

  return AES.encrypt(encodeURI(salt1 + obj.join('')), salt2);
}

export function makeSecureDecrypt(o) {
  let obj = AES.decrypt(o.toString(), salt2);
  obj = obj.toString(enc);
  obj = decodeURI(obj);
  if (salt1 && obj.indexOf(salt1) !== 0) {
    return false;
  }
  obj = obj.substring(salt1.length).split('');
  for (let i = 0, l = obj.length; i < l; i += 1) {
    if (obj[i] === '{') {
      obj[i] = '}';
    } else if (obj[i] === '}') obj[i] = '{';
  }

  return JSON.parse(obj.join(''));
}
