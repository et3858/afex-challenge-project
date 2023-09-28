<script setup lang="ts">
import { ref } from 'vue';
import VideoCard from './VideoCard.vue';

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
    <h1>{{ msg }}</h1>

    <div class="videos-container">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
    </div>
</template>

<style scoped>
.videos-container {
    display: flex;
    flex-flow: wrap;
    gap: 70px;
    max-width: 1000px;
}
</style>
