<template>
  <q-page>
    <PopUpImage v-model:url.sync="imgUrl" />
    <div class="row q-ma-md justify-center">
      <q-card class="col-12 q-pa-md" bordered>
        <h3 class="q-mt-none">Калібрування E-Steps</h3>

        <p>
          Калібрування E-Steps (кількість кроків на один міліметр філаменту),
          також відоме як "екструдерний калібр" або "екструдерна калібрація", є
          важливим кроком для точногї подачі матеріалу у вашому 3D-принтері з
          технологією FDM. Коли екструдер правильно налаштований, це допомагає
          уникнути проблем, таких як пере-екструзія чи недо-екструзія. Також цю
          процедуру потрібно проводити після заміни
          <q-btn
            to="feeder"
            outline
            class="q-py-none"
            label="ФІДЕРА"
          />.
        </p>

        <p>Щоб відкалібрувати E-Steps нам потрібен маркер і лінійка.</p>

        <p>
          Для початку нам потрібно дізнатись поточні значення E-Steps
          <q-badge color="info" text-color="black">
            OldE
            <q-icon name="info" size="14px" class="q-ml-xs" />
          </q-badge>
          це можна зробити через екран або за допомогою GCODE (gкод буде
          пізніше)
        </p>

        <p>
          Заправляємо
          <q-btn
            to="filament"
            outline
            class="q-py-none"
            label="філамент"
          />
          в
          <q-btn
            to="feeder"
            outline
            class="q-py-none"
            label="фідер"
          />, гріємо сопло, прикладуємо лінійку і ставимо відмітку, через
          <q-badge color="info" text-color="black">
            Mark
            <q-icon name="info" size="14px" class="q-ml-xs" />
          </q-badge>
          11см фід
          <q-btn
            to="feeder"
            outline
            class="q-py-none"
            label="фідера"
          />
          -
          <q-btn
            @click="imgUrl = '/ucarecdn.webp'"
            outline
            class="q-py-none"
            label="фото"
          />
          видавлюємо
          <q-badge color="info" text-color="black">
            Move
            <q-icon name="info" size="14px" class="q-ml-xs" />
          </q-badge>
          10см прутка і міряємо

          <q-badge color="info" text-color="black">
            Fact
            <q-icon name="info" size="14px" class="q-ml-xs" />
          </q-badge>
          відстань до нашої мітки, з отриманими данними йдем до калькулятора в
          кінці сторінки. Після розрахунку необхідного значення вводимо його в
          налаштування принтера через екран або через GCODE (пізніше будуть
          додані gкоди) і зберігаємо значення в EPPROM.
        </p>

        <p>
          Не обовязково але бажано продовження. Якщо ви хочете ще збільшити
          точність то після калібровки з 11см ви можете повторити всю ту саму
          процедуру але з більшим значенням, наприклад уже з 31см (значення
          більше ніх 31 на мою думку не буде мати особливо великого значення,
          такої точності калібровки буде вже точно достатньо)
        </p>
      </q-card>

      <div class="q-pt-md">
        <q-card class="col-xs-12 col-sm-4 col-md-2" bordered>
          <q-bar>
            <div>Калькулятор</div>
          </q-bar>
          <q-card-section>
            <p class="text-h6">
              (OldE / (Mark - Fact)) * Move =
              <span class="text-weight-bolder">NewE</span>
            </p>
            NewE - Нове значення E-Steps<br />
            <q-badge color="info" text-color="black">
              Mark
              <q-icon name="info" size="14px" class="q-ml-xs" />
            </q-badge>
            - Де поставили мітку (11 або 31см або інше)<br />
            <q-badge color="info" text-color="black">
              Move
              <q-icon name="info" size="14px" class="q-ml-xs" />
            </q-badge>
            - Скільки видавили (10см або 30см або інше)<br />
            <q-badge color="info" text-color="black">
              Fact
              <q-icon name="info" size="14px" class="q-ml-xs" />
            </q-badge>
            - Відстань до мітки після видавлювання прутка<br />
            <q-badge color="info" text-color="black">
              OldE
              <q-icon name="info" size="14px" class="q-ml-xs" />
            </q-badge>
            - Поточне значення E-Steps<br />

            <q-banner
              rounded
              :class="
                ($q.dark.isActive ? 'bg-brown-10' : 'bg-warning') + ' q-mt-xs'
              "
            >
              <p class="text-h6">
                ({{ oldE }} / ({{ mark }} - {{ fact }})) * {{ move }} =
                <span class="text-weight-bolder">{{
                  ((oldE / (mark - fact)) * move).toFixed(2)
                }}</span>
              </p>
              <q-input
                class="q-pa-xs"
                v-model.number="mark"
                type="number"
                filled
                label="Mark Де поставили мітку"
              >
                <template v-slot:prepend> <q-icon name="event" /></template>
              </q-input>
              <q-input
                class="q-pa-xs"
                v-model.number="move"
                type="number"
                filled
                label="Move Скільки видавили"
              />
              <q-input
                class="q-pa-xs"
                v-model.number="fact"
                type="number"
                filled
                label="Fact Відстань до мітки після видавлювання"
              />
              <q-input
                class="q-pa-xs"
                v-model.number="oldE"
                type="number"
                filled
                label="OldE Поточне значення E-Steps"
              />
            </q-banner>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import PopUpImage from "../../Components/PopUpImage.vue";

export default {
  name: "e-steps",
  components: {
    PopUpImage,
  },
  setup() {
    return {
      imgUrl: ref(""),
      mark: ref(110),
      move: ref(100),
      fact: ref(10),
      oldE: ref(95),
    };
  },
};
</script>
