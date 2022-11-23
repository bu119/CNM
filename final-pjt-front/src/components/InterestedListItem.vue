<template>
  <swiper-slide role="tab">
    <div>
      <!-- movie에 interested_genre1, 2, 3 가져오면 됨! -->
      <span
        v-for="mov in genre1Movie"
        :key="mov.id">
        <router-link
          :to="{ 
            name: 'DetailView',
            params: { id: mov.id }
          }"  
        >
          <img :src="movieImgURL+mov.poster_path" alt="..." width=250>
        </router-link>
      </span>
      <span
        v-for="mov in genre2Movie"
        :key="mov.id">
        <router-link
          :to="{ 
            name: 'DetailView',
            params: { id: mov.id }
          }"  
        >
          <img :src="movieImgURL+mov.poster_path" alt="..." width=250>
        </router-link>
      </span>
      <span
        v-for="mov in genre3Movie"
        :key="mov.id">
        <router-link
          :to="{ 
            name: 'DetailView',
            params: { id: mov.id }
          }"  
        >
          <img :src="movieImgURL+mov.poster_path" alt="..." width=250>
        </router-link>
      </span>
    </div>
  </swiper-slide>
</template>

<script>
import { swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'


export default {
  name: 'InterestedListItem',
  props: {
    movie: Object,
  },
  components: {
    swiperSlide
  },
  computed: {
    movieImgURL() {
      return `https://image.tmdb.org/t/p/w600_and_h900_bestv2`
    },
    interested_genre1(){
      return this.$store.state.interested_genre1
    },
    interested_genre2(){
      return this.$store.state.interested_genre2
    },
    interested_genre3(){
      return this.$store.state.interested_genre3
    },
    genre1Movie() {
      return this.movie[this.interested_genre1].slice(0, 3)
    },
    genre2Movie() {
      return this.movie[this.interested_genre2].slice(0, 3)
    },
    genre3Movie() {
      return this.movie[this.interested_genre3].slice(0, 3)
    },
  }, 
}
</script>

<style lang="scss" scoped>
.swiper-slide {
  width: auto; // auto 값을 지정해야 슬라이드의 width값이 텍스트 길이 기준으로 바뀜
  min-width: 56px; // min-width를 지정하지 않을 경우 텍스트가 1개 내지는 2개가 들어갈 때 탭 모양이 상이할 수 있으므로 넣어준다.
  padding: 0px 14px;
  font-size: 14px;
  line-height: 36px;
  text-align: center;
  color: #84868c;
  border: 0;
  border-radius: 18px;
  background: #f3f4f7;
  appearance: none;
  cursor: pointer;
}
</style>