<script setup lang="ts">
import {
    onMounted,
    ref,
    watch,
} from 'vue';
import { useModal } from 'vue-final-modal';

import Header from './Header.vue';
import VideoCard from './VideoCard.vue';
import VideoDetailsModal from "./modals/VideoDetailsModal.vue";

import type { Video } from "./../types";


const count = ref(0);
const VIDEO_CARDS = Array.from(Array(5));
const videos = ref<Video[]>([]);
const selectedVideo = ref<Video | object>({});


const { open, close } = useModal({
    component: VideoDetailsModal,
    attrs: {
        title: 'Hello World!',
        video: selectedVideo,
        onConfirm() {
            close();
        },
        onClosed() {
            selectedVideo.value = {};
        },
    },
    slots: {
        default: '<p>UseModal: The content of the modal</p>',
    },
});



const handleOpenVideoClick = (video: Video) => {
    selectedVideo.value = video;
    open();
};

const fetchVideos = () => {
    // 
    const URL = "http://localhost:3000";

    fetch(URL)
        .then(response => response.json())
        .then(response => {
            videos.value = response.data;
        })
        .catch(error => {
            console.warn(error);
        });
};

onMounted(() => {
    fetchVideos();
});


watch(videos, () => {
    console.log(videos.value)
});


</script>

<template>
    <Header />

    <div class="videos-container">
        <!-- <template v-for="(e, key) in VIDEO_CARDS" :key="key"> -->
        <template v-for="video in videos" :key="video.id">
            <VideoCard
                :video="video"
                @click="() => handleOpenVideoClick(video)"
            />
        </template>
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
