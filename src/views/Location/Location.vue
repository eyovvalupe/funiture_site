<template>
    <section>
        <div class="container mx-auto p-5">
            <div class="mt-28 flex flex-col gap-10">
                <div class="text-[30px] text-[#3B3B98] font-bold border-b border-[#E2E8F0]">Store Location</div>
                <div class="flex flex-row justify-between gap-5 w-full">
                    <input class="text-[15px] text-[#3B3B98] font-bold border border-[#3B3B98] w-1/3 p-2 focus:outline-none" name="location" placeholder="Enter City & State or Zip" />
                    <input class="text-[15px] text-[#3B3B98] font-bold border border-[#3B3B98] w-1/3 p-2 focus:outline-none" name="range" placeholder="Within 100 miles" />
                    <input class="text-[15px] text-[#3B3B98] font-bold border border-[#3B3B98] w-1/3 p-2 focus:outline-none" name="type" placeholder="Search by Type" />
                </div>
                <MapDisplay :location="item.location" />
            </div>
        </div>
    </section>
</template>

<script setup>
import MapDisplay from '@/components/MapDisplay.vue';
import AOS from 'aos';
import { list } from '@/utils/Data';
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';

const route = useRoute();   

const id = ref(route.query.id);

const item = computed(() => list.find(i => i.id == id.value));

AOS.init();
</script>

<style lang="scss" scoped>
.phone,
.email {
    transition: 1s;
}
</style>