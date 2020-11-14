<template>
  <div class="container" > 
    <img src="../assets/sadece.png" alt="" >
    <hr />
    <div class="scroll-olacak">
     
      <div
        ref="urunler"
        
        style="position: left"
        :style="{ left: left + 'rem' }"
        class="urunler d-inline-flex"
      >
        <div v-for="(urun, index) in urunler" :key="index" class="card urun">
       
          <img class="card-img-top" :src="urun.resim" alt="Card image cap" />
          <div class="card-body text-center">
           
            <h5 class="card-title">{{ urun.baslik }}</h5>
            <div
              class="d-flex flex-row justify-content-center align-items-center"
            >
          
              <div class="bg-danger text-light rounded p-2">
               <img src="../assets/sadece2.png" alt="">
              </div>
              <div class="d-flex flex-column">
                <span class="text-secondary"
                  ></span
                >
                <span> {{ urun.fiyat }}TL</span>
              </div>
           
            </div>
            <a href="#" class="mt-3 w-75 btn btn-outline-secondary rounded-btn"
              ><f-icon icon="shopping-cart" /> <img src="../assets/sepeteekle.png" alt=""></a
            >
            
          </div>
        
        </div>
        
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      left: 0,
      urunler: [
        {
          baslik: "Domat Kırma Yeşil Zeytin",
          fiyat: 34.9,
          resim: require("../assets/bnzr1.jpg"),
        },
        {
          baslik: "Soslu Edremit Kırma",
          fiyat: 34.9,
          resim: require("../assets/bnzr2.jpg"),
        },
        
      ],
    };
  },
  methods: {
    kaydir(sagaMi) {
      if (sagaMi) this.left -= 18;
      else this.left += 18;
      if (this.left * -1 >= this.$refs.urunler.scrollWidth / 16 - 4 * 18) {
        this.left = 0;
      }
      if (this.left > 0) {
        this.left = 0;
      }
    },
  },
};
</script>

<style>
.rounded-btn {
  border-radius: 10px !important;
}
.urun {
  border: none !important;
  width: 10px;
}
.urunler {
  width: 10px;
  transition: all 1s ease;
}
.scroll-olacak {
  position: relative;
  overflow: hidden;
}
.ok {
  padding: 5px;
  background-color: white;
  color: gray;
  border-radius: 30px;
  top: 30%;
  text-align: center;
  z-index: 9;
  width: 10px;
  height: 15px;
  position: absolute;
  box-shadow: 0.5px 0.5px 10px 0px gray;
}
.sag {
  right: -5px;
}
.sol {
  left: -5px;
}
</style>