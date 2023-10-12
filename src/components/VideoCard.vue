<script setup lang="ts">
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

        <span class="video-live" v-if="props.video.live_status === 'live'">LIVE</span>
        <span class="video-upcoming" v-else-if="props.video.live_status === 'upcoming'">UPCOMING</span>
        <span class="video-duration" v-else-if="props.video.duration">{{props.video.duration}}</span>
    </div>
</template>

<style scoped>
.video-card {
    cursor: pointer;
    flex-shrink: 0;
    height: 100%;
    position: relative;
    width: 100%;
}

.video-card img {
    height: 100%;
    width: 100%
}

.video-card .video-duration,
.video-card .video-live,
.video-card .video-upcoming {
    border-radius: 4px;
    bottom: 8px;
    color: white;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 1px 4px;
    position: absolute;
    right: 9px;
}

.video-card .video-duration {
    background-color: black;
    letter-spacing: 1px;
}

.video-card .video-live {
    background-color: red;
}

.video-card .video-upcoming {
    background-color: black;
}
</style>
