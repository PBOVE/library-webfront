<template>
  <a-form-item label="字段名称">
    <ui-input v-model:value="dataItem.label" prop="label" />
  </a-form-item>
  <a-form-item label="提示信息">
    <ui-input v-model:value="dataItem.placeholder" prop="placeholder" />
  </a-form-item>
  <a-form-item label="输入长度">
    <ui-input v-model:value="dataItem.maxlength" prop="maxlength" type="number" />
  </a-form-item>
</template>

<script lang="ts">
import type { InputSchema } from './schema'
import { defineComponent, reactive } from 'vue'
import { templateInit } from '../../utils'
import uiInput from '/@/lib/UI/src/input/index'

export default defineComponent({
  components: { uiInput },
  setup() {
    // 数据集合
    const dataItem = reactive<Partial<InputSchema>>({})

    templateInit<Partial<InputSchema>>(dataItem)

    return { dataItem }
  }
})
</script>

<style lang="less" scoped></style>
