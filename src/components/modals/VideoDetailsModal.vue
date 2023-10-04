<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal';
import VideoPlayer from "./../VideoPlayer.vue";
import CloseButton from "./../CloseButton.vue";

import type { Video } from "./../../types";


interface IProps {
    title?: string,
    video: Video,
};


const props = defineProps<IProps>();


const emit = defineEmits<{
    (e: 'confirm'): void
}>();
</script>

<template>
    <VueFinalModal
        class="confirm-modal"
        content-class="confirm-modal-content"
        overlay-transition="vfm-fade"
        content-transition="vfm-fade"
    >
        <div class="modal-header">
            <span class="close-button" @click="emit('confirm')">
                <CloseButton />
            </span>
        </div>

        <div class="details-container">
            <div class="video-thumbnail">
                <VideoPlayer :id="video.youtube_video_id" :title="video.title" />
            </div>

            <div class="video-info">
                <h1>{{ props.video.title }}</h1>

                {{ props.video.description }}
            </div>
        </div>
    </VueFinalModal>
</template>

<style>
.modal-header {
    display: flex;
}

.modal-header .close-button {
    cursor: pointer;
    margin-left: auto;
}

.details-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.details-container .video-thumbnail {
    flex: 1 1 0%;
    position: relative;
}

.details-container .video-thumbnail > * {
    width: auto;
    height: 100%;
}

.details-container .video-info {
    height: 300px;
    overflow-y: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
}

.confirm-modal {
    align-items: center;
    display: flex;
    justify-content: center;
}

.confirm-modal-content {
    background: #fff;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    position: relative;
    margin-left: 1rem;
    margin-right: 1rem;
    max-width: 1000px;
    min-width: 200px;
}

.confirm-modal-content > * + * {
    margin: 0.5rem 0;
}

.confirm-modal-content h1 {
    font-size: 1.375rem;
}

.confirm-modal-content button {
    border-radius: 0.5rem;
    border: 1px solid;
    margin: 0.25rem 0 0 auto;
    padding: 0 8px;
}


@media screen and (min-width: 600px) {
    .details-container {
        flex-direction: row;
        height: 300px;
    }

    .details-container > * {
        max-width: 50%;
    }
}
</style>
