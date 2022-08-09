import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "lib-flexible"
import "amfe-flexible"
import { Button, Swipe, SwipeItem, Icon, ActionSheet, Calendar, Tabbar, TabbarItem, Sidebar, SidebarItem, Tab, Tabs, List, Rate, Popup } from 'vant';
createApp(App).use(store).use(router).use(Button, Icon, Popup, Swipe, SwipeItem, ActionSheet, Calendar, Tabbar, TabbarItem, Sidebar, Rate, SidebarItem, Tab, Tabs, List).mount('#app')
