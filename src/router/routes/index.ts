import type { AppRouteRecordRaw, AppRouteModule } from '/@/router/types';
import { genRouteModule } from '/@/utils/routeHelper'

import { DEFAULT_LAYOUT_COMPONENT } from '../constant';
import loginRoute from './modules/loginRoute';

// 路由
import systemRouters from './modules/systemRouters'
import bookRouters from './modules/bookRouters'

const routeModuleList: AppRouteModule[] = [
  systemRouters,
  bookRouters
]

genRouteModule(routeModuleList)
export const asyncRoutes = {

}

// 主框架根路由
export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  component: DEFAULT_LAYOUT_COMPONENT,
  meta: {
    title: ''
  }
};


// 基础路由 不用权限
export const basicRoutes = [loginRoute, RootRoute];