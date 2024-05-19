<script setup lang="ts">
  import Modal from "./Modal.vue";

  type Props = {
    isOpen: boolean;
  };
  type Emits = {
    (e: "closeModal"): void;
  };
  const props = defineProps<Props>();
  const emits = defineEmits<Emits>();

  
</script>

<template>
  <Modal :is-open="props.isOpen" @update:is-open="emits('closeModal')">
    <template #title> Add Investment </template>
    <template #body>
      <div class="space-y-4">
        <label
          for="investment-name"
          class="block text-sm font-medium text-gray-700"
          >Investment Name</label
        >
      </div>
    </template>
  </Modal>
</template>
