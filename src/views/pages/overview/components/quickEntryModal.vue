<template>
  <a-modal
    :closable="false"
    :width="400"
    :footer="null"
    :body-style="{ padding: '16px 20px 20px' }"
  >
    <div class="modal-header">
      添加快捷操作
    </div>
    <a-form layout="vertical">
      <a-form-item>
        <a-input placeholder="名称" />
      </a-form-item>
      <a-form-item>
        <MenuSelect placeholder="链接" />
      </a-form-item>
    </a-form>
    <div class="index-right modal-footer">
      <a-button @click="onCancel">
        取消
      </a-button>
      <a-button type="primary" class="ml-4">
        完成
      </a-button>
    </div>
  </a-modal>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import MenuSelect from '/@/components/MenuSelect.vue'

export default defineComponent({
  components:{MenuSelect},
  emits: ['on-cancel'],
  setup(_props, { emit }) {
    const onCancel = () => emit('on-cancel')
    return { onCancel }
  }
})
</script>


<style lang="less" scoped>
.modal-header {
  margin: 0 0 24px;
  font-size: 15px;
}
</style>