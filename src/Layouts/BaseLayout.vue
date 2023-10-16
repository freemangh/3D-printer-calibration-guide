<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated>
      <q-toolbar>
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
          class="q-py-none q-my-none"
          style="font-size: 1.2rem"
          icon="invert_colors"
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
      >
      </q-tree>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
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
      router.push("/");
    }

    const selected = ref(router.currentRoute.value.name);

    Dark.set(localStorage.dark === "true");

    function darkChange() {
      Dark.set(!Dark.isActive);
      localStorage.dark = Dark.isActive;
    }

    function onSelected(node) {
      if (node == null) {
        router.push("/");
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
      props: [
        {
          label: "Головна",
          key: "home",
          children: [
            {
              label: "Терміни (складові принтера і т д)",
              key: "_terms",
              children: [
                { label: "Екструдер (Extruder)", key: "extruder" },
                { label: "Фідер (Feeder)", key: "feeder" },
                { label: "Нагрівальна платформа (стіл)", key: "heated-bed" },
                { label: "Рама (Frame)", key: "frame" },
                { label: "Мотори (Motors)", key: "motors" },
                { label: "Датчики (Sensors)", key: "sensors" },
                { label: "Контролер (Controller)", key: "controller" },
                { label: "Прошивка (Firmware)", key: "firmware" },
              ],
            },
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
              key: "_terms5",
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
          ],
        },
      ],
    };
  },
};
</script>