<template>
  <div class=container>
    <div id="app">
  <v-app id="inspire">
    <v-form>
      <v-container>
        <v-row align="center">
          <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <v-text-field
              label="Ad*"
              solo
              dense
            ></v-text-field>
          </v-col>
          </v-row>
        <v-row>
           <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <v-text-field
              label="Soyad*"
              solo
              dense
            ></v-text-field>
          </v-col>
          </v-row>
          <v-row>
         
           <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <v-text-field
              label="E-Posta Adresi*"
              solo
              dense
            ></v-text-field>
          </v-col>
          </v-row>
          <v-row>
           <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <v-text-field
              label="Şifre*"
              solo
              dense
            ></v-text-field>
          </v-col>
          </v-row>
          <v-row>
           <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <v-text-field
              label="Şifre Tekrar*"
              solo
              dense
            ></v-text-field>
          </v-col>
          </v-row>
          <v-row>
           <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <v-text-field
              label="Cep Telefonu*"
              solo
              dense
            ></v-text-field>
          </v-col>
          </v-row>
          <v-checkbox
      v-model="checkbox"
      :label="` Üyelik Sözleşmesi şartlarını okudum ve Kabul ediyorum.
`"
    ></v-checkbox>
    <v-checkbox
      v-model="checkbox"
      :label="` Tarafıma pazarlama ve tanıtım Amaçlı iletişime geçilmesine
izin veriyorum.
`"
    ></v-checkbox>
        <div>
        <v-row >
        <v-col
            cols="12"
            sm="6"
        >
            <div class="text-center">
            <div class="my-2">
                <v-btn
                x-large
                color="success"
                dark
                >
                ÜYE   OL
                </v-btn>
            </div>
            </div>
        </v-col>
        </v-row>
        </div>
        <div>
            <p>"Zaten üye misiniz? "</p>
        </div>
        
            <div class="text-center">
            <div class="my-2">
                <v-btn
                x-large
                color="success"
                dark
                >
                GİRİŞ YAP
                </v-btn>
            </div>
            </div>
       

        
        
        
      </v-container>
    </v-form>
  </v-app>
</div>
    </div>
</template>