<script setup lang="ts">
  import Modal from "./Modal.vue";
  import { usePlansStore } from "~/store/plans";
  import type { Plans } from "~/types/plans";

  type Props = {
    isOpen: boolean;
  };
  type Emits = {
    (e: "closeModal"): void;
  };
  const props = defineProps<Props>();
  const emits = defineEmits<Emits>();

  const { createPlan } = usePlansStore();

  const plan = ref<Plans>({
    name: "",
    price: 0,
    description: "",
  });
  const loading = ref<boolean>(false);

  const addPlan = async () => {
    loading.value = true;

    const dataToSend: Plans = {
      name: plan.value.name,
      price: plan.value.price,
      description: plan.value.description,
    };

    await createPlan(dataToSend);

    loading.value = false;
  };
</script>

<template>
  <Modal :is-open="props.isOpen">
    <template #title> Add Investment </template>
    <template #body>
      <div class="space-y-4">
        <label
          for="investment-name"
          class="block text-sm font-medium text-gray-700"
        >
          Plan Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          v-model="plan.name"
          class="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
        />

        <label for="Amount" class="block text-sm font-medium text-gray-700">
          Price
        </label>

        <input
          id="price"
          name="price"
          type="price"
          v-model="plan.price"
          class="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
        />

        <label for="Type" class="block text-sm font-medium text-gray-700">
          Description
        </label>

        <input
          id="description"
          name="description"
          type="text"
          v-model="plan.description"
          class="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
        />
      </div>
    </template>
    <template #footer>
      <button
        type="button"
        @click="addPlan"
        class="inline-flex w-full justify-center rounded-md bg-[#312e81] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#312e81]/80 sm:ml-3 sm:w-auto"
      >
        <div
          v-if="loading"
          class="border-gray-300 h-5 w-5 animate-spin rounded-full border-2 border-t-blue-600"
        />
        <span v-else>Add</span>
      </button>
      <button
        type="button"
        @click="emits('closeModal')"
        class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
      >
        Cancel
      </button>
    </template>
  </Modal>
</template>
