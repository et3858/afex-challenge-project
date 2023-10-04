<script setup lang="ts">
import LiteYouTubeEmbed from 'vue-lite-youtube-embed';
import 'vue-lite-youtube-embed/style.css';

interface IProps {
    id: string,
    title: string,
};

defineProps<IProps>();
</script>

<template>
    <LiteYouTubeEmbed :id="id" :title="title" />
</template>

<style scoped>
</style>
