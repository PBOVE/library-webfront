<template>
  <div class="header-right-action">
    <slot />
    <div v-if="isShowUserInfo" class="ml-8">
      <div v-if="userIsLogin">
        <drop-menu>
          <router-link :to="{ name: PageEnum.BASE_HOME }" class="index-middle pointer c000">
            <a-avatar :size="25">
              <template #icon>
                <UserOutlined />
              </template>
            </a-avatar>
            <div class="ml-3">
              {{ userInfo.username }}
            </div>
          </router-link>
        </drop-menu>
      </div>
      <Button v-else type="primary" @click="onLoginButton">
        登 录
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { Button } from '/@/lib/UI/index'
import { useGo } from '/@/hooks/web/usePage'
import { PageEnum } from '/@/enums/pageEnum'
import { userStore } from '/@/store/modules/user'
import { isDef } from '/@/utils/is'
import dropMenu from './dropMenu.vue'

export default defineComponent({
  components: { Button, dropMenu },
  props: {
    isShowUserInfo: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const go = useGo()

    // 页面跳转
    function onLoginButton() {
      go({ name: PageEnum.BASE_LOGIN })
    }

    // 用户是否登录
    const userIsLogin = computed(() => {
      return isDef(userStore.getUserInfoState?.id)
    })

    // 用户信息
    const userInfo = computed(() => {
      return userStore.getUserInfoState
    })

    return { PageEnum, userIsLogin, userInfo, onLoginButton }
  }
})
</script>

<style lang="less" scoped>
.header-right-action {
  display: inline-flex;
  align-items: center;
}
</style>
