// src/prism-aether.js
/**
 * Prism language definition for Aether (your custom DSL)
 */
export default function (Prism) {
  Prism.languages.aether = {
    // 1. Comments
    comment: /\/\/.*/,

    // 2. Keywords
    keyword:
      /\b(?:for|dec|declare|as|import|export|type|function|repeat|if|else|config|with|global|var)\b/,

    // 3. Selectors: @class and #id
    selector: {
      pattern: /[@#][a-zA-Z_]\w*/,
      alias: "symbol",
    },

    // 4. Strings (single & double quotes)
    string: {
      pattern: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
      greedy: true,
    },

    // 5. Numbers (hex, decimal)
    number: /\b0x[\da-fA-F]+\b|\b\d+(?:\.\d+)?\b/,

    // 6. Operators & punctuation
    operator: /[{}();:,]/,
  };
}
