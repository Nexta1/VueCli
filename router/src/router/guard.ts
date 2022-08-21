import { Router } from 'vue-router'
class Guard {
  constructor(private router: Router) {}
  public run() {
    console.log(this.router)
    this.router.beforeEach((to, form) => {
        console.log(to);
        
    })
  }
}
export default (router: Router) => {
  new Guard(router).run()
}
