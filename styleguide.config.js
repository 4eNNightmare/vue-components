const path = require('path')
module.exports = {
  title: 'Vue Components',
  getComponentPathLine (componentPath) {
    const name = path.basename(componentPath, '.vue')
    return `import ${name} from '@bit/nightmare4en.vue-components.${name.toLocaleLowerCase()}'`
  }
}
