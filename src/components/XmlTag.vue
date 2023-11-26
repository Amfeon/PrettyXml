<script setup>
import { computed, onMounted, ref } from "vue";
import CloseTag from "./CloseTag.vue";
import OpenTag from "./OpenTag.vue"
const props = defineProps({
  node: Element,
});

const name = computed(() => props.node.nodeName);
const childNodes = computed(() => Array.from(props.node.childNodes));

const childElements = computed(
  () => childNodes.value && childNodes.value.filter((x) => x.nodeType === 1)
);

const childContents = computed(
  () => childNodes.value && childNodes.value.filter((x) => x.nodeType === 3)
);

const cdataSections = computed(
  () => childNodes.value && childNodes.value.filter((x) => x.nodeType === 4)
);

const remarks = computed(
  () => childNodes.value && childNodes.value.filter((x) => x.nodeType === 8)
);

const attributes = computed(
  () => (props.node.attributes && Array.from(props.node.attributes)) || []
);

const isOpen = ref(true)

const isSelfClosing =
  !childElements.value.length &&
  !childContents.value.length &&
  !cdataSections.value.length &&
  !remarks.value.length;

onMounted(() => {
  console.log(childContents.value);
});
</script>
<template>
  <div class="tag" @click.stop="isOpen=!isOpen">
    <OpenTag :name="name" :is-self-closing="isSelfClosing" :attribures="attributes"/>
      <template v-if="isOpen">
        <div class="tag__content" v-for="(item, index) in childContents" :key="`content` + index">{{ item.nodeValue }}</div>
      <div class="tag__child">
        <XmlTag
          v-for="(childElement, index) in childElements"
          :key="`e${index}`"
          :node="childElement"
        />
      </div>
      </template>
      <template v-else>
          <div class="tag__content">...</div>
      </template>
      
    <CloseTag :name="name" />
  </div>
</template>
<style lang="scss">
.tag {
  width: 100%;
  display: flex;
  flex-direction: column;
  

  .tag__child, .tag__content {
    padding-left: 1rem;
  }
  .tag__content{
      color: var(--tag-content-color);
  }
}
</style>
