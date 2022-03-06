<!--
 * @Author: liming
 * @Date: 2021-09-08 22:34:06
 * @LastEditTime: 2022-03-05 15:52:17
 * @FilePath: \Vue3ZheYeColumn\02-代码手敲\zheye\src\App.vue
-->
<template>
  <div
    class="container-fluid px-0 flex-shrink-0 h-100 d-flex"
    style="flex-direction: column"
  >
    <GlobalHeader :user="currentUser" />
    <Loader :text="'拼命加载中'" background="rgba(0,0,0,0.8)" v-if="loading" />
    <router-view></router-view>
    <footer class="footer mt-auto text-center py-4 text-secondary bg-light">
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">©2022 者也专栏</li>
          <li class="list-inline-item">| 滇ICP备2021007435号</li>
          <li class="list-inline-item">
            |&nbsp;
            <a href="http://api.vikingship.xyz/" target="_blank">
              API 在线调试</a
            >
          </li>
          <li class="list-inline-item">| 更多</li>
        </ul>
      </small>
    </footer>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, watch } from 'vue'
import GlobalHeader from './components/GlobalHeader.vue'
import Loader from './components/Loader.vue'
import { useStore } from 'vuex'
import { GlobalDataProps, UserProps } from './store'
import createMessage from './components/createMessage'

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    Loader
  },
  setup() {
    const store = useStore<GlobalDataProps>()
    const currentUser: Ref<UserProps> = computed(() => store.state.user)
    const loading = computed(() => store.state.loading)
    const error = computed(() => store.state.error)
    watch(
      () => error.value.status,
      () => {
        const { status, message } = error.value
        if (status && message) {
          createMessage(message, 'error', 2000)
        }
      }
    )
    return {
      currentUser,
      loading,
      error
    }
  }
})
</script>

