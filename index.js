// Pages
import home from './components/pages/home.js'

const routes = [
    { path: '/', component: home},
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})
const app = Vue.createApp({
    data() {
        return {
            direction: 0,
            componente: window.location.hash
        }
    },
    components:{
        'main-menu': mainMenu,
    },
    computed: {
        username() {
            return this.$route.params.username
          }
    },
    methods:{

    },
    mounted() {
        window.addEventListener('hashchange', () => {
            this.componente = window.location.hash
        })
        window.addEventListener('touchstart',(start)=>{
            this.direction += start.touches[0].clientX
        })
        window.addEventListener('touchend', (end)=>{
            this.direction -= end.changedTouches[0].clientX
            this.touchMudarRotas()
            this.direction = 0
        })
    },
    template:`
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-0 p-0" style="overflow: clip">
                <transition mode="out-in" name="slide-fade">
                    <router-view></router-view>
                </transition>
            </div>
            <div class="gx-0 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                
            </div>
        </div>
    </div>  
    `
})

app.use(router)
app.mount('#app')
