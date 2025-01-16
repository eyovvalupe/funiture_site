<template>
  <Transition name="toast">
    <div
      v-if="show"
      class="fixed top-4 right-4 z-50 min-w-[300px] p-4 rounded-lg shadow-lg"
      :class="type === 'success' ? 'bg-green-50' : 'bg-red-50'"
    >
      <div class="flex items-center gap-3">
        <div class="flex-shrink-0">
          <i
            class="bx bx-check text-2xl"
            :class="type === 'success' ? 'text-green-500' : 'text-red-500'"
            v-if="type === 'success'"
          ></i>
          <i
            class="bx bx-x text-2xl"
            :class="type === 'success' ? 'text-green-500' : 'text-red-500'"
            v-else
          ></i>
        </div>
        <div class="flex-1">
          <p
            class="text-sm font-medium"
            :class="type === 'success' ? 'text-green-800' : 'text-red-800'"
          >
            {{ message }}
          </p>
        </div>
        <div class="flex-shrink-0">
          <button
            @click="closeToast"
            class="inline-flex text-gray-400 hover:text-gray-500"
          >
            <i class="bx bx-x text-xl"></i>
          </button>
        </div>
      </div>
      <div
        class="absolute bottom-0 left-0 h-1 bg-opacity-40 rounded-b-lg"
        :class="type === 'success' ? 'bg-green-500' : 'bg-red-500'"
        :style="{ width: `${progress}%` }"
      ></div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "success",
  },
  duration: {
    type: Number,
    default: 3000,
  },
});

const emit = defineEmits(["close"]);
const show = ref(true);
const progress = ref(100);
let progressInterval;

const closeToast = () => {
  show.value = false;
  emit("close");
};

onMounted(() => {
  const startTime = Date.now();
  const endTime = startTime + props.duration;

  progressInterval = setInterval(() => {
    const now = Date.now();
    const remaining = endTime - now;
    progress.value = (remaining / props.duration) * 100;

    if (remaining <= 0) {
      closeToast();
    }
  }, 10);

  setTimeout(closeToast, props.duration);
});

onUnmounted(() => {
  clearInterval(progressInterval);
});
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.toast-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
