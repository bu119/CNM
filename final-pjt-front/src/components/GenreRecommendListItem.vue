<template>
  <div>
    <h2>액션</h2>
      <!-- <div
        v-for="(genre, idx) in movie.genres[idx]" :key="idx"
        >
        {{ genre['name'] }}
        <span
          v-if="$options.filters.genreCheck(movie.genres, 'Action') === true">
          <router-link
            :to="{ 
              name: 'DetailView',
              params: { id: movie.id }
            }"  
          >
            <img :src="movieImgURL" alt="..." width=250>
          </router-link>
        </span>
      </div> -->
    <h2>모험</h2>
    <h2>애니메이션</h2>
    <h2>코미디</h2>
    <h2>범죄</h2>
    <h2>다큐멘터리</h2>
    <h2>드라마</h2>
    <h2>가족</h2>
    <h2>판타지</h2>
    <h2>역사</h2>
    <h2>호러</h2>
    <h2>음악</h2>
    <h2>미스터리</h2>
    <h2>로맨스</h2>
    <h2>SF</h2>
    <h2>스릴러</h2>
    <h2>TV영화</h2>
    <h2>전쟁</h2>
    <h2>서부</h2>
  </div>
</template>

<script>
export default {
  name: 'GenreRecommendListItem'
}
</script>

<style>

</style>