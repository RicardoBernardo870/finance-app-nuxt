<script setup lang="ts">
  import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

  type Emits = {
    (e: "openAddInvestmentModal"): void;
  };

  const emits = defineEmits<Emits>();
</script>

<template>
  <div class="button-positioning">
    <Menu as="div" class="relative rounded-full inline-block text-left">
      <div>
        <MenuButton
          class="inline-flex w-full justify-center rounded-md bg-[#312e81]/80 px-4 py-2 text-sm font-medium text-white hover:bg-[#4f46e5]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Add
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 bottom-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                @click="emits('openAddInvestmentModal')"
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                Add investment
              </button>
            </MenuItem>

            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                Add assets
              </button>
            </MenuItem>
            
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<style scoped>
  .button-positioning {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
</style>
