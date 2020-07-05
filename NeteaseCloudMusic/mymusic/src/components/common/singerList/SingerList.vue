<template>
    <div>
        <div class="singer_list_title">
            <p>入驻歌手</p>
            <p>查看全部</p>
        </div>
        <singer-list-item v-for="item in singerList" :singers-item="item"/>
    </div>

</template>

<script>
    import SingerListItem from "./SingerListItem";
    export default {
        name: "SingerList",
        components: {
            SingerListItem
        },
        props:{
            singerList:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
.singer_list_title{
    width: 80%;
    height: 1.7rem;
    margin: 0.7rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid grey;
    font-size: 1rem;
}
</style>