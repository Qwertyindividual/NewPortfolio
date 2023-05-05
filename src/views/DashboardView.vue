<template>
  <div class="dashboard">
    <div class="sidebar">
      <SideBar />
    </div>
    <div class="content">
      <router-view v-slot="{ Component, route }">
        <transition
          :enter-active-class="route.meta.enterClass"
          :leave-active-class="route.meta.leaveClass"
          :mode="'out-in'"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";

export default {
  name: "DashboardView",
  components: {
    SideBar,
  },
};
</script>

<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: 0.3fr 5.5fr;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.content {
  overflow: auto;
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
