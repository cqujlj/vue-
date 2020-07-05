<template>
    <div class="my_message">
        <div class="message_title">
            <div class="my_img">
                <img :src="showImage">
            </div>
            <div class="my_mess">
                <h2>{{owerMessage.nickname}}</h2>
                <div class="line"></div>
                <div class="mess_list">
                    <div class="follows"> <p>{{owerMessage.follows}}</p>关注</div>
                    <div class="followed"><p>{{owerMessage.followeds}}</p>粉丝</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyMessage",
        props:{
            owerMessage:{
                type:Object,
                default(){
                    return {}
                }
            },
        },
        computed:{
            showImage(){
                return this.owerMessage.avatarUrl;
            }
        }
    }
</script>

<style scoped>
    .my_message{
        width: 60rem;
        height: 14rem;
        border: 1px solid transparent;

    }
    .message_title{
        margin: 2rem ;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
.my_img img{
    width: 10rem;
    height:10rem;
    border: 1px solid #d6d6d6;
}
    .my_mess{
        width: 80%;
        margin-left: 3rem;
    }
    .mess_list{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .follows,.followed{
        width: 4rem;
        margin: 1rem;
        color: grey;
    }
    h2{
        text-align: left;
        margin: 1rem;
        color: grey;
    }
    p{
        font-size: 1rem;
        color: #3b89d4;
    }
    .line{
        width: 100%;
        height: 1px;
        background-color: grey;
    }
</style>