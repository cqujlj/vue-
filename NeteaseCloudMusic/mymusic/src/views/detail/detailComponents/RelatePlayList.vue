<template>
    <div class="relate">
        <div class="relate_play_header">
            <div class="header_title">相关推荐</div>
            <div class="relate_play_line"></div>
        </div>

        <relate-play-list-item
                v-for="item in relatedPlay" :relate-play-item="item"/>

    </div>
</template>

<script>
    import RelatePlayListItem from "./RelatePlayListItem";
    export default {
        name: "RelatePlayList",
        components:{
            RelatePlayListItem
        },
        props:{
            relatedPlay:{
                type:Array,
                default(){
                    return []
                }
            }
        },

    }
</script>

<style scoped>
    .relate{
        width: 13rem;
        height: auto;
        margin: 1rem auto;
        text-align: left;
    }
    .header_title{
        font-size: 1rem;
        color: black;
        font-weight: bolder;
        margin: 0.5rem;
    }

    .relate_play_line{
        width: 13rem;
        height: 0.1rem;
        background-color: #dbdbdb;
    }

</style>