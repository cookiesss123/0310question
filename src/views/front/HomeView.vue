<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<template>
    <div>
        <header class="banner">
          <!-- banner裡面的東西 -->
          <div class="container d-flex  flex-column justify-content-lg-center align-items-lg-start align-items-center bannerContent">
            <div class="mt-5 mb-lg-8">
              <h1 class="fw-bold lh-base h1Text" style="letter-spacing:10px;">甜點食譜加材料<br>
                一次購足好簡單
              </h1>
              <p class="text-lightBrownGray text-center text-lg-start mb-0 subTitle">用最優惠的價格<br class="d-block d-lg-none"> 享受最高品質的食材</p>
            </div>
            <div class="col-5 d-none d-lg-block">
                <!-- icon-speaker.png -->
              <p class="text-lightBrownGray mb-0"><img src="../../assets/images/icon-speaker.png" style="height: 30px;" alt="">免費觀看甜點食譜及教學，立即搜索心儀食譜！</p>
              <div class="card" style="border-color: #C0AB8E;">
                <div class="card-body">
                  <div class="row">
                    <div class="col-4 border-end border-lightBrown">
                      <p class="card-title text-lightBrown mb-0" style="font-size: 14px;">種類</p>
                      <select name="全部" id="" class="form-select border-0 text-darkBrown ps-0">
                        <option selected >全部</option>
                        <option value="美式">美式</option>
                        <option value="台式">台式</option>
                        <option value="日式">日式</option>
                      </select>
                    </div>
                    <div class="col-4 border-end border-lightBrown">
                      <p class="card-title text-lightBrown mb-0" style="font-size: 14px;">成本</p>
                      <select name="全部" id="" class="form-select border-0 text-darkBrown ps-0">
                        <option value="不拘" selected>不拘</option>
                        <option value="低到高">低到高</option>
                        <option value="高到低">高到低</option>
                      </select>
                    </div>
                    <div class="col-4 border-lightBrown">
                      <p class="card-title text-lightBrown mb-0" style="font-size: 14px;">評價</p>
                      <select name="全部" id="" class="form-select border-0 text-darkBrown ps-0">
                        <option value="全部" selected>不拘</option>
                        <option value="高到低">高到低</option>
                        <option value="低到高">低到高</option>
                      </select>
                    </div>
                  </div>

                </div>
                <!--  position-relative 這個要寫在裡面 -->
                <div class="card-footer bg-white border-0 position-relative">
                  <input type="search" class="form-control rounded-pill mb-2" placeholder="請輸入甜點名稱" style="border-color: #C0AB8E;">
                  <button type="submit" class="border-0 bg-transparent position-absolute top-50 translate-middle end-0 pb-2">
                    <img src="../../assets/images/icon-search.png" style="height: 25px;" alt="">
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section class="py-100-sm-40">
          <div class="container">
            <h2 class="display-6 fw-bold d-flex flex-column-reverse flex-lg-row align-items-center mb-4 justify-content-center justify-content-lg-start">
              <div class="d-flex align-items-center">
                <img src="../../assets/images/image 1.png" class="me-lg-4 me-2 titleImg" alt="">
                <span class="recipeTitle">門食譜</span>
              </div>
              <span class="text-lightBrownGray mb-2 h6 ms-2 speakerText d-flex align-items-center">
                <img src="../../assets/images/icon-speaker.png" class="speaker" alt="">
                一鍵購買甜點材料包～
              </span>
            </h2>
          </div>
          <div class="d-flex justify-content-center">
            <button type="button" class=" bg-transparent btn border-0 d-none d-lg-block" style="margin-bottom: 60px;">
              <img src="../../assets/images/icon-back.png" style="height: 35px;" alt="">
            </button>
            <!-- 內容 -->
            <div class="row gy-4 row-cols-lg-4 row-cols-1 container">
              <div class="col">
                <div class="card position-relative border-0" style="border-radius: 20px;">
                  <a href="#" target="_blank" class="mb-3">
                    <img src="../../assets/images/popular-image1.png" class="card-img img-fluid" style="border-radius: 20px;" alt="">
                  </a>
                  <div>
                    <h5 class="card-text d-flex flex-column">
                      <button type="button" class="position-absolute bookmarkBtn border-0 bg-transparent me-auto top-0 m-3">
                        <img src="../../assets/images/image 5.png">
                      </button>
                      <button type="button" class="border-0 bg-transparent position-absolute mt-2 me-3 top-50 end-0 buyBtn">
                        <img src="../../assets/images/icon-cart.png" style="height: 48px;" alt="">
                        <!-- <img src="../../assets/images/icon-cart-hover.png"> -->
                      </button>
                    </h5>
                  </div>
                  <a href="#" target="_blank" class="card-footer bg-white border-0 text-decoration-none link-darkBrown">
                    <h5 class="h5 d-flex justify-content-between fw-bold">
                      巴斯克起司蛋糕
                      <span>$70</span>
                    </h5>
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star.png" style="height: 15px;" alt="">
                  </a>
                </div>
              </div>
              <div class="col">
                <div class="card position-relative border-0" style="border-radius: 20px;">
                  <a href="#" target="_blank">
                    <img src="../../assets/images/popular-image2.png" class="card-img img-fluid" style="border-radius: 20px;" alt="">
                  </a>
                  <div>
                    <h5 class="card-text d-flex flex-column">
                      <button type="button" class="position-absolute bookmarkBtn border-0 bg-transparent me-auto top-0 m-3">
                        <img src="../../assets/images/image 5.png">
                      </button>
                      <button type="button" class="border-0 bg-transparent position-absolute mt-2 me-3 top-50 end-0 buyBtn">
                        <img src="../../assets/images/icon-cart.png" style="height: 48px;" alt="">
                        <!-- <img src="../../assets/images/icon-cart-hover.png"> -->
                      </button>
                    </h5>
                  </div>
                  <a href="#" target="_blank" class="card-footer bg-white border-0 text-decoration-none link-darkBrown">
                    <h5 class="h5 d-flex justify-content-between fw-bold">
                      杯子蛋糕
                      <span>$70</span>
                    </h5>
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star.png" style="height: 15px;" alt="">
                  </a>
                </div>
              </div>
              <div class="col">
                <div class="card position-relative border-0" style="border-radius: 20px;">
                  <a href="#" target="_blank">
                    <img src="../../assets/images/popular-image3.png" class="card-img img-fluid" style="border-radius: 20px;" alt="">
                  </a>
                  <div>
                    <h5 class="card-text d-flex flex-column">
                      <button type="button" class="position-absolute bookmarkBtn border-0 bg-transparent me-auto top-0 m-3">
                        <img src="../../assets/images/image 5.png">
                      </button>
                      <button type="button" class="border-0 bg-transparent position-absolute mt-2 me-3 top-50 end-0 buyBtn">
                        <img src="../../assets/images/icon-cart.png" style="height: 48px;" alt="">
                        <!-- <img src="../../assets/images/icon-cart-hover.png"> -->
                      </button>
                    </h5>
                  </div>
                  <a href="#" target="_blank" class="card-footer bg-white border-0 text-decoration-none link-darkBrown">
                    <h5 class="h5 d-flex justify-content-between fw-bold">
                      脆皮軟心布朗尼
                      <span>$70</span>
                    </h5>
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star.png" style="height: 15px;" alt="">
                  </a>
                </div>
              </div>
              <div class="col">
                <div class="card position-relative border-0" style="border-radius: 20px;">
                  <a href="#" target="_blank">
                    <img src="../../assets/images/popular-image4.png" class="card-img img-fluid" style="border-radius: 20px;" alt="">
                  </a>
                  <div>
                    <h5 class="card-text d-flex flex-column">
                      <button type="button" class="position-absolute bookmarkBtn border-0 bg-transparent me-auto top-0 m-3">
                        <img src="../../assets/images/image 5.png">
                      </button>
                      <button type="button" class="border-0 bg-transparent position-absolute mt-2 me-3 top-50 end-0 buyBtn">
                        <img src="../../assets/images/icon-cart.png" style="height: 48px;" alt="">
                        <!-- <img src="../../assets/images/icon-cart-hover.png"> -->
                      </button>
                    </h5>
                  </div>
                  <a href="#" target="_blank" class="card-footer bg-white border-0 text-decoration-none link-darkBrown">
                    <h5 class="h5 d-flex justify-content-between fw-bold">
                      繽紛馬卡龍
                      <span>$70</span>
                    </h5>
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star.png" style="height: 15px;" alt="">
                  </a>
                </div>
              </div>
              <div class="col d-flex justify-content-center d-lg-none" style="margin-bottom: 20px;">
                <button type="button" class="btn brown-button rounded-pill btn-lg px-5">
                  更多食譜
                </button>
              </div>
            </div>
            <button type="button" class="border-0 bg-transparent d-none d-lg-block" style="margin-bottom: 60px;">
              <img src="../../assets/images/icon-next.png" style="height: 35px;" alt="">
            </button>
          </div>
        </section>

        <section class="py-100-sm-60 px-3" style="background-color: #FBF8F3;">
          <div class="container bg-white py-lg-5 py-4" style="border-radius: 20px;">
            <h2 class="h4 fw-bold text-center mb-4 questionTitle">總是花錢花時間 尋找甜點材料嗎？</h2>
            <div class="px-5">
              <div class="row row-cols-1 row-cols-lg-3 gy-4">
                <div class="col ps-lg-5 d-flex flex-column flex-lg-row  align-items-center">
                  <div class="mb-2 me-lg-3">
                    <img src="../../assets/images/icon-money.png" style="height: 48px;" alt="">
                  </div>
                  <span class="h5 questions">
                    花了錢卻買不到好食材...
                  </span>
                </div>
                <div class="col ps-lg-5 d-flex flex-column flex-lg-row  align-items-center">
                  <div class="mb-2 me-lg-3">
                    <img src="../../assets/images/icon-time.png" style="height: 48px;" alt="">
                  </div>
                  <span class="h5 questions">
                    花時間找尋食材卻找不到...
                  </span>
                </div>
                <div class="col  ps-lg-5 d-flex flex-column flex-lg-row  align-items-center">
                  <div class="mb-2 me-lg-3">
                    <img src="../../assets/images/icon-box.png" style="height: 48px;" alt="">
                  </div>
                  <span class="h5 questions">
                    大包裝食材用不完好煩惱...
                  </span>
                </div>
              </div>
            </div>

          </div>
          <!-- py-100-sm-40 -->
          <div class="container pt-100-sm-40">
            <h2 class="h2 fw-bold fixedTitle mb-4 d-flex flex-column flex-lg-row justify-content-lg-center align-items-center">
              <img src="../../assets/images/Line 7 (Stroke).png" class="d-none d-lg-block" alt="">
              一站解決你的所有問題
              <img src="../../assets/images/Line 6 (Stroke).png" class="d-none d-lg-block" alt="">
              <div>
                <img src="../../assets/images/horizonLine.png" class="d-lg-none d-block" style="height: 4px;" alt="">
              </div>
            </h2>
            <div class="row g-4 row-cols-lg-2 justify-content-center">
              <div class="col-lg-5">
                <div class="card border-0 shadow" style="border-radius: 20px;">
                  <img src="../../assets/images/feature-image1.png" style="border-radius: 20px;" class="card-img" alt="...">
                  <div class="card-img-overlay d-flex flex-column justify-content-end" style="background-image: linear-gradient(180deg , transparent, rgba(255, 255, 255,0.2), rgba(255, 255, 255)); border-radius: 20px;">
                    <h5 class="card-title h4 fw-bold contentTitle">立即取得食譜材料</h5>
                    <p class="card-text" style="font-size: 14px;">使用首頁上方搜尋欄尋找食譜，所有食譜皆有列出製作材料、工具，點擊購買即可一次買齊。</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-5">
                <div class="card border-0 shadow" style="border-radius: 20px;">
                  <img src="../../assets/images/feature-image2.png" style="border-radius: 20px;" class="card-img" alt="...">
                  <div class="card-img-overlay d-flex flex-column justify-content-end" style="background-image: linear-gradient(180deg , transparent, rgba(255, 255, 255,0.2), rgba(255, 255, 255)); border-radius: 20px;">
                    <h5 class="card-title h4 fw-bold contentTitle">便宜且份量適中的食材</h5>
                    <p class="card-text" style="font-size: 14px;">提供甜點食譜組合包，讓您輕鬆選購需要的材料數量，不須擔心買到過多的食材也省下很多錢。</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-5">
                <div class="card border-0 shadow" style="border-radius: 20px;">
                  <img src="../../assets/images/feature-image3.png" style="border-radius: 20px;" class="card-img" alt="...">
                  <div class="card-img-overlay d-flex flex-column justify-content-end" style="background-image: linear-gradient(180deg , transparent, rgba(255, 255, 255,0.2), rgba(255, 255, 255)); border-radius: 20px;">
                    <h5 class="card-title h4 fw-bold contentTitle">甜點食譜＋影片教學</h5>
                    <p class="card-text" style="font-size: 14px;">免費甜點食譜和完整講解的影片教學，一定帶你學到會！不上烘焙課也能有良好的製作體驗。</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-5">
                <div class="card border-0 shadow" style="border-radius: 20px;">
                  <img src="../../assets/images/feature-image4.png" style="border-radius: 20px;" class="card-img" alt="...">
                  <div class="card-img-overlay d-flex flex-column justify-content-end" style="background-image: linear-gradient(180deg , transparent, rgba(255, 255, 255,0.2), rgba(255, 255, 255)); border-radius: 20px;">
                    <h5 class="card-title h4 fw-bold contentTitle">優惠不間斷</h5>
                    <p class="card-text" style="font-size: 14px;">消費滿1000元免運費
                      每月抽獎活動，享價值千元以上好禮！</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section class="py-100-sm-40 ">
          <div class="container">
            <h2 class="display-6 fw-bold d-flex align-items-center mb-4 d-flex flex-column-reverse flex-lg-row align-items-center mb-4 justify-content-center justify-content-lg-start">
              <div class="d-flex align-items-center">
                <div class="d-lg-block d-none me-4 rounded-circle text-center pt-2 position-relative" style="background-color: #FAE8D0; width: 64px; height: 64px; vertical-align: middle; font-size: 45px;">
                  優
                  <div class="position-absolute top-50 start-50" style="background-color: #F5AE4C; width: 4px; height: 9px; transform:rotate(330deg); margin-left: 13px; margin-top: 1px;">
                  </div>
                </div>
                <div class="d-lg-none me-2 rounded-circle text-center pt-1 position-relative" style="background-color: #FAE8D0; width: 36px; height: 36px; font-size: 24px;">
                  優
                  <div class="position-absolute top-50 start-50" style="background-color: #F5AE4C; width: 2.5px; height: 5px; transform:rotate(330deg); margin-left: 7.4px; margin-top: -1px;">
                  </div>
                </div>
                <span class="recipeTitle">選食材</span>
              </div>
              <span class="light-brown mb-2 h6 ms-2 speakerText d-flex align-items-center">
                <img src="../../assets/images/icon-speaker.png" class="speaker" alt="">
                總消費額滿500即可獲得1次抽獎機會!
              </span>
            </h2>
          </div>
          <div class="d-flex align-items-center justify-content-center">
            <button type="button" class="border-0 bg-transparent d-none d-lg-block" style="margin-bottom: 60px;">
              <img src="../../assets/images/icon-back.png" style="height: 35px;" alt="">
            </button>
            <div class="row row-cols-lg-4 row-cols-1 gy-4 container">
              <div class="col">
                <div class="card position-relative border-0" style="border-radius: 20px;">
                  <a href="#" target="_blank">
                    <img src="../../assets/images/sale-image1.png" class="card-img " style="border-radius: 20px;" alt="">
                  </a>
                  <h5 class="card-text">
                    <button type="button" class="position-absolute bookmarkBtn border-0 bg-transparent me-auto top-0 m-3">
                        <img src="../../assets/images/image 5.png">
                      </button>
                    <button type="button" class="buyBtn border-0 bg-transparent me-3 position-absolute top-50 end-0 ">
                      <img src="../../assets/images/icon-cart.png" style="height: 48px;" alt="" class="rounded-circle shadow-sm">
                    </button>
                  </h5>
                  <a href="#" target="_blank" class="card-footer bg-white border-0 text-decoration-none link-darkBrown">
                    <h5 class="h5 d-flex justify-content-between fw-bold">
                      自動攪拌機
                      <span>$2,000</span>
                    </h5>
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star.png" style="height: 15px;" alt="">
                  </a>
                </div>
              </div>
              <div class="col">
                <div class="card position-relative border-0" style="border-radius: 20px;">
                  <a href="#" target="_blank">
                    <img src="../../assets/images/sale-image2.png" class="card-img " style="border-radius: 20px;" alt="">
                  </a>
                  <h5 class="card-text">
                    <button type="button" class="position-absolute bookmarkBtn border-0 bg-transparent me-auto top-0 m-3">
                        <img src="../../assets/images/image 5.png">
                      </button>
                    <button type="button" class="buyBtn border-0 bg-transparent me-3 position-absolute top-50 end-0 ">
                      <img src="../../assets/images/icon-cart.png" style="height: 48px;" alt="" class="rounded-circle shadow-sm">
                    </button>
                  </h5>
                  <a href="#" target="_blank" class="card-footer bg-white border-0 text-decoration-none link-darkBrown">
                    <h5 class="h5 d-flex justify-content-between fw-bold">
                      抹茶粉
                      <span>$50/100g</span>
                    </h5>
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star.png" style="height: 15px;" alt="">
                  </a>
                </div>
              </div>
              <div class="col">
                <div class="card position-relative border-0" style="border-radius: 20px;">
                  <a href="#" target="_blank">
                    <img src="../../assets/images/sale-image3.png" class="card-img " style="border-radius: 20px;" alt="">
                  </a>
                  <h5 class="card-text">
                    <button type="button" class="position-absolute bookmarkBtn border-0 bg-transparent me-auto top-0 m-3">
                        <img src="../../assets/images/image 5.png">
                      </button>
                    <button type="button" class="buyBtn border-0 bg-transparent me-3 position-absolute top-50 end-0 ">
                      <img src="../../assets/images/icon-cart.png" style="height: 48px;" alt="" class="rounded-circle shadow-sm">
                    </button>
                  </h5>
                  <a href="#" target="_blank" class="card-footer bg-white border-0 text-decoration-none link-darkBrown">
                    <h5 class="h5 d-flex justify-content-between fw-bold">
                      原木組合
                      <span>$5,000</span>
                    </h5>
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star.png" style="height: 15px;" alt="">
                  </a>
                </div>
              </div>
              <div class="col">
                <div class="card position-relative border-0" style="border-radius: 20px;">
                  <a href="#" target="_blank">
                    <img src="../../assets/images/sale-image4.png" class="card-img " style="border-radius: 20px;" alt="">
                  </a>
                  <h5 class="card-text">
                    <button type="button" class="position-absolute bookmarkBtn border-0 bg-transparent me-auto top-0 m-3">
                      <img src="../../assets/images/image 5.png">
                    </button>
                    <button type="button" class="buyBtn border-0 bg-transparent me-3 position-absolute top-50 end-0 ">
                      <img src="../../assets/images/icon-cart.png" style="height: 48px;" alt="" class="rounded-circle shadow-sm">
                    </button>
                  </h5>
                  <a href="#" target="_blank" class="card-footer bg-white border-0 text-decoration-none link-darkBrown">
                    <h5 class="h5 d-flex justify-content-between fw-bold">
                      去污清潔粉
                      <span>$700</span>
                    </h5>
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star.png" style="height: 15px;" alt="">
                  </a>
                </div>
              </div>
              <div class="col d-flex justify-content-center d-lg-none" style="margin-bottom: 20px;">
                <button type="button" class="btn brown-button rounded-pill btn-lg px-5 fw-bold">
                  更多商品
                </button>
              </div>
            </div>
            <button type="button" class="border-0 bg-transparent d-none d-lg-block" style="margin-bottom: 60px;">
              <img src="../../assets/images/icon-next.png" style="height: 35px;" alt="">
            </button>
          </div>
        </section>

        <!-- 特價商品 -->
        <section class="py-100-sm-40" style="background-color: #FBF8F3;">
          <div class="container">
            <h2 class="display-6 fw-bold d-flex align-items-center mb-4 d-flex flex-column-reverse flex-lg-row align-items-center mb-4 justify-content-center justify-content-lg-start">
              <div class="d-flex align-items-center">
                <img src="../../assets/images/title2.png" class="me-lg-4 me-2 titleImg " alt="">
                <span class="recipeTitle">價商品</span>
              </div>
              <span class="light-brown mb-2 h6 ms-2 speakerText d-flex align-items-center">
                <img src="../../assets/images/icon-speaker.png" class="speaker" alt="">
                總消費額滿500即可獲得1次抽獎機會!
              </span>
            </h2>
          </div>
          <div class="d-flex align-items-center justify-content-center">
            <button type="button" class="border-0 bg-transparent d-none d-lg-block" style="margin-bottom: 60px;">
              <img src="../../assets/images/icon-back.png" style="height: 35px;" alt="">
            </button>
            <div class="row row-cols-lg-4 row-cols-1 gy-4 container">
              <div class="col">
                <div class="card position-relative border-0 bg-transparent" style="border-radius: 20px;">
                  <a href="#" target="_blank">
                    <img src="../../assets/images/sale-image2.png" class="card-img " style="border-radius: 20px;" alt="">
                  </a>
                  <button type="button" class="position-absolute bookmarkBtn border-0 bg-transparent me-auto top-0 m-3">
                      <img src="../../assets/images/image 5.png">
                  </button>
                  <h5>
                    <span class="position-absolute top-0 end-0 m-3 badge text-dark text-white py-2 shadow px-3" style="background-color: #F5AE4C;">
                      4折
                    </span>
                  </h5>
                  <h5 class="card-text">
                    <button type="button" class="buyBtn border-0 bg-transparent me-3 position-absolute top-50 end-0 ">
                      <img src="../../assets/images/icon-cart.png" style="height: 48px;" alt="" class="rounded-circle shadow-sm">
                    </button>
                  </h5>
                  <a href="#" target="_blank" class="card-footer bg-transparent border-0 text-decoration-none link-darkBrown">
                    <h5 class="h5 d-flex justify-content-between fw-bold">
                      抹茶粉
                      <span>$50/100g</span>
                    </h5>
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star.png" style="height: 15px;" alt="">
                  </a>
                </div>
              </div>
              <div class="col">
                <div class="card position-relative border-0 bg-transparent" style="border-radius: 20px;">
                  <a href="#" target="_blank">
                    <img src="../../assets/images/sale-image1.png" class="card-img " style="border-radius: 20px;" alt="">
                  </a>
                  <h5>
                    <span class="position-absolute top-0 end-0 m-3 badge text-dark text-white py-2 shadow px-3" style="background-color: #F5AE4C;">
                      4折
                    </span>
                  </h5>
                  <h5 class="card-text">
                    <button type="button" class="buyBtn border-0 bg-transparent me-3 position-absolute top-50 end-0 ">
                      <img src="../../assets/images/icon-cart.png" style="height: 48px;" alt="" class="rounded-circle shadow-sm">
                    </button>
                    <button type="button" class="position-absolute bookmarkBtn border-0 bg-transparent me-auto top-0 m-3">
                        <img src="../../assets/images/image 5.png">
                      </button>
                  </h5>
                  <a href="#" target="_blank" class="card-footer bg-transparent border-0 text-decoration-none link-darkBrown">
                    <h5 class="h5 d-flex justify-content-between fw-bold">
                      自動攪拌機
                      <span>$2,000</span>
                    </h5>
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star.png" style="height: 15px;" alt="">
                  </a>
                </div>
              </div>
              <div class="col">
                <div class="card position-relative border-0 bg-transparent" style="border-radius: 20px;">
                  <a href="#" target="_blank">
                    <img src="../../assets/images/sale-image3.png" class="card-img " style="border-radius: 20px;" alt="">
                  </a>
                  <h5>
                    <span class="position-absolute top-0 end-0 m-3 badge text-dark text-white py-2 shadow px-3" style="background-color: #F5AE4C;">
                      4折
                    </span>
                  </h5>
                  <h5 class="card-text">
                    <button type="button" class="buyBtn border-0 bg-transparent me-3 position-absolute top-50 end-0 ">
                      <img src="../../assets/images/icon-cart.png" style="height: 48px;" alt="" class="rounded-circle shadow-sm">
                    </button>
                    <button type="button" class="position-absolute bookmarkBtn border-0 bg-transparent me-auto top-0 m-3">
                        <img src="../../assets/images/image 5.png">
                      </button>
                  </h5>
                  <a href="#" target="_blank" class="card-footer bg-transparent border-0 text-decoration-none link-darkBrown">
                    <h5 class="h5 d-flex justify-content-between fw-bold">
                      原木組合
                      <span>$5,000</span>
                    </h5>
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star.png" style="height: 15px;" alt="">
                  </a>
                </div>
              </div>
              <div class="col">
                <div class="card position-relative border-0 bg-transparent" style="border-radius: 20px;">
                  <a href="#" target="_blank">
                    <img src="../../assets/images/sale-image4.png" class="card-img " style="border-radius: 20px;" alt="">
                  </a>
                  <h5>
                    <span class="position-absolute top-0 end-0 m-3 badge text-dark text-white py-2 shadow px-3" style="background-color: #F5AE4C;">
                      4折
                    </span>
                  </h5>
                  <h5 class="card-text">
                    <button type="button" class="position-absolute bookmarkBtn border-0 bg-transparent me-auto top-0 m-3">
                        <img src="../../assets/images/image 5.png">
                      </button>
                    <button type="button" class="buyBtn border-0 bg-transparent me-3 position-absolute top-50 end-0 ">
                      <img src="../../assets/images/icon-cart.png" style="height: 48px;" alt="" class="rounded-circle shadow-sm">
                    </button>
                  </h5>
                  <a href="#" target="_blank" class="bg-transparent card-footer border-0 text-decoration-none link-darkBrown">
                    <h5 class="h5 d-flex justify-content-between fw-bold">
                      去污清潔粉
                      <span>$700</span>
                    </h5>
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star.png" style="height: 15px;" alt="">
                  </a>
                </div>
              </div>
              <div class="col d-flex justify-content-center d-lg-none" style="margin-bottom: 20px;">
                <button type="button" class="btn brown-button rounded-pill btn-lg px-5 fw-bold">
                  更多商品
                </button>
              </div>
            </div>
            <button type="button" class="border-0 bg-transparent d-none d-lg-block" style="margin-bottom: 60px;">
              <img src="../../assets/images/icon-next.png" style="height: 35px;" alt="">
            </button>
          </div>
        </section>

        <!-- 本月獎品一覽  -->
        <section class="py-100-sm-40 ">
          <div class="container">
            <h2 class="display-6 fw-bold d-flex align-items-center mb-4 d-flex flex-lg-row align-items-center mb-4 ">
              <div class="d-flex align-items-center">
                <div class="d-lg-block d-none me-4 rounded-circle text-center pt-2 position-relative" style="background-color: #FAE8D0; width: 64px; height: 64px; vertical-align: middle; font-size: 45px;">
                  本
                  <div class="position-absolute" style="background-color: #F5AE4C; width: 25px; height: 5px; top: 42px; right: 20px;">
                  </div>
                </div>
                <div class="d-lg-none me-2 rounded-circle text-center pt-1 position-relative" style="background-color: #FAE8D0; width: 36px; height: 36px; font-size: 24px;">
                  本
                  <div class="position-absolute" style="background-color: #F5AE4C; width: 12px; height: 3px; top: 21px; right: 12px;">
                  </div>
                </div>
                <span class="recipeTitle">月獎品一覽</span>
              </div>
              <button type="button" class="d-none d-lg-block btn border-0  brown-button badge rounded-pill fs-5">
                立即抽獎
              </button>
              <button type="button" class="d-lg-none btn border-0 brown-button badge rounded-pill" style="font-size: 12px;">
                立即抽獎
              </button>
            </h2>
          </div>
          <div class="d-flex align-items-center justify-content-center">
            <div class="row row-cols-lg-4 row-cols-1 gy-4 container justify-content-center">
              <div class="col">
                <div class="card position-relative border-0" style="border-radius: 20px;">
                  <div class="card-header h4 fw-bold text-center mb-3" style="background-color: #F5AE4C;">
                    大獎 / 1 名額
                  </div>
                  <img src="../../assets/images/sale-image1.png" class="card-img " style="border-radius: 20px;" alt="">
                  <div class="card-img-overlay ">

                    <h5 class="card-text">
                    </h5>
                  </div>
                  <div class="card-footer bg-transparent border-0">
                    <h5 class="h5 d-flex justify-content-between fw-bold">
                      自動攪拌機
                      <span>$2,000</span>
                    </h5>
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star.png" style="height: 15px;" alt="">

                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card position-relative border-0" style="border-radius: 20px;">
                  <div class="card-header h4 fw-bold text-center mb-3" style="background-color: #FAE8D0;">
                    次獎 / 5 名額
                  </div>
                  <img src="../../assets/images/sale-image2.png" class="card-img " style="border-radius: 20px;" alt="">
                  <div class="card-img-overlay ">

                    <h5 class="card-text">
                    </h5>
                  </div>
                  <div class="card-footer bg-white border-0">
                    <h5 class="h5 d-flex justify-content-between fw-bold">
                      抹茶粉
                      <span>$50/100g</span>
                    </h5>
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star.png" style="height: 15px;" alt="">

                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card position-relative border-0" style="border-radius: 20px;">
                  <div class="card-header h4 fw-bold text-center mb-3" style="background-color: #FBF8F3;">
                    三獎 / 20 名額
                  </div>
                  <img src="../../assets/images/sale-image3.png" class="card-img " style="border-radius: 20px;" alt="">
                  <div class="card-img-overlay ">
                    <h5 class="card-text">
                    </h5>
                  </div>
                  <div class="card-footer bg-white border-0">
                    <h5 class="h5 d-flex justify-content-between fw-bold">
                      原木組合
                      <span>$5,000</span>
                    </h5>
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star-filled.png" style="height: 15px;" alt="">
                    <img src="../../assets/images/icon-star.png" style="height: 15px;" alt="">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

    </div>
</template>
<style>
 ::placeholder {
    color: #D3CCC1 !important;
  }
</style>
