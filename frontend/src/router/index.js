import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main.vue'
import Form from '../components/Form.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes: [{
        path: '/',
        name: 'Index',
        component: Main
    },
    {
        path: '/form/:idForm',
        name: 'Formulario',
        component: Form
    }
    ]
})