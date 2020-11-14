<template>
<v-form v-model="valid">
  <div class="container">
    
    <div class="form-group">
      <img src="../assets/@.png" alt="">
      <v-text-field
        autocomplete="false"
        label="E-posta adresi"
        v-model="mail"
        type="email"
        class="form-control"
        id="mail"
      />
      <img src="../assets/kilit.png" alt="">
      <v-text-field
        v-model="password"
        label="Şifre"
        autocomplete="false"
        type="password"
        class="form-control"
        id="password"
      />
      <v-checkbox
      v-model="checkbox"
      :label="`Beni Unutma!`"
    ></v-checkbox>
      <div class="mt-3">
        <v-btn @click="girisYap" class="btn btn-success" color="green"><img src="../assets/girisyap.png" alt=""></v-btn>
        <img src="../assets/misiniz.png" alt="">
        <v-btn class="btn btn-primary" color="black"><img src="../assets/uyeol.png" alt=""></v-btn>
      </div>
    </div>
  </div>
</v-form>
</template>

<script>

export default {
  data() {
    return {
      checkbox: true,
      mail: "",
      password: "",
    };
  },
  methods: {
    girisYap() {
      //Giriş Bilgilerini sunucuya göndererek
      //giriş yapılmasını bekler
      alert(this.mail);
    },
  },
};
</script>

<style>
</style>