/** @type {import('stylelint').Config} */
export default {
  extends: "stylelint-config-standard",
    "rules":{
    "unit-allowed-list": ["px", "rem", "%", "ch", "deg", "vh"],
        "value-keyword-case": ["lower", { "camelCaseSvgKeywords": true }]
     }
    };
