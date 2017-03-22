import pako from 'pako';

function pakoCompress(str, options) {
  return pako.deflateRaw(str, {
    level: 9,
    memLevel: 9,
    ...options,
    to: 'string',
  });
}

function pakoDecompress(str, options) {
  return pako.inflateRaw(str, {
    ...options,
    to: 'string',
  });
}

export function compress(str) {
  return pakoCompress(str);
}

export function decompress(str) {
  return pakoDecompress(str);
}

export function withOptions(options) {
  return {
    compress: (str) => pakoCompress(str, options),
    decompress: (str) => pakoDecompress(str, options),
  };
}
