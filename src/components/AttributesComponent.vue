<script setup>
const props = defineProps({
  value: { type: String },
  name: { type: String },
});
</script>
<template>
  <div class="attribute">
    <span class="attribute__name"> {{ name }}= </span>
    <span class="attribute__value"> "{{ value }}" </span>
  </div>
</template>
<style scope lang="scss">
.attribute{
    display: flex;
    padding: 0 5px;
    
}
</style>
