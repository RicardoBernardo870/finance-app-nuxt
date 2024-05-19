<script setup lang="ts">
  import Header from "~/components/HeaderComponent/Header.vue";
  import AddDataMenu from "~/components/AddDataMenu.vue";
  import StatsConsole from "~/components/StatsConsole.vue";

  definePageMeta({
    middleware: "auth",
  });

  const chartData = ref<{ dates: string[]; values: number[] } | null>(null);
  const addInvestmentsModalOpen = ref<boolean>(false);

  onMounted(() => {
    chartData.value = {
      dates: [

      ],
      values: [],
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
        <InvestmentChart
          :dates="chartData?.dates"
          :values="chartData?.values"
        />
      </div>

      <AddDataMenu
        @open-add-investment-modal="addInvestmentsModalOpen = true"
      />

      <AddInvestments
        :isOpen="addInvestmentsModalOpen"
        @close-modal="addInvestmentsModalOpen = false"
      />
    </div>
  </div>
</template>
