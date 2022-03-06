<!--
 * @Author: liming
 * @Date: 2022-02-04 14:24:27
 * @LastEditTime: 2022-02-20 19:50:13
 * @FilePath: \Vue3ZheYeColumn\02-代码手敲\zheye\src\components\GlobalHeader.vue
-->
<template>
    <nav class="navbar-dark bg-primary justify-content-between mb-4 px-4">
        <div class="w-75 mx-auto navbar">
            <router-link to="/" class="navbar-brand">者也专栏</router-link>
            <ul v-if="!user.isLogin" class="list-inline mb-0">
                <li class="list-inline-item">
                    <router-link to="/login" class="btn btn-outline-light my-2">登陆</router-link>
                </li>
                <li class="list-inline-item">
                    <router-link to="/signup" class="btn btn-outline-light my-2">注册</router-link>
                </li>
            </ul>
            <ul v-else class="list-inline mb-0">
                <li class="list-inline-item">
                    <dropdown :title="`你好！${user.nickName}`">
                        <dropdown-item>
                            <router-link to="/create" class="dropdown-item">新建文章</router-link>
                        </dropdown-item>
                        <dropdown-item>
                            <router-link :to="`/column/${user.column}`" class="dropdown-item">我的专栏</router-link>
                        </dropdown-item>
                        <dropdown-item>
                            <router-link to="/edit" class="dropdown-item">编辑资料</router-link>
                        </dropdown-item>
                        <dropdown-item>
                            <router-link
                                to="#"
                                class="dropdown-item"
                                @click.prevent="handleLogOut"
                            >退出登录</router-link>
                        </dropdown-item>
                    </dropdown>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Dropdown from "./Dropdown.vue";
import DropdownItem from "./DropdownItem.vue";
import store,{ UserProps } from '../store'
import createMessage from './createMessage'
import { useRouter } from 'vue-router'

export default defineComponent({
    name: "GlobalHeader",
    props: {
        user: {
            type: Object as PropType<UserProps>,
            required: true
        }
    },
    components: {
        Dropdown,
        DropdownItem,
    },
    setup() {
        const router = useRouter()
        const handleLogOut = () => {
            store.commit('logout')
            createMessage('退出登录成功，2s后跳转到首页', 'success', 2000)
            setTimeout(() => {
                router.push('/')
            }, 2000)
        }
        return {
            handleLogOut
        }
    }
});
</script>
