((Prism) => {
  Prism.languages.aether = {
    comment: /\/\/.*/,
    keyword:
      /\b(?:for|dec|as|import|export|function|type|repeat|if|else|with|global|config)\b/,
    selector: {
      pattern: /[@#][\w-]+/,
      alias: "symbol",
    },
    "attr-name": /\b[a-zA-Z_]\w*(?=\s*(?:[:=]|with|as)\b)/,
    number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
    operator: /[{}();,]|=>|\.\.\.|[<>]=?|[=+*/%-]/,
    string: {
      pattern: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
      greedy: true,
    },
  };
})(Prism);
