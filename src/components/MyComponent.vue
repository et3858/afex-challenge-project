<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useModal } from 'vue-final-modal';
import { getRequest, deleteRequest } from "./../services/fetching";

import Header from './Header.vue';
import VideoCard from './VideoCard.vue';
import VideoDetailsModal from "./modals/VideoDetailsModal.vue";
import ConfirmModal from "./modals/ConfirmModal.vue";

import type { Video } from "./../types";


const videos = ref<Video[]>([]);
const selectedVideo = ref<Video | object>({});


const { open: openModal1, close: closeModal1 } = useModal({
    component: VideoDetailsModal,
    attrs: {
        video: selectedVideo,
        onConfirm() {
            closeModal1();
        },
        onClosed() {
            selectedVideo.value = {};
        },
    },
});


const { open: openModal2, close: closeModal2 } = useModal({
    component: ConfirmModal,
    attrs: {
        confirmButtonText: "Remove",
        onConfirm() {
            removeVideo();
            closeModal2();
        },
        onCancel() {
            closeModal2();
        },
        onClosed() {
            selectedVideo.value = {};
        },
    },
    slots: {
        default: '<h1>Are you sure you want to remove this video?</h1>',
    },
});


const removeVideo = () => {
    const videoID: number = selectedVideo.value.id;

    deleteRequest(`/${videoID}`)
        .then(() => {
            videos.value = videos.value.filter(v => {
                return v.id !== videoID;
            });

            alert("Video removed");
        })
        .catch(response => {
            alert(response.error.msg);
        });
};


const handleOpenVideoClick = (video: Video) => {
    selectedVideo.value = video;
    openModal1();
};


const handleConfirmRemoveVideoClick = (video: Video) => {
    selectedVideo.value = video;
    openModal2();
};

const fetchVideos = () => {
    getRequest()
        .then((response: { data: [Video] }) => {
            videos.value = response.data;
        })
        .catch(error => {
            console.warn(error);
        });
};

onMounted(() => {
    fetchVideos();
});


const handleAddVideo = (video: Video) => {
    const videoIndex = videos.value.findIndex(v => v.youtube_video_id === video.youtube_video_id);

    if (videoIndex < 0) {
        videos.value.push(video);

        alert("Video added");
    } else {
        alert("Video already exists");
    }
};
</script>

<template>
    <div class="component-container">

        <Header @addVideo="handleAddVideo" />

        <div class="videos-container">
            <template v-for="video in videos" :key="video.id">
                <VideoCard
                    :video="video"
                    :click="() => handleOpenVideoClick(video)"
                    :removeClick="() => handleConfirmRemoveVideoClick(video)"
                />
            </template>
        </div>
    </div>
</template>

<style scoped>
.component-container {
    margin: auto;
    max-width: 1000px;
}


.videos-container {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 32px;
}
</style>
