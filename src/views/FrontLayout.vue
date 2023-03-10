<template>
     <div>
      <div class="fixed-top" style="z-index: 2000 !important;">
        <div class="bg-white ">
          <nav class="navbar navbar-expand-lg navbar-light container  d-flex flex-column">
            <div class="container-fluid position-relative">
              <!-- 多加一個div -->
              <div class="d-flex align-items-center">
                <RouterLink to="/home" class="navbar-brand">
                  <img src="../assets/images/logo.png" style="height: 35px;" class="logo" alt="">
                </RouterLink>
                <div class="position-absolute end-0 ">
                  <button type="button" class="btn btn-sm position-relative p-0 d-lg-none">
                    <span class="position-absolute top-0 start-100 translate-middle bg-danger border border-light text-white" style="padding: 2px; border-radius: 25px; width: 25px; height: 25px; font-size: 12px;">20
                   </span>
                    <img src="../../src/assets/images/icon-cart-hover.png" alt="" width="35">
                  </button>
                  <button type="button" class="btn border-0 d-lg-none p-0 ps-2" data-bs-toggle="modal" data-bs-target="#searchModal">
                    <img src="../assets/images/icon-search mobile.png" style="height: 25px;" alt="">
                  </button>
                  <button class="navbar-toggler border-0" type="button" data-bs-toggle="modal" data-bs-target="#navbarTogglerModal">
                    <span class="navbar-toggler-icon" style="background-image: url('./src/assets/images/icon -menu mobile.png') !important; width: 24px; height: 24px;"></span>
                  </button>
                </div>
              </div>

              <!-- 菜單Modal -->
              <div class="modal fade" id="navbarTogglerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div class="modal-dialog mx-3">
                  <!-- 改變modal弧度 -->
                  <div class="modal-content" style="border-radius: 20px;">
                    <!-- border-0 -->
                    <div class="modal-header border-0 p-0">
                      <button type="button" class="ms-auto border-0 bg-transparent p-3" data-bs-dismiss="modal" aria-label="Close">
                        <img src="../assets/images/icon-close mobile.png" alt="">
                      </button>
                    </div>
                    <div class="modal-body p-0 mx-4">
                      <ul class="list-unstyled">
                        <li class="text-center border-bottom border-lightBrownGray pb-3"><a href="#" class="menuLink">甜點食譜</a></li>
                        <li class="text-center border-bottom border-lightBrownGray p-3"><a href="#" class="menuLink">材料購買</a></li>
                        <li class="text-center border-bottom border-lightBrownGray p-3"><a href="#" class="menuLink">優惠特報</a></li>
                        <li class="text-center pt-3 border-bottom border-lightBrownGray p-3"><a href="#" class="menuLink">會員專區</a></li>
                        <li class="text-center pt-3 p-3">
                          <button type="button" class="btn border-0 d-lg-none" style="font-size: 14px;">
                          登入 /
                        </button>
                        <button type="button" class="btn border-0 d-lg-none btn-lightBrown badge rounded-pill"  style="font-size: 14px;">
                          註冊
                        </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 搜尋Modal -->
              <div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div class="modal-dialog mx-3 ">
                  <!-- 改變modal弧度 -->
                  <div class="modal-content" style="border-radius: 20px;">
                    <!-- border-0 -->
                    <div class="modal-header border-0 p-0">
                      <button type="button" class="ms-auto border-0 bg-transparent p-3" data-bs-dismiss="modal" aria-label="Close">
                        <img src="../assets/images/icon-close mobile.png" alt="">
                      </button>
                    </div>
                    <div class="modal-body p-0 mx-4">
                      <ul class="list-unstyled">
                        <li class="text-center mb-3 d-flex flex-column border-bottom" style="border-color: #D3CCC1 !important;">
                          <!-- menuLink -->
                          <label for="category" class="form-label me-auto ms-2 text-lightBrown" style="font-size: 14px;">種類</label>
                          <select name="" id="category"  class="form-select border-0">
                            <option value="全部" selected>全部</option>
                            <option value="美式">美式</option>
                            <option value="台式">台式</option>
                            <option value="日式">日式</option>
                          </select>
                        </li>
                        <li class="text-center mb-3 d-flex flex-column border-bottom" style="border-color: #D3CCC1 !important;">
                          <!-- menuLink -->
                          <label for="category" class="form-label me-auto ms-2 mt-2 text-lightBrown" style="font-size: 14px; ">成本</label>
                          <select name="" id="category"  class="form-select border-0">
                            <option value="不拘" selected>不拘</option>
                            <option value="低到高">低到高</option>
                            <option value="高到低">高到低</option>
                          </select>
                        </li>
                        <li class="text-center mb-3 d-flex flex-column border-bottom " style="border-color: #D3CCC1 !important;">
                          <!-- menuLink -->
                          <label for="category" class="form-label me-auto ms-2 mt-2 text-lightBrown" style="font-size: 14px; ">評價</label>
                          <select name="" id="category"  class="form-select border-0">
                            <option value="全部" selected>不拘</option>
                            <option value="高到低">高到低</option>
                            <option value="低到高">低到高</option>
                          </select>
                        </li>
                      </ul>
                      <div class="bg-white border-0 position-relative">
                        <input type="search" class="form-control rounded-pill my-4 py-2" placeholder="請輸入甜點名稱" style="border-color: #C0AB8E;">
                        <button type="submit" class="border-0 bg-transparent position-absolute top-50 translate-middle start-100 pe-5">
                          <img src="../assets/images/icon-search.png" style="height: 25px;" alt="">
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 禁止顯示 新增modal取代手機板 -->
              <div class="collapse navbar-collapse" id="navbarNav">
                <!-- mx-auto ul 置中 -->
                <ul class="navbar-nav mx-auto">
                  <li class="nav-item me-3">
                    <!-- 判斷 :class="{'link-orange':this.$route.fullPath === '/recipes'}" -->
                    <RouterLink to="/recipes" active-class="active-link" class="nav-link" >甜點食譜</RouterLink>
                  </li>
                  <li class="nav-item mx-3">
                    <!-- 判斷 :class="{'link-orange':this.$route.fullPath === '/products'}" -->
                    <RouterLink to="/products" active-class="active-link" class="nav-link" >材料購買</RouterLink>
                  </li>
                  <li class="nav-item mx-3">
                    <!-- 判斷 :class="{'link-orange':this.$route.fullPath === '/blog'}" -->
                    <RouterLink to="/blog" active-class="active-link" class="nav-link" >優惠特報</RouterLink>
                  </li>
                  <li class="nav-item ms-3">
                    <a class="nav-link brown" href="#">會員專區</a>
                  </li>
                </ul>
                <ul class="navbar-nav ms-auto d-flex align-items-center" v-if="!nickName">
                  <li class="nav-item me-3">
                    <RouterLink to="/loginSignup/login"  class="nav-link">登入</RouterLink>
                  </li>
                  <li class="nav-item me-4">
                    <!--  data-bs-toggle="tooltip" data-bs-placement="bottom" title="立即註冊抽獎去！" -->
                    <RouterLink to="/loginSignup/signup"  class="btn btn-lightBrown badge rounded-pill fs-6 px-4 py-3 text-white" >註冊</RouterLink>
                  </li>
                </ul>
                <ul class="navbar-nav ms-auto d-flex align-items-center" v-else-if="nickName">
                  <li class="nav-item me-3" v-if="admin">
                    <RouterLink to="/admin/products"  class="nav-link">進入後台</RouterLink>
                  </li>
                  <li class="nav-item ms-3 fs-5 me-5">
                    歡迎
                    <span class="fw-bold ms-2">
                      {{ nickName }}
                    </span>
                  </li>
                  <li class="nav-item me-3">
                    <a href="#" class="nav-link" @click.prevent="logout">登出</a>
                  </li>
                </ul>
                  <button type="button" class="btn btn-sm position-relative p-0 me-4">
                    <span class="position-absolute top-0 start-100 translate-middle bg-danger border border-light text-white" style="padding: 2px; border-radius: 25px; width: 25px; height: 25px; font-size: 12px;">20
                   </span>
                    <img src="../../src/assets/images/icon-cart-hover.png" alt="" width="40">
                  </button>
                  <RouterLink to="/bookmarks" class="btn btn-sm position-relative mt-1 border-0">
                    <i class="bi bi-heart-fill fs-2 link-lightBrown bookmarkBtn"></i>
                  </RouterLink>
                  <!-- <button type="button" class="btn btn-sm position-relative mt-1 border-0">
                  </button> -->
              </div>
            </div>
          </nav>
        </div>
      </div>
        <RouterView></RouterView>
        <footer class="bg-lightYellow">
            <div class="container d-flex flex-column flex-lg-row align-items-center" style="padding: 40px 0;">
              <img src="../assets/images/logo.png" class="logo mb-4 mb-lg-0 " alt="">
              <div class="ms-lg-auto">
                <ul class="list-unstyled d-flex justify-content-lg-end justify-content-center">
                  <li class="me-4">
                    <a href="#" class="text-decoration-none">
                      <img src="../assets/images/icon-ig.png" style="height: 40px;" alt="">
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-decoration-none">
                      <img src="../assets/images/icon-fb.png" style="height: 40px;" alt="">
                    </a>
                  </li>
                </ul>
                <p class="mb-0 text-center text-lg-start" style="font-size: 10px;">本網站僅作為網頁製作練習使用<br class="d-block d-lg-none"><span class="d-none d-lg-inline-block">，</span>圖片、資料源自網路，無任何商業利益行為</p>
                <p class="mb-0 text-lg-end text-center" style="font-size: 10px;">Copyright © 2022 甜點食譜一鍵購 All Rights Reserved.</p>
              </div>
            </div>
        </footer>
    </div>
</template>
<script>
import { RouterView, RouterLink } from 'vue-router'
import Tooltip from 'bootstrap/js/dist/tooltip'

export default {
  data () {
    return {
      nickName: '',
      admin: ''
    }
  },
  components: {
    RouterLink,
    RouterView
  },
  methods: {
    // 取出token 存到 headers
    checkLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = token
      // console.log(localStorage.getItem('nickName'))
      this.nickName = localStorage.getItem('nickName')
      this.admin = localStorage.getItem('admin')
    },
    logout () {
      localStorage.clear()
      document.cookie = 'myToken=; path=/;'
      // 重載頁面
      location.reload()
    }
  },
  mounted () {
    // 一開始就把token 存到 headers 其他需要權限的功能就能用 如修改密碼
    this.checkLogin()
    // // 選取所有元素包含data-bs-toggle="tooltip"
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl)
    })
    console.log(this.$route.fullPath)
    // /home
    // /recipes
    // /products
    // /blog
  }
}
</script>
<style>
  .bookmarkBtn:hover{
    color: #815B15 !important;
  }
  .nav-link{
    font-size: 20px;
    font-weight: bold;
    color: #493A25;
  }
  .nav-link:hover {
    color: #F5AE4C !important;
  }
  .active-link {
    color: #F5AE4C;
  }
  .tooltip-inner {
    background-color: #F5AE4C;
    margin-top: 10px;
    color: #fff ;
    font-size: 18px;
    padding: 15px;
  }
  .active {
    color: #F5AE4C;
  }
 /* 工具提示窗向下 */
 .tooltip.bs-tooltip-bottom .tooltip-arrow::before {
          margin: -9px 0px;
          border-bottom-color: #F5AE4C;
        }

  /* 工具提示窗向下 */
  /* .tooltip.bs-tooltip-bottom .tooltip-arrow::before {
    margin: -9px 0px;
    border-bottom-color: #F5AE4C;
  } */
  .btn-lightBrown:hover {
    background-color: #493A25;
  }
</style>
