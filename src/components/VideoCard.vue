<script setup lang="ts">
import { useModal } from 'vue-final-modal';
import RemoveButton from "./RemoveButton.vue";
import ConfirmModal from "./modals/ConfirmModal.vue";
import type { Video } from "./../types";

interface IProps {
    video: Video,
};

const props = defineProps<IProps>();

const { open, close } = useModal({
    component: ConfirmModal,
    attrs: {
        onConfirm() {
            close()
        },
    },
    slots: {
        default: '<h1>Are you sure you want to remove this video</h1>',
    },
});
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
        <RemoveButton @click="() => open()" />

        <img :src="props.video.thumbnails.medium.url" :alt="props.video.title" />
    </div>
</template>

<style scoped>
.video-card {
    background-color: gray;
    cursor: pointer;
    flex-shrink: 0;
    height: 150px;
    position: relative;
    width: 263px;
}


.video-card img {
    height: 100%;
    width: 100%;
}
</style>
