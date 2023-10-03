<script setup lang="ts">
import { useModal } from 'vue-final-modal';
import RemoveButton from "./RemoveButton.vue";
import type { Video } from "./../types";

interface IProps {
    video: Video,
    click: Function,
    removeClick: Function,
};

const props = defineProps<IProps>();
</script>

<!--
Youtube video thumbnail aspect ratios:

default  -> 4:3
high     -> 4:3
standard -> 4:3
maxres   -> 16:9
medium   -> 16:9
-->

<template>
    <div class="video-card">
        <RemoveButton @click="removeClick" />

        <img
            :src="props.video.thumbnails.medium.url"
            :alt="props.video.title"
            @click="click"
        />
    </div>
</template>

<style scoped>
.video-card {
    cursor: pointer;
    flex-shrink: 0;
    /* height: 150px; */
    height: 100%;
    position: relative;
    /* width: 263px; */
    /* max-width: 263px; */
    width: 100%;
}
.video-card img {
    height: 100%;
    width: 100%
}
</style>
