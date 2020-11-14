<template>
  <div>
    <v-toolbar dense>
      <v-btn-toggle v-model="toggle_exclusive" color="green" dense group>
        <img src="../assets/zeytin.png" alt="" />
        <v-overflow-btn
          :items="dropdown_font"
          label="Zeytin"
          hide-details
          class="pa-0"
        ></v-overflow-btn>
        <v-btn>
          <img src="../assets/zeytinyagi.png" alt="" />
          <label>Zeytinyağı</label>
        </v-btn>
        <img src="../assets/sarkuteri.png" alt="" />
        <v-overflow-btn
          :items="dropdown_edit"
          label="Şarküteri"
          hide-details
          class="pa-0"
        ></v-overflow-btn>
        <v-btn>
          <img src="../assets/tursu.png" alt="" />
          <label>Turşular</label>
        </v-btn>
        <v-btn>
          <img src="../assets/kozmtk.png" alt="" />
          <label>Kozmetik</label>
        </v-btn>
        <v-btn>
          <img src="../assets/evypm.png" alt="" />
          <label>Ev yapımı</label>
        </v-btn>
        <v-btn>
          <img src="../assets/sekrlm.png" alt="" />
          <label>Şekerleme</label>
        </v-btn>
        <v-btn>
          <img src="../assets/yms.png" alt="" />
          <label>Kuruyemiş</label>
        </v-btn>
      </v-btn-toggle>
    </v-toolbar>
  </div>
</template>



<script>
export default {
  data() {
    return {
      dropdown_font: [
        { text: "Siyah Zeytin" },
        { text: "Yeşil Zeytin" },
      ],
      dropdown_edit: [
        { text: "Peynir" },
        { text: "Reçel" },
        { text: "İçecek" },
        { text: "Diğer" },
      ],
      toggle_exclusive: 2,
      toggle_multiple: [1, 2, 3],
    };
  },
};
</script>