<template>
    <div>
        <div class="anchor_list_title">
            <p>热门主播</p>
        </div>
        <singer-list-item v-for="item in anchorList" :singers-item="item"/>
    </div>
</template>

<script>
    import SingerListItem from "./SingerListItem";
    export default {
        name: "AnchorList",
        components:{
            SingerListItem
        },
        props:{
            anchorList:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .anchor_list_title{
        width: 80%;
        height:1.7rem;
        line-height: 1.7rem;
        font-size: 1rem;
        margin: 0.7rem auto;
        border-bottom: 1px solid grey;
        text-align: left;
    }
</style>