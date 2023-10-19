<template>
  <q-page>
    <PopUpImage v-model:url.sync="imgUrl" />
    <div class="row q-ma-md justify-center">
      <q-card class="col-12 q-pa-md">
        <h3 class="q-mt-none">Датчики (кіневики, блтач, закінчення філамента тощо)</h3>
        <p>Зробимо вигляд що тут щось є</p>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import PopUpImage from "../../Components/PopUpImage.vue";

export default {
  name: "Sensors",
  components: {
    PopUpImage,
  },
  setup() {
    return {
      imgUrl: ref("")
    };
  },
};
</script>