import { defineStore } from "pinia";
import { useUserStore } from "./user";
import type { Plans } from "~/types/plans";

export const usePlansStore = defineStore("plans", () => {
  const client = useSupabaseClient();
  const { user } = storeToRefs(useUserStore());

  const plans = ref<Plans[] | null>();

  const getPlans = async () => {
    try {
      const response = await client
        .from("plans")
        .select("*")
        .eq("user_id", user.value.id);

      plans.value = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const createPlan = async (plan: Plans) => {
    try {
      await client
        .from("plans")
        .insert({
          id: plan.id,
          name: plan.name,
          description: plan.description,
          price: plan.price,
          created_at: new Date().toISOString(),
        })
        .select();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    plans,
    getPlans,
    createPlan,
  };
});
