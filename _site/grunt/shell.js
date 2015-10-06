module.exports = {
  jekyllServe: {
    command: "jekyll serve --baseurl="
    },
  jekyllBuild: {
    command: "jekyll build --config _config-dev.yml"
    },
  jekyllDeploy:{
    command: "jekyll build --config _config.yml"
    }
}
