import type { AppRouteModule } from '/@/router/types'

import { PAGE_LAYOUT_COMPONENT } from '/@/router/constant'

const routers: AppRouteModule = {
  layout: {
    path: 'basis-manage',
    name: 'basis-manage',
    component: PAGE_LAYOUT_COMPONENT,
    redirect: { name: 'date-manage-list-page' },
    meta: {
      title: '基础数据',
      icon: 'ant-design:appstore-outlined'
    }
  },

  routes: [
    {
      path: 'date-manage-list-page',
      name: 'date-manage-list-page',
      component: (): unknown =>
        import(`/@/views/pages/basis-manage/date-manage/data-list/list-page.vue`),
      meta: {
        title: '日期管理'
      }
    },
    {
      path: 'date-manage-data-page',
      name: 'date-manage-data-page',
      component: (): unknown =>
        import(`/@/views/pages/basis-manage/date-manage/data-page/data-page.vue`),
      meta: {
        title: '日期管理详情',
        hideInMenu: true,
        ignoreTabKeepAlive: true
      }
    },
    {
      path: 'dictionary-manage-list-page',
      name: 'dictionary-manage-list-page',
      component: (): unknown =>
        import(`/@/views/pages/basis-manage/dictionary-manage/data-list/list-page.vue`),
      meta: {
        title: '字典管理'
      }
    },
    {
      path: 'dictionary-manage-data-page',
      name: 'dictionary-manage-data-page',
      component: (): unknown =>
        import(`/@/views/pages/basis-manage/dictionary-manage/data-page/data-page.vue`),
      meta: {
        title: '字典管理详情',
        hideInMenu: true,
        ignoreTabKeepAlive: true
      }
    },
    {
      path: 'problem-manage-list-page',
      name: 'problem-manage-list-page',
      component: (): unknown =>
        import(`/@/views/pages/basis-manage/problem-manage/data-list/list-page.vue`),
      meta: {
        title: '问题管理',
        auth: ['PROBLEM_MANAGE_READ']
      }
    },
    {
      path: 'problem-manage-data-page',
      name: 'problem-manage-data-page',
      component: (): unknown =>
        import(`/@/views/pages/basis-manage/problem-manage/data-page/data-page.vue`),
      meta: {
        title: '问题管理详情',
        hideInMenu: true,
        ignoreTabKeepAlive: true,
        auth: {
          new: ['PROBLEM_MANAGE_CREATE'],
          view: ['PROBLEM_MANAGE_READ'],
          edit: ['PROBLEM_MANAGE_UPDATE']
        }
      }
    },
    {
      path: 'image-manage-list-page',
      name: 'image-manage-list-page',
      component: (): unknown => import(`/@/views/pages/account-mange/center/index.vue`),
      meta: {
        title: '图片管理'
      }
    }
  ],
  sortValue: 1
}

export default routers
