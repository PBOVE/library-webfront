import type { AppRouteRecordRaw } from "/@/router/types";
import type { RouteLocationMatched } from "vue-router";
import { defineComponent, watch, unref, ref, TransitionGroup } from "vue";
import { Breadcrumb, BreadcrumbItem } from "/@/components/Breadcrumb/";
import { useRouter } from "vue-router";
import { PageEnum } from "/@/enums/pageEnum";
import router from "/@/router";

export default defineComponent({
  setup() {
    const { currentRoute } = useRouter();
    const itemList = ref<AppRouteRecordRaw[]>([]);

    // 路由发送变换
    function getBreadcrumb() {
      const { matched } = unref(currentRoute);
      const matchedList = matched.filter(
        (item) => item.meta && item.meta.title
      );
      const routerItem = matchedList[1];
      const result = getHomeRoute(routerItem);
      if (result) {
        matchedList.shift();
      }
      itemList.value = (matchedList as unknown) as AppRouteRecordRaw[];
    }

    // 获取路由
    function getHomeRoute(routerItem: RouteLocationMatched) {
      if (!routerItem || !routerItem.name) return true;
      const routes = router.getRoutes();
      const homeRoute = routes.find((item) => item.path === PageEnum.BASE_HOME);
      if (!homeRoute) return true;
      if (homeRoute.path === routerItem.path) return true;
      return false;
    }

    // 点击标题
    function handleItemClick(item: AppRouteRecordRaw) {
      const { redirect } = item;
      if (redirect) {
        // push(redirect as string)
      }
    }

    // 监听路由发生变化
    watch(
      () => currentRoute.value,
      () => {
        getBreadcrumb();
      },
      {
        immediate: true,
      }
    );

    return () => (
      <Breadcrumb>
        {() => (
          <TransitionGroup name="breadcrumb">
            {() =>
              unref(itemList).map((el) => {
                const isLink = !!el.redirect;
                return (
                  <BreadcrumbItem
                    key={el.path}
                    isLink={isLink}
                    onClick={handleItemClick.bind(null, el)}
                  >
                    {() => el.meta.title}
                  </BreadcrumbItem>
                );
              })
            }
          </TransitionGroup>
        )}
      </Breadcrumb>
    );
  },
});
