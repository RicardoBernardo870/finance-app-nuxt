import { defineStore } from "pinia";
import { onMounted, ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const client = useSupabaseClient();
  const user = ref<any>();
  const dummy = ref("this is a test");

  const getUser = async () => {
    try {
      const response = await client.auth.getUser();

      user.value = response.data.user;
    } catch (error) {
      console.error(error);
    }
  };

  onMounted(async () => {
    getUser();
  });

  return {
    user,
    getUser,
    dummy,
  };
});
