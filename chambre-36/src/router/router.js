import Vue from 'vue'
import Router from 'vue-router'

import Home from "@/components/Home";
import Desktop from "@/components/Desktop";
import Login from "@/components/Login";
import BlogHome from "@/components/BlogHome";
import BlogDraft from "@/components/BlogDraft";
import MyModal from "@/components/global/MyModal";
import Mail from "@/components/Mail";

Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/Desktop",
            name: "Desktop",
            component: Desktop
        },
        {
            path: "/Login",
            name: "Login",
            component: Login
        },
        {
            path: "/BlogHome",
            name: "BlogHome",
            component: BlogHome
        },
        {
            path: "/BlogDraft",
            name: "BlogDraft",
            component: BlogDraft
        },
        {
            path: "/MyModal",
            name: "MyModal",
            component: MyModal
        },
        {
            path: "/Mail",
            name: "Mail",
            component: Mail
        },
    ]
})
