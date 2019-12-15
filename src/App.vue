<template>
  <div id="app">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider :trigger="null" collapsible v-model="collapsed">
        <div class="logo" />
        <a-menu
          mode="inline"
          theme="dark"
          :default-selected-keys="[$route.path]"
          :defaultOpenKeys="getOpenKey"
          @click="eventMenuClick"
        >
          <template v-for="item in menuData">
            <a-menu-item v-if="item.children.length === 0" :key="item.path">{{
              item.name
            }}</a-menu-item>
            <a-sub-menu v-else :key="item.path" :title="item.name">
              <a-menu-item
                v-for="subItem in item.children"
                :key="subItem.path"
                >{{ subItem.name }}</a-menu-item
              >
            </a-sub-menu>
          </template>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
        </a-layout-header>
        <a-layout-content
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff',
            minHeight: '280px'
          }"
        >
          <!-- 视图 -->
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import { menuData } from './views/config'
export default {
  data () {
    return {
      collapsed: false,
      menuData
    }
  },
  computed: {
    getOpenKey: () => {
      let arr = []
      menuData.map(item => {
        if (item.children.length > 0) {
          arr.push(item.path)
        }
      })
      return arr
    }
  },
  mounted () {
    window.console.log(window.location.href)
    window.console.log(this.$route.path)
  },
  methods: {
    eventMenuClick ({ key }) {
      // console.log("item, key, keyPath: ", item, key, keyPath);
      this.$router.push({
        path: key
      })
    }
  }
}
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.ant-layout {
  height: 100vh;
}
</style>
