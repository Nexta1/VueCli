import uploadImage from '@/apis/unloadApi'
export default class {
  //编辑器实例
  public editor: toastui.Editor
  public isFullscreen: boolean = false

  constructor(el: string, initialValue: string, public height: string) {
    this.editor = new toastui.Editor({
      el: document.querySelector(el),
      height,
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      initialValue,
      toolbarItems: this.toolbar(),
    })
    this.imageHook()
  }
  //图片上传
  private imageHook() {
    //移除默认base64钩子
    this.editor.removeHook('addImageBlobHook')
    this.editor.addHook('addImageBlobHook', async (blob: any, callback: Function) => {
      const formData = new FormData()
      //添加post数据
      formData.append('file', blob, blob.name)
      //上传图片
      const response = await uploadImage(formData)
      //更改编辑器内容
      callback(response.result.url, blob.name)
    })
  }
  toolbar() {
    return [
      ['heading', 'bold', 'italic'],
      ['hr', 'quote'],
      ['ul', 'ol', 'task', 'indent', 'outdent'],
      ['table', 'image', 'link'],
      ['code', 'codeblock'],
      [
        {
          el: this.fullscreen(),
          name: 'fullscreen',
          tooltip: 'fullscreen',
        },
      ],
    ]
  }

  private fullscreen() {
    const button = document.createElement('button')
    button.className = 'toastui-editor-toolbar-icons last'
    button.style.backgroundImage = 'none'
    button.style.margin = '0'
    button.innerHTML = '<span >全屏</span>'

    button.addEventListener('click', () => {
      !this.isFullscreen ? this.editor.setHeight('100vh') : this.editor.setHeight(this.height)
      let ui = document.querySelector('.toastui-editor-defaultUI') as HTMLDivElement
      ui.classList.toggle('fullScreen')
      this.editor.focus()
      this.isFullscreen = !this.isFullscreen
    })

    document.documentElement.addEventListener('keyup', (event: KeyboardEvent) => {
      if (event.key == 'Escape' && this.isFullscreen) {
        this.editor.setHeight(this.height)
        let ui = document.querySelector('.toastui-editor-defaultUI') as HTMLDivElement
        ui.classList.toggle('fullScreen')
        this.editor.focus()
        this.isFullscreen = false
      }
    })
    return button
  }
}
