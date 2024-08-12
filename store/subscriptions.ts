import { defineStore } from "pinia";
import { useUserStore } from "./user";

export const useSubscriptionsStore = defineStore("subscriptions", () => {
  const client = useSupabaseClient();
  const { user } = storeToRefs(useUserStore());

  const investments = ref();

  const getSubscriptions = async (user: string) => {
    try {
      const response = await client
        .from("subscriptions")
        .select("*")
        .eq("user_id", user);
   
      investments.value = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const createSubscription = async (investment: any) => {
    try {
      const dataToSend = {
        ...investment,
        user_id: user.value.id,
      };
      console.log(dataToSend)
      await client.from("subscriptions").insert(dataToSend);

      await getSubscriptions();
    } catch (error) {
      console.error(error);
    }
    };
    
    watch(user, (newUser) => {
      getSubscriptions(newUser.id);
     });

  return {
    investments,
    getSubscriptions,
    createSubscription,
  };
});
