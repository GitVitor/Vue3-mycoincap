<template>
  <p v-if="data.loading">Loading...</p>
  <div v-else class="content">
    <ul>
      <li v-for="item in data.result.data" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import usePromise from "../composables/use-promise";
import { getMap } from "../service/cryptocurrency";

export default defineComponent({
  name: "Home",
  setup() {
    const data = ref<object | undefined>(undefined);

    const request = usePromise(getMap);
    request.use();
    data.value = request;

    watchEffect(() => console.log(data.value));
    return {
      data
    };
  }
});
</script>
