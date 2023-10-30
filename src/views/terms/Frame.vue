<template>
  <q-page>
    <PopUpImage v-model:url.sync="imgUrl" />
    <div
      :class="
        ($windowWidth > 768 ? 'q-ma-md' : 'q-ma-none') + ' row justify-center'
      "
    >
      <q-card class="col-12 q-pa-md">
        <h3 class="q-mt-none">
          Рама / Кінематика принтера
        </h3>
        <p>Зробимо вигляд що тут щось є</p>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { ref, defineComponent } from "vue";
import PopUpImage from "../../Components/PopUpImage.vue";
import { vueWindowSizeMixin } from "vue-window-size/mixin";

export default defineComponent({
  mixins: [vueWindowSizeMixin()],
  name: "Frame",
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