<template>
  <div class="dragons">
    <div @click="$emit('setTargetDragon', dragonData.id)" class="card m-5">
      <h1>{{dragonData.name}}</h1>
      <img :src="dragonData.imgUrl" alt="">
    </div>
  </div>

</template>

<script>
  export default {
    name: "Dragons",
    props: ['dragonData'],
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {}
  }
</script>