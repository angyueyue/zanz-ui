<template>
  <button>
    <slot>{{ p.size }}||{{ p.type }}</slot>
  </button>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { buttonProps } from "./types";
export default defineComponent({
  name: "ZanzButton",
  props: buttonProps,
  setup(props) {
    const p = computed(() => {
      const { size = "medium", type = "text" } = props;
      return { size, type };
    });

    return { p };
  },
});
</script>
