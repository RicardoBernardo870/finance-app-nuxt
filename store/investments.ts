import { defineStore } from "pinia";
import { useUserStore } from "./user";

export const useInvestmentsStore = defineStore("investments", () => {
  const client = useSupabaseClient();
  const { user } = storeToRefs(useUserStore());

  const investments = ref();

  const getInvestments = async () => {
    try {
      const response = await client
        .from("investments")
        .select("*")
        .eq("user_id", user.value.id);
   
      investments.value = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const createInvestment = async (investment: any) => {
    try {
      const dataToSend = {
        ...investment,
        user_id: user.value.id,
      };
      console.log(dataToSend)
      await client.from("investments").insert(dataToSend);

      await getInvestments();
    } catch (error) {
      console.error(error);
    }
    };
    
    watch(user, () => {
        getInvestments();
     });

  return {
    investments,
    getInvestments,
    createInvestment,
  };
});
