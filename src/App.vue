<template>
  <router-view />
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  mounted () { // 等資料都載入 元素也載入了 再載入AOS 有載入先後順序建議放app.vue
    AOS.init()
  }
}
</script>

<style lang="scss">
  body{
      font-family: 'Noto Sans TC', sans-serif;
      color: #493A25;
  }
  /* 更改 Select 组件的背景颜色和文本颜色 */
.form-select:hover {
  background-color: #FBF8F3;
}

select:focus > option:checked {
    background: #C0AB8E !important;
}

select:focus > option:hover {
  background-color: #C0AB8E !important;
}

</style>
