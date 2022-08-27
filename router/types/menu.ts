interface Menu {
  title?: string
  ischeck?: boolean
  icon?: string
  active?: boolean
  route?: string
}
export interface IMenu extends Menu {
  children: Menu[]
}
