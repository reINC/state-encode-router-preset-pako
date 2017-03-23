import pako from 'pako';

function pakoCompress(data, options) {
  return pako.deflateRaw(data, {
    level: pako.Z_BEST_COMPRESSION,
    memLevel: 9,
    to: 'string',
    ...options,
  });
}

function pakoDecompress(data, options) {
  return pako.inflateRaw(data, {
    to: 'string',
    ...options,
  });
}

export function compress(data) {
  return pakoCompress(data);
}

export function decompress(data) {
  return pakoDecompress(data);
}

export function withOptions({ compress: compressOptions, decompress: decompressOptions } = {}) {
  return {
    compress: (data) => pakoCompress(data, compressOptions),
    decompress: (data) => pakoDecompress(data, decompressOptions),
  };
}
