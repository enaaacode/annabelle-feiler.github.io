module.exports = {
  // Max. Zeilenlänge – danach wird umgebrochen (gut für Lesbarkeit)
  printWidth: 100,

  // Einrückung: 2 Leerzeichen
  tabWidth: 2,

  // Keine Tabs verwenden, sondern Spaces
  useTabs: false,

  // Semikolons am Ende jeder Anweisung
  semi: true,

  // Einfache Anführungszeichen bevorzugen (außer HTML-Attribute)
  singleQuote: true,

  // Nur Anführungszeichen bei Objekt-Keys, wenn nötig
  quoteProps: 'as-needed',

  // In JSX weiterhin doppelte Anführungszeichen (z. B. bei React)
  jsxSingleQuote: false,

  // Nachkommata in Objekten/Arrays zulassen (außer bei Funktionen)
  trailingComma: 'es5',

  // Leerzeichen zwischen Objektklammern: { foo: bar }
  bracketSpacing: true,

  // Schließende Klammer bei JSX nicht in die gleiche Zeile
  bracketSameLine: false,

  // Immer Klammern um Arrow-Funktionsparameter: (x) => {}
  arrowParens: 'always',

  // Verhindert unschöne Umbrüche bei HTML-Tags (z. B. > in neuer Zeile)
  htmlWhitespaceSensitivity: 'ignore',

  // Zeilenenden im Unix-Format (LF) – stabil bei Git & plattformübergreifend
  endOfLine: 'lf',

  // Formatierung eingebetteter Inhalte (z. B. CSS in HTML)
  embeddedLanguageFormatting: 'auto',

  proseWrap: 'always', // Für bessere Lesbarkeit in langen Strings
  tabWidth: 2,
  useTabs: false,
};
