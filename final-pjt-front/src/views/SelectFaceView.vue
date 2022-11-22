<template>
  <div>
    <h1>오늘 당신의 기분은?</h1>
    <span>
      <img @click="happyMovie" src="@/assets/happy.png" alt="">
      <img @click="angryMovie" src="@/assets/angry.png" alt="">
      <img @click="sadMovie" src="@/assets/sad.png" alt="">
    </span>
    <div>
      <br>
      <div
        v-if="feeling === '행복'">
        <h3>나는 오늘 행복해😁</h3>
        <span
          v-for="mov in movies['happy']"
          :key="`hapyy-${mov.id}`">
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

      <div
        v-if="feeling === '화남'">
        <h3>나는 오늘 기분이 별로 좋지 않아🤨</h3>
        <span
          v-for="mov in movies['angry']"
          :key="`angry-${mov.id}`">
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

      <div
        v-if="feeling === '우울'">
        <h3>나는 오늘 굉장히 우울해😥</h3>
        <span
          v-for="mov in movies['depressive']"
          :key="`depressive-${mov.id}`">
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

    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectFaceView',
  data() {
    return {
      feeling: null,
    }
  },
  created() {
    this.getFeelingMovies()
  },
  computed: {
    movies() {
      return this.$store.state.feelingmovies
    },
    movieImgURL() {
      return `https://image.tmdb.org/t/p/w600_and_h900_bestv2`
    },
  },
  methods: {
    happyMovie() {
      this.feeling = '행복'
    },
    angryMovie() {
      this.feeling = '화남'
    },
    sadMovie() {
      this.feeling = '우울'
    },
    getFeelingMovies() {
      this.$store.dispatch('getFeelingMovies')
    }
  }
}
</script>

<style>

</style>