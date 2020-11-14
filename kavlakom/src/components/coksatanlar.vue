<template>
  <div class="container">
    <div class="container" >
      <v-row>
      <div class="col-sm">
        <v-btn color="green" text>Kampanyalar</v-btn>
      </div>
      <div class="col-sm">
        <v-btn color="green" text>Çok Satanlar</v-btn>
      </div>
      <div class="col-sm">
        <v-btn color="green" text>Fırsat Ürünleri</v-btn>
      </div>
      <div class="col-sm">
        <v-btn color="green" text>Yeni Ürünler</v-btn>
      </div>
      </v-row>
      <v-divider></v-divider>
      <div >
      <v-row>
        <v-app >
          <v-row>
          <v-card class="container" :loading="loading" max-width="250">
            
            

            <v-img height="250" src="../assets/gr1.jpg"></v-img>

            <v-card-title
              >Kavlak Delice Zeytinyağı 500 ml Cam Şişe</v-card-title
            >

            <v-card-text>
              

              <div>
                Doğada kendiliğinden yetişen tamamen doğan deli zeytinlerin
                toplanmasıyla ve ilk..
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>99,90 TL</v-card-title>

            <v-card-actions> </v-card-actions>
          
        
          </v-card>
          <v-card class="container"  max-width="250">
            

            <v-img height="250" src="../assets/gr2.jpg"></v-img>

            <v-card-title
              >Kavlak Naturel Sızma 2li 5 LT Özel Fiyatlı Kampanya</v-card-title
            >

            <v-card-text>
              

              <div>
                Yağ oranı yüksek Gemlik zeytinlerinden, son sistem kontinü
                zeytinyağı fabrikasın..
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>289,90 TL</v-card-title>

            <v-card-actions> </v-card-actions>
          </v-card>
          <v-card class="container"  max-width="250">
            

            <v-img height="250" src="../assets/1a1b.jpg"></v-img>

            <v-card-title
              >Kavlak Zeytin Ezmesi 280 gr 1 Alana 1 Bedava</v-card-title
            >

            <v-card-text>
              

              <div>
                Kahvaltıların vazgeçilmez lezzetleri arasında yer alan zeytin ezmesi artık Kavla..
              </div>
            </v-card-text>

            <v-divider ></v-divider>

            <v-card-title>29,90 TL</v-card-title>

            <v-card-actions> </v-card-actions>
          </v-card>
          <v-card class="container"  max-width="250">
            <template >
            </template>

            <v-img height="250" src="../assets/2a1b.jpg"></v-img>

            <v-card-title
              >Kavlak Taş Baskı Zeytinyağı 3lü Özel Fiyatlı Kampanya</v-card-title
            >

            <v-card-text>
              

              <div>
                Taş değirmenlerde ezilerek soğuk sıkım yöntemi ile elde edilen gerçek Taş Baskı ..
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>469,90 TL</v-card-title>

            
          </v-card>
          </v-row>
        </v-app>
      </v-row>
      </div>
    </div>
  </div>
</template>