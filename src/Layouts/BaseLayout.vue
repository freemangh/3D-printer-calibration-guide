<template>
  <q-layout view="hHh LpR fFf" class="text-body1">
    <q-header>
      <q-toolbar :class="$q.dark.isActive ? 'bg-black' : 'bg-indigo-6'">
        <q-btn
          dense
          flat
          round
          icon="menu"
          class="q-mr-sm"
          @click="toggleLeftDrawer"
        />
        <q-avatar>
          <img src="https://drukarmy.org.ua/apple-touch-icon.png" />
        </q-avatar>

        <q-toolbar-title></q-toolbar-title>
        <q-space />
        <q-btn
          stretch
          flat
          @click="darkChange"
          style="font-size: 1.2rem"
          icon="invert_colors"
          :class="$q.dark.isActive ? 'secondary' : 'black'"
        />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-tree
        :nodes="props"
        default-expand-all
        v-model:selected="selected"
        node-key="key"
        @update:selected="onSelected"
        selected-color="red"
      />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-dialog v-model="seamless" seamless position="bottom">
      <q-card bordered>
        <q-bar style="padding-right: 2px">
          <q-space />
          <q-btn flat icon="close" v-close-popup> </q-btn>
        </q-bar>
        <q-card-section>
          Знайшов помилку? Хочеш допомогти з наповненням сайту?
          <a href="https://t.me/pavver">
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 16 16"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <linearGradient
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  id="linearGradient-1"
                >
                  <stop stop-color="#38AEEB" offset="0%"></stop>
                  <stop stop-color="#279AD1" offset="100%"></stop>
                </linearGradient>
              </defs>
              <g
                id="Artboard"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <circle
                  id="Oval"
                  fill="url(#linearGradient-1)"
                  cx="8"
                  cy="8"
                  r="8"
                ></circle>
                <path
                  d="M3.17026167,7.83635602 C5.78750201,6.74265999 7.53273882,6.02162863 8.40597211,5.67326193 C10.8992306,4.67860423 11.2454541,4.53439191 11.5831299,4.52864956 C11.6573986,4.52743168 11.8385417,4.55776042 11.9798438,4.67645833 C12.1211458,4.79515625 12.1635786,4.87206678 12.1755371,4.93908691 C12.1874957,5.00610705 12.1862759,5.21456762 12.1744385,5.3338623 C12.0393279,6.69547283 11.5259342,9.83829771 11.2285121,11.3633248 C11.1026617,12.008621 10.8548582,12.2249854 10.6149558,12.2461596 C10.0935924,12.2921758 9.69769267,11.9156852 9.19272668,11.5981993 C8.40255458,11.1013965 8.13911734,10.9180161 7.3721185,10.4332283 C6.48571864,9.87297217 6.85080034,9.6784879 7.35595703,9.17524981 C7.48815894,9.04355001 9.67825076,7.04590073 9.71077046,6.86250183 C9.7391276,6.70257812 9.7494847,6.68189389 9.67664063,6.60973958 C9.60379655,6.53758527 9.51674192,6.54658941 9.46083149,6.55876051 C9.38158015,6.57601267 8.17521836,7.33962686 5.84174612,8.84960308 C5.48344358,9.08558775 5.15890428,9.20056741 4.86812819,9.19454205 C4.54757089,9.18789957 3.93094724,9.02070014 3.47255094,8.87778221 C2.91030922,8.70248755 2.46345069,8.609808 2.50236203,8.31210343 C2.52262946,8.15704047 2.74526267,7.998458 3.17026167,7.83635602 Z"
                  id="Path-3"
                  fill="#FFFFFF"
                ></path>
              </g>
            </svg>
          </a>
          <a href="https://github.com/pavver/3D-printer-calibration-guide">
            <svg
              height="32"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              data-view-component="true"
              class="octicon octicon-mark-github v-align-middle color-fg-default"
            >
              <path
                d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
              ></path>
            </svg>
          </a>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { Dark } from "quasar";
import { useRouter } from "vue-router";

export default {
  name: "BaseLayout",
  setup() {
    const leftDrawerOpen = ref(false);
    const router = useRouter();

    if (router.currentRoute.value.name == "404") {
      router.push("home");
    }

    const selected = ref(router.currentRoute.value.name);

    router.beforeEach((to, from, next) => {
      selected.value = to.name;
      next();
    });

    Dark.set(localStorage.dark === "true");

    function darkChange() {
      Dark.set(!Dark.isActive);
      localStorage.dark = Dark.isActive;
    }

    function onSelected(node) {
      if (node == null) {
        router.push("home");
        return;
      }
      if (node.startsWith("_")) return;
      router.push(node);
    }

    return {
      darkChange,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      selected,
      onSelected,
      seamless: ref(true),
      props: [
        {
          label: "Головна",
          key: "home",
          children: [
            {
              label: "Дефекти друку",
              key: "_terms12",
              children: [
                { label: "1", key: "_terms3" },
                { label: "2", key: "_terms4" },
              ],
            },
            {
              label: "Калібрування",
              key: "calibration",
              children: [
                {
                  label: "Фідер (E-steps)",
                  key: "e-steps",
                },
                {
                  label: "Потік (Flow)",
                  key: "flow",
                },
                {
                  label: "Відкат (Retract)",
                  key: "retract",
                },
                {
                  label: "Темпратура друку",
                  key: "pid",
                },
              ],
            },
            {
              label: "Супутні терміни",
              key: "_terms",
              children: [
                { label: "Екструдер (Extruder)", key: "extruder" },
                { label: "Сопло (Nozzle)", key: "nozzle" },
                { label: "Фідер (Feeder)", key: "feeder" },
                { label: "Стіл (Платформа)", key: "heated-bed" },
                { label: "Рама (Frame)", key: "frame" },
                { label: "Датчики (Sensors)", key: "sensors" },
                { label: "Контролер (Controller)", key: "controller" },
                { label: "Прошивка (Firmware)", key: "firmware" },
                { label: "Філамент (Filament)", key: "filament" },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>