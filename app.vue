<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
  useHead({
    bodyAttrs: {
      class: "h-full bg-gray-900",
    },
    htmlAttrs: {
      class: "h-full",
    },
  });
</script>
