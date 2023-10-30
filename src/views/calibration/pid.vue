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
          Калібрування потоку
        </h3>
        <p>
          // todo все хуйня давай по новій # Калібрування PID [Що таке
          PID](https://ru.wikipedia.org/wiki/%D0%9F%D0%98%D0%94-%D1%80%D0%B5%D0%B3%D1%83%D0%BB%D1%8F%D1%82%D0%BE%D1%80)
          ## Калібрування через COM порт для Marlin Рекомендується запускати
          калібрування з умовами максимально наближеними до умов реального
          друку, тобто філамент має бути встановленим та має бути увімкнений
          вентилятор. Увімкнути вентилятор можна з інтерфейсу принтера або через
          gcode (в даному прикладі 100% швидкість обертання вентилятора):
          ```gcode M106 S255 ``` Ви можете почати цей процес з хот-енду за
          кімнатної температури або заздалегіть розігріти. Для налаштування
          хот-енду введіть у терміналі: ```gcode M303 E0 S200 U1 ``` Це
          дозволить відкалібрувати хот-енд на 200 градусів. Значення S можна
          змінити відповідно до тієї температури за якої ви в більшості
          друкуєте. U1 означає, що результат зберігається в оперативній пам'яті,
          і ми можемо негайно зберегти його в EEPROM, надіславши: ```gcode M500
          ``` Для стола PIDTEMPBED має бути увімкнений у прошивці, тоді команда
          досить схожа: ```gcode M303 E-1 S60 U1 ``` Код Е-1 замість E якраз і
          зазначає що ми калібруємо стіл а не хот-енд, а температура
          встановлюється на 60 градусів. За потреби замініть на вашу
          температуру. Після цього ще раз збережіть у EEPROM за допомогою:
          ```gcode M500 ```
        </p>
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
  name: "PID",
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