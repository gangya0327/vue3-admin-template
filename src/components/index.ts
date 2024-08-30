import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'

const allGlobalComponents = { SvgIcon, Pagination }

export default {
  install(app) {
    Object.keys(allGlobalComponents).forEach((key) => {
      app.component(key, allGlobalComponents[key])
    })
  },
}
