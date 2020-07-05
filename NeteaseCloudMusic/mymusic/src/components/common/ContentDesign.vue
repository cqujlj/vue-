<template>
    <div class="content">
        <slot class="left"></slot>
        <slot class="center"></slot>
        <slot class="right"></slot>
    </div>
</template>

<script>
    export default {
        name: "ContentDesign"
    }
</script>

<style scoped>
    .content{
        width: 100vw;
        height: 500px;
        display: flex;
    }
    .center{
        width: 50vw;
    }
    .left,.right{
        background-color: red;
        width: 25vw;
        height: 300px;

    }
</style>