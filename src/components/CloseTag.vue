<script setup>
const props = defineProps({
  name: {
    type: String,
  },
});
</script>
<template>
  <div class="element">
    <span class="element__bracket">&lt;/</span>
    <span class="element__name"> {{ name }}</span>
    <span class="element__bracket">&gt;</span>
  </div>
</template>
<style scope lang="scss">
.element {
  display: flex;
  flex-wrap: nowrap;
}
</style>
