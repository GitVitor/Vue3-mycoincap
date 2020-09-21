<template>
  <main class="container">
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App"
});
</script>
