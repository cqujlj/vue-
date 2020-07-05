<template>
    <div class="home_swiper">
        <swiper>
            <swiper-item v-for="item in banners">
                <img :src="item.imageUrl" alt="">
            </swiper-item>
        </swiper>
    </div>

</template>

<script>
    import Swiper from "../../../components/swiper/Swiper";
    import SwiperItem from "../../../components/swiper/SwiperItem";
    export default {
        name: "HomeSwiper",
        components: {
            Swiper,
            SwiperItem
        },
        //接受父组件传来的数据
        props: {
            banners: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
.home_swiper{
    width: 50vw;
    margin: 0px auto;
}
</style>