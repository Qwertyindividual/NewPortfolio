<template>
  <div class="dashboard">
    <SideBar />
    <div class="content">
      <router-view v-slot="{ Component, route }">
        <transition
          :enter-active-class="route.meta.enterClass"
          :leave-active-class="route.meta.leaveClass"
          :mode="'out-in'">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <div class="socials"></div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";

export default {
  name: "DashboardView",
  components: {
    SideBar
  },
};
</script>

<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: 0.3fr 5.5fr;
  height: 100vh;
  width: 100vw;
  z-index: 1;
}

.content {
  z-index: -1;
}

.socials {
  display: flex;
  flex-direction: column;
}

a {
  margin-top: 100px;
  background-color: black;
}
</style>
