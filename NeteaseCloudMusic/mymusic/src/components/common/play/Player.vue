<template>

</template>

<script>

    export default {
        name: 'Music',
        data () {
            return {
                songs: [],
                currentIndex: 0,
                currentSrc: '../../../assets/music/退后.mp3',
                activeClass: 'active'
            }
        },
        methods: {
            nextSong () {
                // console.log(currentIndex)
                if (this.currentIndex < this.songs.length - 1) {
                    this.currentIndex += 1
                } else {
                    this.currentIndex = 0
                }
                this.currentSrc = this.songs[this.currentIndex].src
                console.log('currentIndex:' + this.currentIndex)
                console.log('currentSrc:' + this.currentSrc)
            },
            playMusic (id) {
                console.log('id:' + id)
                if (this.currentIndex !== id) {
                    this.currentIndex = id
                    this.currentSrc = this.songs[this.currentIndex].src
                }
            }
        }
    }
</script>

<style scoped>
    ul li {
        cursor: pointer;
        list-style-type: none;
        width: 100px;
    }
    .active {
        background-color: #1989FA;
    }

</style>