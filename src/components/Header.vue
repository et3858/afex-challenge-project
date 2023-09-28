<script setup lang="ts">
</script>

<template>
    <div class="header">
        <h3>Add a new video</h3>

        <div class="form-group">
            <div class="input-group">
                <input type="text" placeholder="Enter a video url">
                <button type="button">Add</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header {
    text-align: left;
    margin-bottom: 134px;
}

.input-group {
    display: flex;
    overflow: hidden;
}

.input-group input[type="text"] {
    appearance: none;
    border-radius: 8px 0 0 8px;
    border: 1px solid gray;
    flex-grow: 1;
    font-size: 1rem;
    outline: none;
    padding-left: 16px;
}

.input-group button {
    background-color: #136AE4;
    border-radius: 0 10px 10px 0;
    box-shadow:
        0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 1px 4px 0px rgba(0, 0, 0, 0.12),
        0px 1px 1px 0px rgba(0, 0, 0, 0.20);
    color: white;
    flex-shrink: 0;
    height: 56px;
    width: 100px;
}
</style>
