import { ParseBinaryOptions } from "../common/types.js";

export function convertToString<Header extends ReadonlyArray<string>>(
  binary: Uint8Array | ArrayBuffer,
  options: ParseBinaryOptions<Header>,
): string {
  return new TextDecoder(options?.charset, {
    ignoreBOM: options?.ignoreBOM,
    fatal: options?.fatal,
  }).decode(binary instanceof ArrayBuffer ? new Uint8Array(binary) : binary);
}
