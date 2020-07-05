<template>
    <div class="singe_item">
        <div class="singe_item_logo">
            <img :src="showImage">
        </div>
        <div class="singe_item_describe">
            <h4>{{singersItem.name  || singersItem.nickName}}</h4>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SingerListItem",
        props:{
            singersItem:{
                type:Object,
                default(){
                    return []
                }
            }
        },
        computed:{
            showImage(){
                return this.singersItem.picUrl || this.singersItem.avatarUrl;
            }
        },
    }
</script>

<style scoped>
.singe_item{
    width: 90%;
    margin: 10px auto;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    background-color: #f9f9f9;
    border: 0.5px solid #e7eaed;
}
.singe_item:hover{
    background-color: #f0f0f0;
}
    .singe_item_logo{
        width: 30%;
        height: 100%;
    }
    .singe_item_logo img{
        width: 90%;
        height: 90%;
    }
    .singe_item_describe{
        width: 65%;
        text-align: left;
    }
    h4{
        color: grey;
    }
</style>