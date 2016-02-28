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
      "includes/svg-defs.svg": ["dev/svg/*.svg"]
    }
  }
}
