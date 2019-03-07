<template>
  <div class="players container-fluid">
    <div class="row">
      <div class="col">
        <h1>Dragons vs. Champions</h1>
        <button type="button" v-if="activeDragon > -1 && activeChampion > -1" @click="startGame"
          class="btn btn-outline-danger btn-lg">KILL
          EACH OTHER</button>
      </div>
    </div>
    <!-- render a component for each car -->
    <div class="row">
      <div class="col-6">
        <champion v-for="champion in champions" :championData="champion" v-on:setTargetChampion="setActiveChampion"
          :key="champion.id"></champion>
      </div>
      <div class="col-6">
        <dragon v-for="dragon in dragons" v-on:setTargetDragon="setActiveDragon" :dragonData="dragon"
          :key="'d'+dragon.id"></dragon>
      </div>
    </div>
  </div>
</template>

<script>
  import Dragon from '@/components/dragons.vue'
  import Champion from '@/components/champions.vue'
  export default {
    name: "players",
    mounted() {
      this.$store.dispatch('getChampions')
      this.$store.dispatch('getDragons')

    },

    data() {
      return {
        activeDragon: -1,
        activeChampion: -1,
      }
    },

    computed: {
      dragons() {
        return this.$store.state.dragons
      },
      champions() {
        return this.$store.state.champions
      }
    },

    methods: {
      setActiveDragon(id) {
        this.activeDragon = id
      },
      setActiveChampion(id) {
        this.activeChampion = id
      },
      startGame() {
        this.$store.dispatch('startGame', { dragonId: this.activeDragon, championId: this.activeChampion })
      }
    },

    components: {
      Dragon,
      Champion
    }
  }
</script>