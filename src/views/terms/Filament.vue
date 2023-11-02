<template>
  <q-page>
    <PopUpImage v-model:url.sync="imgUrl" />
    <div class="page row justify-center">
      <q-card class="col-12 q-pa-md" bordered>
        <h3 class="q-mt-none">
          Філамент для 3D друку
        </h3>
        <p>
          Що таке філамент? Філамент – це матеріал у вигляді тонкої нитки, який
          використовується у 3D принтерах для створення об'єктів шляхом
          нанесення шару за шаром. Філаменти виготовляються з різних матеріалів,
          таких як пластик і гума, також можуть бути додані різні наповнювачі
          такі як скло, метал, дерево та інші.
        </p>
        <h5>Основні види філаментів</h5>
        <q-select
          v-model="visibleTypes"
          label="Про які пластики відображати інформацію"
          filled
          multiple
          clearable
          :options="filamentTypes"
          :option-value="(opt) => opt.shortName"
          :option-label="(opt) => opt.shortName + ' (' + opt.name + ')'"
          emit-value
          map-options
        />
        <div
          :class="
            ($windowWidth > 768 ? 'q-ma-md' : 'q-my-md') + ' row justify-center'
          "
        >
          <template
            v-for="filamentInfo in filamentTypesInfo"
            :key="filamentInfo.type.shortName"
          >
            <div
              v-if="
                visibleTypes.length == 0 ||
                  visibleTypes.includes(filamentInfo.type.shortName)
              "
              class="col-sm-12 col-md-6 col-lg-4"
            >
              <q-card class="q-ma-xs" bordered>
                <q-toolbar
                  :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-4'"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28px"
                    height="28px"
                    viewBox="0 0 512 512"
                  >
                    <g :fill="$q.dark.isActive ? 'white' : 'black'">
                      <path
                        d="M512,403.9c-10.64,51.13-45.4,72.23-92.76,75-31.74,1.85-63.67.35-96.94.35C321.51,490.63,320.86,500,320,512L269.61,461l52.72-60.5c.67,12.46,1.1,20.45,1.55,28.95,32.44,0,64.46,2.59,95.88-.69,35.59-3.72,49.6-37.7,31.73-71.85-14.17-27.1-29.7-53.47-44.57-80.19-7.19-12.94-14.24-26-22.06-40.26l43.72-25.2c27.21,57.46,68.53,106.2,83.42,168.93Z"
                      />
                      <path
                        d="M266.34,0c38.2,8.94,61.93,35.6,80.57,68.51,11.39,20.12,22.83,40.21,34.9,61.48l24.07-12.42-18.72,76.25-73.45-21.21,25-17.86c-16.57-27.46-31-56.11-49.83-81.27-20.25-27-54-22.27-73,8.32-15.19,24.45-28.82,49.91-43.2,74.89-8,13.9-16.11,27.74-24.73,42.57l-42.37-24.44c4.51-8.35,8.5-15.95,12.68-23.44,15.14-27.06,30.62-53.93,45.45-81.16C181.83,36.87,205.79,10.66,243.07,0Z"
                      />
                      <path
                        d="M0,377.5C9.21,334.66,35.36,300.07,55.09,261l-22.5-14.77,74-21.43c6.12,25.32,11.94,49.39,18.32,75.76L97.09,288.82C83,315.54,66.56,341.05,55.6,368.8,43.05,400.59,65,429.29,99,429.68c40.07.46,80.15.37,120.22.51,4.61,0,9.23,0,13.85,0v48.68c-49.94,0-98.69,2.36-147.11-.7-43.4-2.76-75.48-25.05-86-71.63Z"
                      />
                    </g>
                  </svg>

                  <span class="q-pl-lg">
                    {{ filamentInfo.type.name }} ({{
                      filamentInfo.type.shortName
                    }})</span>
                </q-toolbar>
                <q-card-section class="q-py-xs">
                  <div class="text-h6 q-mb-xs">
                    Умови друку {{ filamentInfo.type.shortName }}:
                  </div>
                  Температура друку {{ filamentInfo.conditions.nozzleTemp }}°
                  С<br>
                  Температура стола {{ filamentInfo.conditions.bedTemp }}° С<br>
                  <span
                    v-for="text in filamentInfo.conditions.texts"
                    :key="text"
                  >
                    {{ text }} <br>
                  </span>
                </q-card-section>
                <q-card-section class="q-py-xs">
                  <div class="text-h6 q-mb-xs">
                    Умови експлуатації готових деталей:
                  </div>
                  <span v-for="text in filamentInfo.termsOfUse" :key="text">
                    {{ text }} <br>
                  </span>
                </q-card-section>
                <q-card-section class="q-pb-md q-pt-xs">
                  <div class="text-h6 q-mb-xs">
                    Умови зберігання
                    {{ filamentInfo.type.shortName }} філаменту:
                  </div>
                  <span
                    v-for="text in filamentInfo.storageConditions"
                    :key="text"
                  >
                    {{ text }} <br>
                  </span>
                </q-card-section>
              </q-card>
            </div>
          </template>
        </div>
        <q-table
          v-model:pagination="pagination"
          flat
          bordered
          title="Виробники"
          :rows="manufacturers"
          :columns="manufacturercolumns"
          row-key="name"
          hide-bottom
        >
          <template #body-cell-ico="props">
            <q-td :props="props" style="padding: 0">
              <q-img
                :src="props.row.imgUrl"
                spinner-color="white"
                style="height: 42px; max-width: 42px; margin: 3px"
              />
            </q-td>
          </template>
          <template #body-cell-name="props">
            <q-td :props="props" style="padding-left: 8px">
              <span class="text-h5">{{ props.row.name }} </span>
              <a :href="props.row.siteUrl" target="_blank" class="q-ml-xs">
                <q-icon name="link" size="32px" />
              </a>
            </q-td>
          </template>
          <template #body-cell-types="props">
            <q-td :props="props">
              <q-chip
                v-for="filament in props.row.types"
                :key="filament.shortName"
                outline
                square
                color="deep-orange"
                text-color="white"
              >
                {{
                  filament.shortName +
                    ($windowWidth > 1500 ? " (" + filament.name + ")" : "")
                }}
              </q-chip>
            </q-td>
          </template>
          <template #body-cell-rating="props">
            <q-td :props="props" style="padding: 0">
              <a
                v-if="props.row.rating == null"
                href="https://forms.gle/biaSCGy3A8MWPMNVA"
                target="_blank"
              >
                <q-icon name="link" size="32px" />
                Тик
              </a>
              <q-rating
                v-else
                v-model="props.row.rating"
                readonly
                max="5"
                size="42px"
                color="yellow"
                icon="star_border"
                icon-selected="star"
              />
            </q-td>
          </template>
        </q-table>
        <h3 class="q-mt-none">
          Вага котушок пластику різних виробників
        </h3>
        LBL 3kg - 630-650g<br>
        LBL 0.8kg - 220g <br>
        Plexiwire (0.9kg) -150-169g <br>
        3Dplast 0.85kg - 240g <br>
        3dPlast 3kg - 630-645g <br>
        Monofilament 0.75kg - 230g <br>
        U3DF 0.75kg - 255g
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
  name: "Filament",
  components: {
    PopUpImage,
  },
  setup() {
    const filamentTypes = {
      pla: { name: "Полілактід", shortName: "PLA" },
      petg: {
        name: "Поліетилентерефталат-гліколь",
        shortName: "PETG",
      },
      abs: {
        name: "Акрилонітрил-бутадієн-стирол",
        shortName: "ABS",
      },
      copet: {
        name: "Кополіестер",
        shortName: "CoPET",
      },
    };
    const manufacturers = {
      plexiwire: {
        name: "Plexiwire",
        imgUrl: "https://shop.plexiwire.com.ua/assets/favicon.ico",
        siteUrl: "https://shop.plexiwire.com.ua",
        rating: null,
        types: [filamentTypes.abs, filamentTypes.pla, filamentTypes.petg],
      },
      monofilament: {
        name: "MonoFilament",
        imgUrl: "https://monofilament.com.ua/image/catalog/monofav.png",
        siteUrl: "https://monofilament.com.ua/ua",
        rating: null,
        types: [filamentTypes.abs, filamentTypes.pla, filamentTypes.copet],
      },
      tdfilament: {
        name: "3D filament",
        imgUrl:
          "https://images.prom.ua/4633378203_w200_h100_3dfilament-virobnik.jpg",
        siteUrl: "https://3dfilament.com.ua/ua",
        rating: null,
        types: [filamentTypes.abs, filamentTypes.pla, filamentTypes.petg],
      },
      pochatokfilament: {
        name: "Pochatok filament",
        imgUrl:
          "https://pochatok-filament.com.ua/wp-content/themes/filament/assets/img/favicon/apple-touch-icon.png",
        siteUrl: "https://pochatok-filament.com.ua",
        rating: null,
        types: [filamentTypes.pla],
      },
      LBL: {
        name: "LBL",
        imgUrl:
          "https://images.prom.ua/4155800364_w150_h70_lbl-ukrayinskij.jpg",
        siteUrl: "https://lbl-corp.com/ua",
        rating: null,
        types: [filamentTypes.pla, filamentTypes.copet],
      },
      FAINYI: {
        name: "ФАЙНИЙ",
        imgUrl: "https://images.prom.ua/4856501795_w200_h100_fainyi.jpg",
        siteUrl: "https://fainyi3d.com/ua",
        rating: null,
        types: [filamentTypes.pla, filamentTypes.petg],
      },
      tdplast: {
        name: "3dplast",
        imgUrl:
          "https://images.prom.ua/1405322810_w200_h100_3dplast-virobnik.jpg",
        siteUrl: "https://3dplast.biz/ua",
        rating: null,
        types: [filamentTypes.abs, filamentTypes.pla, filamentTypes.copet],
      },
      U3DF: {
        name: "U3DF",
        imgUrl: "https://images.prom.ua/785475509_785475509.ico",
        siteUrl: "https://u3df.com.ua/ua",
        rating: null,
        types: [filamentTypes.abs, filamentTypes.pla, filamentTypes.petg],
      },
      BOZE: {
        name: "BOZE",
        imgUrl: "https://www.boze.com.ua/templates/t3_bs3_blank/favicon.ico",
        siteUrl: "https://www.boze.com.ua/index.php/ru",
        rating: null,
        types: [filamentTypes.abs, filamentTypes.pla],
      },
      DASplast: {
        name: "DASplast",
        imgUrl: "https://images.prom.ua/620466983_w150_h70_dasplast.jpg",
        siteUrl: "https://dasplast.com/ua",
        rating: null,
        types: [filamentTypes.abs, filamentTypes.pla],
      },
      tDPLASTIC: {
        name: "3DPLASTIC",
        imgUrl:
          "https://www.3dplastic.com.ua/templates/site/images/favicon.ico",
        siteUrl: "https://www.3dplastic.com.ua",
        rating: null,
        types: [filamentTypes.petg],
      },
      tdbro: {
        name: "3D BRO",
        imgUrl:
          "https://petg.com.ua/wp-content/uploads/2023/02/cropped-favicon-32x32.png",
        siteUrl: "https://petg.com.ua",
        rating: null,
        types: [filamentTypes.petg],
      },
      devildesign: {
        name: "Devil Design",
        imgUrl:
          "https://devildesign.com/wp-content/uploads/2018/11/xDevilSamoD.png.pagespeed.ic.7XWlwmN5oT.webp",
        siteUrl: "https://devildesign.com/en",
        rating: null,
        types: [filamentTypes.abs, filamentTypes.pla, filamentTypes.petg],
      },
      creality: {
        name: "Creality",
        imgUrl:
          "https://img.fantaskycdn.com/087c64dc0de25f179fa98c50a7db745c.svg",
        siteUrl: "https://store.creality.com/eu/collections/materials",
        rating: null,
        types: [filamentTypes.pla],
      },
      owl: {
        name: "OWL-Filament",
        imgUrl:
          "https://owl-filament.de/images/logos/favicon.ico",
        siteUrl: "https://owl-filament.de",
        rating: null,
        types: [filamentTypes.pla],
      },
      sunlu: {
        name: "SUNLU",
        imgUrl:
          "https://www.sunlu.com/cdn/shop/files/logo_301304d0-bcbe-41ec-9dc5-da8ee36c8db5_32x.png?v=1686712485",
        siteUrl: "https://www.sunlu.com",
        rating: null,
        types: [filamentTypes.abs, filamentTypes.pla, filamentTypes.petg],
      },
      elegoo: {
        name: "ELEGOO",
        imgUrl:
          "https://www.elegoo.com/cdn/shop/files/20210607111616_32x32.png?v=1623035926",
        siteUrl: "https://www.elegoo.com",
        rating: null,
        types: [filamentTypes.pla],
      },
      kingroon: {
        name: "KINGROON",
        imgUrl:
          "https://kingroon.com/cdn/shop/files/logo_a5a46135-e293-47ec-9833-3fc91b0c8721_32x32.png?v=1651311584",
        siteUrl: "https://kingroon.com",
        rating: null,
        types: [filamentTypes.abs, filamentTypes.pla],
      },
      gembird: {
        name: "gembird",
        imgUrl:
          "https://gembird.ua/pub/media/favicon/websites/4/logo_red_short.png",
        siteUrl: "https://gembird.ua/katalog/3d/filament-dlja-3d-5",
        rating: null,
        types: [filamentTypes.abs, filamentTypes.pla, filamentTypes.petg],
      },
    };

    return {
      imgUrl: ref(""),
      visibleTypes: ref([]),
      filamentTypes: ref(Object.values(filamentTypes)),
      manufacturers: ref(Object.values(manufacturers)),
      manufacturercolumns: ref([
        {
          name: "ico",
          label: "",
        },
        {
          name: "name",
          required: true,
          label: "Назва",
          align: "left",
          sortable: true,
          field: (row) => row.name,
        },
        {
          name: "types",
          required: true,
          align: "center",
          label: "Пластики",
          sortable: true,
          field: (row) => row.types.length,
        },
        {
          name: "rating",
          required: true,
          label: "Рейтинг",
          sortable: true,
          field: (row) => row.rating,
        },
      ]),
      pagination: ref({
        rowsPerPage: 100,
      }),
      filamentTypesInfo: ref([
        {
          type: filamentTypes.pla,
          conditions: {
            nozzleTemp: "190-220",
            bedTemp: "50-60",
            texts: [
              "PLA добре адгезує до підкладок із лакованої каптонової стрічки або скла, але можна також використовувати спеціальні підкладки.",
            ],
          },
          termsOfUse: [
            "Готові деталі з PLA здатні витримувати температуру до 50-60° C. Уникайте високих температур для запобігання деформації.",
            "PLA є достатньо міцним для більшості застосувань, але він менше ударостійкий порівняно з іншими пластиками, такими як ABS.",
            "PLA біорозграджуваний та виготовляється з відновлюваних ресурсів, роблячи його екологічно чистим виробом.",
          ],
          storageConditions: [
            "Зберігайте в сухому середовищі.",
            "Уникайте прямих сонячних променів.",
            "Очищуйте філамент перед кожним друком.",
          ],
        },
        {
          type: filamentTypes.petg,
          conditions: {
            nozzleTemp: "210-250",
            bedTemp: "80-100",
            texts: [
              "PETG зазвичай має добру адгезію до скляних та каптонових поверхонь. Але, якщо у вас є проблеми з прилипанням, використовуйте товстий шар лаку для волосся або каптонову стрічку.",
            ],
          },
          termsOfUse: [
            "Готові деталі з PETG можуть витримувати температури до 70-80° С без деформації. Це робить їх ідеальними для виробництва функціональних деталей, які можуть бути використані в умовах підвищеної температури.",
            "PETG стійкий до багатьох хімічних сполук, включаючи бензин та оцтову кислоту, що робить його відмінним вибором для виробництва деталей, які можуть бути використані в гіперчутливих середовищах.",
          ],
          storageConditions: [
            "Зберігайте в сухому середовищі.",
            "Уникайте прямих сонячних променів.",
            "Очищуйте філамент перед кожним друком.",
          ],
        },
        {
          type: filamentTypes.abs,
          conditions: {
            nozzleTemp: "220-240",
            bedTemp: "80-110",
            texts: [
              "Для друку ABS рекомендується використовувати підкладку з лакованої каптонової стрічки або скло, покрите ABS/acetone сумішшю для покращення адгезії.",
              "Друкуйте ABS в принтері з закритою камерою для уникнення деформації через зміни температури.",
              "ABS виділяє шкідливі речовини, такі як стирол. Друкуйте в добре провітрюваних приміщеннях або використовуйте витяжку.",
            ],
          },
          termsOfUse: [
            "Готові деталі з ABS стійкі до температур, які можуть досягати 80-90° С без зміни форми чи розміру. Це робить їх відмінним вибором для виробництва пристроїв, які можуть бути піддані тепловому впливу.",
            "ABS досить міцний та ударостійкий пластик, що робить його ідеальним вибором для виготовлення деталей, які можуть бути піддані механічному навантаженню.",
            "ABS відносно стійкий до більшості хімічних сполук, що робить його відмінним для застосування в різних умовах.",
          ],
          storageConditions: [
            "Зберігайте в сухому середовищі.",
            "Уникайте прямих сонячних променів.",
            "Очищуйте філамент перед кожним друком.",
          ],
        },
        {
          type: filamentTypes.copet,
          conditions: {
            nozzleTemp: "130-260",
            bedTemp: "70-90",
            texts: [
              "CoPET може добре адгезувати до підкладок з каптону, якщо вони нагріті та правильно підготовлені.",
            ],
          },
          termsOfUse: [
            "Деталі з CoPET можуть витримувати температури в діапазоні від 80°C до 100°C без деформації чи втрати структурних властивостей.",
            "CoPET має високу міцність і стійкість до ударів.",
          ],
          storageConditions: [
            "Зберігайте в сухому середовищі.",
            "Уникайте прямих сонячних променів.",
            "Очищуйте філамент перед кожним друком.",
          ],
        },
      ]),
    };
  },
});
</script>