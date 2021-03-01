import type { App } from 'vue'

import Icon from '/@/components/Icon'
import TableList from '/@/components/TableList/index.vue'
import PublicHeader from '/@/components/PublicHeader/index'
import PublicEditor from '/@/components/PublicEditor/index'
import BookCategorySearchSelect from '/@/components/SearchSelect/BookCategory.vue'

const modules = import.meta.globEager('../components/**.vue')

export default class ComponentRegisterPlugin {
  static init(app: App): void {
    for (const key in modules) {
      const name = key.replace(/^\.\.\/components\/|.vue$/g, '')
      app.component(name, modules[key].default)
    }

    app.component('Icon', Icon)
    app.component('TableList', TableList)
    app.component('PublicEditor', PublicEditor)
    app.component('PublicHeader', PublicHeader)
    app.component('BookCategorySearchSelect', BookCategorySearchSelect)
  }
}
