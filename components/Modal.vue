<script setup lang="ts">
  const props = defineProps({
    isOpen: {
      type: Boolean,
      required: true,
    },
  });

  const emit = defineEmits(["update:isOpen"]);

  const close = () => {
    emit("update:isOpen", false);
  };
</script>

<template>
  <div
    v-if="props.isOpen"
    class="fixed inset-0 z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          :class="{
            'ease-out duration-300 opacity-100 translate-y-0 sm:scale-100':
              isOpen,
            'ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95':
              !isOpen,
          }"
        >
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="w-full">
              <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3
                  class="text-base font-semibold leading-6 text-gray-900"
                  id="modal-title"
                >
                  <slot name="title">Modal Title</slot>
                </h3>
                <div class="mt-2">
                  <slot name="body">Modal Body Content</slot>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .modal-enter-active,
  .modal-leave-active {
    transition: opacity 0.3s, transform 0.3s;
  }
  .modal-enter,
  .modal-leave-to {
    opacity: 0;
    transform: translateY(4px);
  }
</style>
