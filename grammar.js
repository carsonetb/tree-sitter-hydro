module.exports = grammar({
  name: 'hydro',

  extras: $ => [
    /\s/, // Ignore whitespace
    $.line_comment,
  ],

  rules: {
    // A Hydro file is just a repeated list of ANY of these tokens.
    // This flat structure makes it impossible for the parser to break!
    source_file: $ => repeat(choice(
      $.keyword,
      $.boolean,
      $.number,
      $.string,
      $.identifier,
      $._symbol
    )),

    line_comment: $ => token(seq('//', /.*/)),

    keyword: $ => choice(
      'fn', 'var', 'if', 'elif', 'else', 'for', 'in', 'return', 'class'
    ),

    boolean: $ => choice('true', 'false'),

    // Matches integers and decimals
    number: $ => /\d+(\.\d+)?/,

    // Matches both double and single quote strings
    string: $ => choice(
      seq('"', /[^"]*/, '"'),
      seq("'", /[^']*/, "'")
    ),

    // Any normal word that isn't a keyword
    identifier: $ => /[a-zA-Z_][a-zA-Z0-9_]*/,

    // Catch-all for brackets and punctuation so they parse cleanly
    _symbol: $ => choice(
       '{', '}', '(', ')', '[', ']', ',', '.', ';', ':', '=', '+', '-', '*', '/', '<', '>'
    )
  }
});
