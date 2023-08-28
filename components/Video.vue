<template>
  <nut-video :source="source" :options="options"></nut-video>
</template>
<script lang="ts">
  import { toRefs, reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        source: {
          src: 'src/static/video/F-fin.mp4',
          type: 'video/mp4'
        },
        options: {
          autoplay: true,
          muted: false,
          controls: true
        }
      });

      return { ...toRefs(state) };
    }
  };
</script>
