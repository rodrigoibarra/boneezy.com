/** @type {import("stylelint").Config} */
export default {
  "extends": ["stylelint-config-standard"],
  "rules": {
    "unit-allowed-list": ["px", "rem", "%", "ch", "deg", "vh", "vw", "fr"],
    "value-keyword-case": ["lower", { "camelCaseSvgKeywords": true }],
    "no-invalid-position-at-import-rule": true,
    "no-duplicate-at-import-rules": true
  }
};
