<script setup>
import { ref, watch } from 'vue';
import XmlTag from './XmlTag.vue';
const props = defineProps({
  xml:{
    type:Element
  },
});
const xmlParser = new DOMParser();
const rootNode = ref();

const parseDocument = (xml) => {
  const doc = xmlParser.parseFromString(xml, "application/xml");
  const rootElement = doc.childNodes[0];
  rootNode.value = rootElement;
};

watch(
  () => props.xml,
  (value) => {
    parseDocument(value);
  }
);

parseDocument(props.xml);
</script>
<template>
  <XmlTag :node="rootNode"/>  
</template>
<style scope></style>
