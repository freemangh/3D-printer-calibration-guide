<template>
  <vue-easy-lightbox
    :visible="visibleRef"
    :imgs="imgsRef"
    :index="indexRef"
    @hide="onHide"
  />
</template>

<script>
import { ref, watch, defineEmits } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";

export default {
  name: "PopUpImage",
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  emits: ["update:url"],
  components: {
    VueEasyLightbox,
  },
  setup(props, { emit }) {
    const visibleRef = ref(false);
    const indexRef = ref(0);
    const imgsRef = ref([]);

    watch(
      () => props.url,
      (url) => {
        if (url == "") return;
        imgsRef.value = window.location.origin + window.location.pathname + url;
        visibleRef.value = true;
      }
    );

    function onHide() {
      visibleRef.value = false;
      emit("update:url", "");
    }

    return {
      visibleRef,
      indexRef,
      imgsRef,
      onHide,
    };
  },
};
</script>
