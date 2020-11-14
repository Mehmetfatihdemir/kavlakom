<template>
<div id="slider">
  <v-app>
    <template>
      <v-carousel >
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </template>
  </v-app>
</div>  
</template>

<script>
export default {
    data () {
      return {
        items: [
          {
            src: 'https://kavlak.com.tr/images/R3.jpg',
          },
          {
            src: 'https://kavlak.com.tr/images/R1.jpg',
          },
          {
            src: 'https://kavlak.com.tr/images/R2.jpg',
          },
        ],
      }
    },
  }
</script>
