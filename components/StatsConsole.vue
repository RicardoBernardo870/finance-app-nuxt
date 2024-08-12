<script setup lang="ts">
  import { useSubscriptionsStore } from "../store/subscriptions";
  import { onMounted } from "vue";

  const { getSubscriptions } = useSubscriptionsStore();

  onMounted(async ()  => {
    await getSubscriptions();
  });
</script>

<template>
  <div class="flex flex-col space-y-5 w-80">
    <div class="bg-gray-800 shadow-lg p-2 rounded">
      <h1 class="text-2xl text-white">Total Invested:</h1>
      <span class="text-2xl text-white">1000</span>
    </div>
    <div class="bg-gray-800 shadow-lg p-2 rounded">
      <h1 class="text-2xl text-white">This Month:</h1>
      <span class="text-2xl text-white">1000€</span>
    </div>
  </div>
</template>
