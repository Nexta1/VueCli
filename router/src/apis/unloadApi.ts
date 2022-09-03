import { http } from '@/plugins/axios'
export interface img {
  url: string
}
export default function img(data: FormData) {
  return http.request<img>({
    url: 'image',
    method: 'POST',
    data,
  })
}
