<script>
export default {
  data () {
    return {
      fullStar: './src/assets/images/icon-star-filled.png',
      star: './src/assets/images/icon-star.png',
      score: 0
    }
  },
  methods: {
    mouseoverStar (num) {
      if (num === 1) {
        this.$refs.rate1.src = this.fullStar
      } else if (num === 2) {
        this.$refs.rate1.src = this.fullStar
        this.$refs.rate2.src = this.fullStar
      } else if (num === 3) {
        this.$refs.rate1.src = this.fullStar
        this.$refs.rate2.src = this.fullStar
        this.$refs.rate3.src = this.fullStar
      } else if (num === 4) {
        this.$refs.rate1.src = this.fullStar
        this.$refs.rate2.src = this.fullStar
        this.$refs.rate3.src = this.fullStar
        this.$refs.rate4.src = this.fullStar
      } else if (num === 5) {
        this.$refs.rate1.src = this.fullStar
        this.$refs.rate2.src = this.fullStar
        this.$refs.rate3.src = this.fullStar
        this.$refs.rate4.src = this.fullStar
        this.$refs.rate5.src = this.fullStar
      }
    },
    mouseoutStar (num) {
      if (num === 1) {
        this.$refs.rate1.src = this.star
      } else if (num === 2) {
        this.$refs.rate1.src = this.star
        this.$refs.rate2.src = this.star
      } else if (num === 3) {
        this.$refs.rate1.src = this.star
        this.$refs.rate2.src = this.star
        this.$refs.rate3.src = this.star
      } else if (num === 4) {
        this.$refs.rate1.src = this.star
        this.$refs.rate2.src = this.star
        this.$refs.rate3.src = this.star
        this.$refs.rate4.src = this.star
      } else if (num === 5) {
        this.$refs.rate1.src = this.star
        this.$refs.rate2.src = this.star
        this.$refs.rate3.src = this.star
        this.$refs.rate4.src = this.star
        this.$refs.rate5.src = this.star
      }
    },
    changeImg () {
      this.star = this.fullStar
    },
    clickStar (num) {
      if (num === 1) {
        this.$refs.rate1.src = this.fullStar
        console.log('1星', this.score)
      } else if (num === 2) {
        this.$refs.rate1.src = this.fullStar
        this.$refs.rate2.src = this.fullStar
        console.log('2星')
      } else if (num === 3) {
        this.$refs.rate1.src = this.fullStar
        this.$refs.rate2.src = this.fullStar
        this.$refs.rate3.src = this.fullStar
        console.log('3星')
      } else if (num === 4) {
        this.$refs.rate1.src = this.fullStar
        this.$refs.rate2.src = this.fullStar
        this.$refs.rate3.src = this.fullStar
        this.$refs.rate4.src = this.fullStar
        console.log('4星')
      } else if (num === 5) {
        this.$refs.rate1.src = this.fullStar
        this.$refs.rate2.src = this.fullStar
        this.$refs.rate3.src = this.fullStar
        this.$refs.rate4.src = this.fullStar
        this.$refs.rate5.src = this.fullStar
        console.log('5星')
      }
    }
  }
}
</script>
<template>
    <div class="py-100-sm-40">
        <section class="bg-lightYellow d-flex justify-content-center py-4">
          <h1>
            食譜
            <div class="d-flex rates">
              <div class="form-check px-1">
                <input class="form-check-input" type="radio" name="rate" id="star1" value="1"><br>
                <label class="form-check-label labelRate1" for="star1"  @mouseover="() => mouseoverStar(1)" @mouseout="() => mouseoutStar(1)" @click="()=>changeImg">
                  <img ref="rate1" :src="star" width="25">
                </label>
              </div>
              <div class="form-check px-1">
                <input class="form-check-input " type="radio" name="rate" id="star2"  value="2"><br>
                <label class="form-check-label labelRate2" for="star2" @mouseover="() => mouseoverStar(2)" @mouseout="() => mouseoutStar(2)" >
                  <img ref="rate2" :src="star" width="25">
                </label>
              </div>
              <div class="form-check px-1">
                <input class="form-check-input " type="radio" name="rate" id="star3" value="3"><br>
                <label class="form-check-label labelRate3" for="star3"  @mouseover="() => mouseoverStar(3)" @mouseout="() => mouseoutStar(3)" >
                  <img ref="rate3" :src="star" width="25">
                </label>
              </div>
              <div class="form-check px-1">
                <input class="form-check-input " type="radio" name="rate" id="star4" value="4"><br>
                <label class="form-check-label labelRate4" for="star4"  @mouseover="() => mouseoverStar(4)" @mouseout="() => mouseoutStar(4)">
                  <img ref="rate4" :src="star" width="25">
                </label>
              </div>
              <div class="form-check px-1">
                <input class="form-check-input " type="radio" name="rate" id="star5" value="5"><br>
                <label class="form-check-label labelRate5" for="star5"  @mouseover="() => mouseoverStar(5)" @mouseout="() => mouseoutStar(5)" >
                  <img ref="rate5" :src="star" width="25">
                </label>
              </div>
            </div>
          </h1>
        </section>
    </div>
</template>
<style>
  .rates .form-check label{
    cursor: pointer;
  }
</style>
