<template>
  <q-page>
    <PopUpImage v-model:url.sync="imgUrl" />
    <div class="page row justify-center">
      <q-card class="col-12 q-pa-md" bordered>
        <h3 class="q-mt-none">
          Порядок проведення налаштувань та калібровок.
        </h3>
        <p>
          Всі калібрування проводити на якісному філаменті, бажано його перед
          цим сушити (можна не сушити, якщо його якість перевірена та стабільна)
        </p>
        <q-list bordered padding class="rounded-borders text-primary">
          <q-item v-ripple clickable to="pid">
            <q-item-section>1. Калібровка PID сопла та столу</q-item-section>
          </q-item>
          <q-item v-ripple clickable>
            <q-item-section>
              2. Виставлення стола в горізонт по відношенню до механиці принтеру
            </q-item-section>
          </q-item>
          <q-item v-ripple clickable>
            <q-item-section>3. Налаштування z-offset</q-item-section>
          </q-item>
          <q-item v-ripple clickable>
            <q-item-section>
              4. Калібровка та/або перевірка відношення кроків моторів на мм
              відстані у простоі на вісях X, Y, Z
            </q-item-section>
          </q-item>
          <q-item v-ripple clickable to="e-steps">
            <q-item-section>5. Калібровка E-steps</q-item-section>
          </q-item>
          <q-item v-ripple clickable to="flow">
            <q-item-section>6. Калібровка потоку</q-item-section>
          </q-item>
          <q-item v-ripple clickable to="retract">
            <q-item-section>7. Калібровка відкату</q-item-section>
          </q-item>
          <q-item v-ripple clickable>
            <q-item-section>
              8. Калібровка Linear Advance, якщо є
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { ref, defineComponent } from "vue";
import PopUpImage from "../../Components/PopUpImage.vue";

export default defineComponent({
  name: "Calibration",
  components: {
    PopUpImage,
  },
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