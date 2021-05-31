import { watch, computed, reactive, ref, unref } from 'vue'
import type { PointInfo } from '/@/lib/interface/PointInfo'
import { pointStore } from '/@/store/modules/point'
import Linked from '/@/utils/linked'
import { cloneDeep } from 'lodash-es'

interface UseLinked {
  linkedState: { undo: boolean; redo: boolean }

  handleUndo: () => void

  handleRedo: () => void
}

export default function (): UseLinked {
  // 表示可以回退或者前进
  const linkedState = reactive({ undo: false, redo: false })
  // 链表
  const linked = new Linked<PointInfo[]>()
  // 拖拽数据信息
  const pointData = computed(() => pointStore.getPointDataState)
  // 内部更新不触发
  const isValueUpdateFromInner = ref<boolean>(false)

  // 监听数据变化
  watch(
    () => pointData.value,
    (val) => {
      if (unref(isValueUpdateFromInner)) {
        isValueUpdateFromInner.value = false
      } else {
        linked.add(val)
        undateState()
      }
    },
    { deep: true }
  )

  // 处理后退
  function handleUndo(): void {
    // 判断是否可以后退
    if (!linked.isUndo) return
    // 标记
    isValueUpdateFromInner.value = true
    // 回退
    linked.undo()
    // 更新
    updateContent()
  }

  // 处理前进
  function handleRedo(): void {
    // 判断是否可以前进
    if (!linked.isRedo) return
    // 标记
    isValueUpdateFromInner.value = true
    // 前进
    linked.redo()
    // 更新
    updateContent()
  }

  // 更新数据
  function updateContent() {
    // 更新状态
    undateState()
    // 更新数据
    pointStore.commitUpdatePointDataState(cloneDeep(linked.current?.element) || [])
    // 更新样式
    updateStyle()
  }

  // 更新状态
  function undateState() {
    linkedState.redo = linked.isRedo
    linkedState.undo = linked.isUndo
  }

  // 跟新样式
  function updateStyle() {
    unref(pointData).forEach((el) => {
      const uuid = el.uuid!
      pointStore.commitUpdatePointStyle({ uuid, key: 'width', value: `${el.width}px` })
      pointStore.commitUpdatePointStyle({ uuid, key: 'height', value: `${el.height}px` })
      pointStore.commitUpdatePointStyle({
        uuid,
        key: 'transform',
        value: `translate(${el.x}px,${el.y}px)`
      })
    })
  }

  return { linkedState, handleUndo, handleRedo }
}
