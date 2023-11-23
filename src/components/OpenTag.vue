<script setup>
import AttributesComponent from './AttributesComponent.vue';

const props = defineProps({
  attribures:{
    type: Array
  },
  isSelfClosing: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
  },
});
</script>
<template>
  <div class="element">
    <span class="element__bracket">&lt;</span>
    <span class="element__name"> {{ name }}</span>
    <div class="element__attributes">
      <AttributesComponent v-for="item in attribures" :name="item.name" :value="item.value" />
    </div>
    
    <span v-if="isSelfClosing" class="element__bracket">/</span>
    <span class="element__bracket--close">&gt;</span>
  </div>
</template>
<style scope lang="scss">
.element {
  display: flex;
  flex-wrap: nowrap;
  .element__attributes{
    display: flex;
    flex-direction: column;
  }
  .element__bracket--close{
    display: flex;
    align-items: flex-end;
  }
}
</style>
