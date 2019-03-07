<template>
  <div class="champions">
    <div class="card m-5" @click="$emit('setTargetChampion', championData.id)">
      <h1>{{championData.name}}</h1>
      <img :src="championData.imgUrl" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Champions",
    props: ['championData'],
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {}
  }
</script>