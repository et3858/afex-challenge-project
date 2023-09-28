<script setup lang="ts">
import { ref } from 'vue';
import Header from './Header.vue';
import VideoCard from './VideoCard.vue';

const count = ref(0)
</script>

<template>
    <Header />

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
