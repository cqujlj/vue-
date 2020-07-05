<template>
    <div class="title">
       <slot name="left" class="left"></slot>
        <slot name="center" class="center"></slot>
        <slot name="right" class="right"></slot>
    </div>
</template>

<script>
    export default {
        name: "TitleNav"
    }
</script>

<style scoped>
.title{
    width: 50vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 2px solid darkred;
    height: 3rem;
}
.center{
    width: 60%;
    height: 2.8rem;
    line-height: 2.8rem;
    flex: 1;
}
.left,.right{
    width: 20%;
    height: 2.8rem;
    line-height: 2.8rem;
    flex: 1;
}

</style>