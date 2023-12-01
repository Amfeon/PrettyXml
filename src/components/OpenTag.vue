<script setup>
import AttributesComponent from './AttributesComponent.vue';

defineEmits(['openClose'])
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
    <span class="element__name" @click="$emit('openClose')"> {{ name }}</span>
    <div class="element__attributes">
      <AttributesComponent v-for="(item, index) in attribures" :name="item.name" :value="item.value" :key="'attr' + index"/>
    </div>
    
    <span v-if="isSelfClosing" class="element__bracket">/</span>
    <span class="element__bracket--close">&gt;</span>
  </div>
</template>
<style lang="scss">
.element {
  display: inline-flex;
  flex-wrap: nowrap;


  .element__attributes{
    display: flex;
    flex-direction: column;
  }
  .element__bracket--close{
    display: flex;
    align-items: flex-end;
  }
  .element__name{
    padding-left: 0.1rem;
    cursor: pointer;
  }
  .element__name, .element__bracket--close, .element__bracket{
    color: var(--tag-name-color);
  }
}
</style>
