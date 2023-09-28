<script setup lang="ts">
import RemoveButton from "./RemoveButton.vue";
</script>

<template>
    <div class="video-card">
        <RemoveButton />
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
