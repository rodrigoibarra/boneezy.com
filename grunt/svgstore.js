module.exports = {
  options: {
    prefix : "icono-",
    cleanup: true,
    svg: {
      style: "display: none;"
    }
  },
  default: {
    files: {
      "_includes/svg-defs.svg": ["_development/svg/*.svg"]
    }
  }
}
