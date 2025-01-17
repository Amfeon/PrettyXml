<script setup>
import AttributesComponent from "./AttributesComponent.vue";

defineEmits(["openClose"]);
const props = defineProps({
  attribures: {
    type: Array,
  },
  isSelfClosing: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
  },
  isAttributesHide: {
    type: Boolean,
    default: false,
  },
  haveChildren: {
    type: Boolean,
    default: false,
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <div class="element">
    <svg
      v-show="haveChildren"
      :class="{ element__toggle: true, 'element__toggle--close': !isOpen }"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      @click="$emit('openClose')"
    >
      <path fill="currentColor" d="m11.998 17l7-8h-14z"></path>
    </svg>
    <span class="element__bracket"> &lt; </span>
    <span class="element__name" @click="$emit('openClose')">
      {{ name }}
    </span>
    <div class="element__attributes" v-if="!isAttributesHide">
      <AttributesComponent
        v-for="(item, index) in attribures"
        :name="item.name"
        :value="item.value"
        :key="'attr' + index"
        :is-last="index === attribures.length - 1"
        :is-self-closing="isSelfClosing"
      />
    </div>
    <span v-else-if="attribures.length" class="element__bracket--close">
      &gt;
    </span>
    <span v-if="isSelfClosing" class="element__bracket">/</span>
    <span v-if="!attribures.length" class="element__bracket--close">
      &gt;
    </span>
  </div>
</template>
<style lang="scss">
.element {
  position: relative;
  display: inline-flex;
  flex-wrap: nowrap;
  height: fit-content;
  .element__attributes {
    display: flex;
    flex-direction: column;
  }
  .element__bracket--close {
    display: flex;
    align-items: flex-end;
  }
  .element__name {
    padding-left: 0.1rem;
    cursor: pointer;
  }
  .element__name,
  .element__bracket--close,
  .element__bracket {
    color: var(--tag-name-color);
  }
  .element__toggle {
    cursor: pointer;
    width: 1em;
    height: 1em;
    position: absolute;
    left: -1em;
    color: var(--caret-name-color);
    transition: transform 0.2s;
    &--close {
      transform: rotate(-90deg);
      transition: transform 0.2s;
    }
  }
}
</style>
