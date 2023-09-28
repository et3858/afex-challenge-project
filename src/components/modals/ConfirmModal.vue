<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal';


interface IProps {
    title?: string,
};


defineProps<IProps>();


const emit = defineEmits<{
    (e: 'confirm'): void
}>()
</script>

<template>
    <VueFinalModal
        class="confirm-modal"
        content-class="confirm-modal-content"
        overlay-transition="vfm-fade"
        content-transition="vfm-fade"
    >
        <slot />

        <div class="buttons-container">
            <button type="button" class="cancel-button" @click="emit('confirm')">Cancel</button>
            <button type="button" class="confirm-button" @click="emit('confirm')">Remove</button>
        </div>
    </VueFinalModal>
</template>

<style>
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
}

.confirm-modal-content .close-modal {
    cursor: pointer;
    position: absolute;
    right: 32px;
    top: 37px;
}

.confirm-modal-content > * + * {
    margin: 0.5rem 0;
}


.confirm-modal .buttons-container {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    margin: 0.25rem 0 0 auto;
}

.confirm-modal-content .buttons-container button {
    border-radius: 0.5rem;
    border: 0;
    box-shadow:
        0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 1px 4px 0px rgba(0, 0, 0, 0.12),
        0px 1px 1px 0px rgba(0, 0, 0, 0.20);
    flex-shrink: 0;
    padding: 8px 20px;
}

.confirm-modal-content .buttons-container button.cancel-button {
    background-color: white;
    border: 1px solid #136AE4;
    color: #136AE4;
}

.confirm-modal-content .buttons-container button.confirm-button {
    background-color:#136AE4;
    color: white;
}
</style>
