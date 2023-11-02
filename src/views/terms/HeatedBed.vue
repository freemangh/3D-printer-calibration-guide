<template>
  <q-page>
    <PopUpImage v-model:url.sync="imgUrl" />
    <div class="page row justify-center">
      <q-card class="col-12 q-pa-md">
        <h3 class="q-mt-none">
          Стіл / Поверхня
        </h3>
        <p>Зробимо вигляд що тут щось є</p>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { ref, defineComponent } from "vue";
import PopUpImage from "../../Components/PopUpImage.vue";

export default defineComponent({
  name: "HeatedBed",
  components: {
    PopUpImage,
  },
  setup() {
    return {
      imgUrl: ref(""),
    };
  },
});
</script>