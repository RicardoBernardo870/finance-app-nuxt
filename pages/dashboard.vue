<script setup lang="ts">
  import Header from "~/components/HeaderComponent/Header.vue";
  import AddDataMenu from "~/components/AddDataMenu.vue";
  import StatsConsole from "~/components/StatsConsole.vue";
  import { onMounted } from "vue";
  import { useUserStore } from "../store/user";

  definePageMeta({
    middleware: "auth",
  });

  const { getUser } = useUserStore();

  const chartData = ref<{ dates: string[]; values: number[] } | null>(null);
  const addInvestmentsModalOpen = ref<boolean>(false);

  onMounted(() => {
    chartData.value = {
      dates: [
        "2023-01-01",
        "2023-02-01",
        "2023-09-01",
        "2023-04-01",
        "2023-08-01",
      ],
      values: [1000, 1050, 1102.5, 1157.625, 1215.50625],
    };
  });
</script>

<template>
  <div>
    <Header />
    <div class="flex flex-col items-center justify-center">
      <div
        class="container space-x-12 mx-auto flex flex-col px-12 py-28 sm:flex-row"
      >
        <StatsConsole />
      </div>

      <AddDataMenu
        @open-add-investment-modal="addInvestmentsModalOpen = true"
      />

      <AddPlans
        :isOpen="addInvestmentsModalOpen"
        @close-modal="addInvestmentsModalOpen = false"
      />
    </div>
  </div>
</template>
