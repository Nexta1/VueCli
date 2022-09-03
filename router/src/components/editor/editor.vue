<template>
  <div id="editor"></div>
</template>

<script setup lang="ts">
import { nextTick } from 'vue'
import ToastEditor from './toastEditor'
interface IProps {
  modelValue: string
  height: number
  placeholder: string
}
const props = withDefaults(defineProps<IProps>(), {
  modelValue: '',
  height: 500,
  placeholder: '',
})

const emit = defineEmits(['update:modelValue'])
nextTick(() => {
  const toastui = new ToastEditor('#editor', `${props.modelValue}`, `${props.height}px`)
  toastui.editor.on('change', (type: string) => {
    const content = type == 'markdown' ? toastui.editor.getMarkdown() : toastui.editor.getHTML()
    emit('update:modelValue', content)
  })
})
</script>

<style lang="scss" scoped>
#editor {
  @apply bg-white;


	:deep(.fullScreen) {
		position: fixed !important;
		z-index: 1000;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #fff;
	}

	//隐藏底部编辑器模式切换
	// :deep(.toastui-editor-mode-switch) {
	// 	display: none !important;
	// }
}

</style>
