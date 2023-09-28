<script setup lang="ts">
import { useModal } from 'vue-final-modal';
import RemoveButton from "./RemoveButton.vue";
import ConfirmModal from "./modals/ConfirmModal.vue";


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

<template>
    <div class="video-card">
        <RemoveButton @click="() => open()" />
    </div>
</template>

<style scoped>
.video-card {
    background-color: gray;
    flex-shrink: 0;
    height: 150px;
    position: relative;
    width: 263px;
}
</style>
