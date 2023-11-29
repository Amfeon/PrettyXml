<script setup>
import PrettyXml from './components/PrettyXml.vue';

import {  ref } from 'vue';
const TEST = '<?xml version="1.0" encoding="UTF-8"?><urlset  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">  <url>    <loc>https://releasesoon.ru/film/651</loc>    <lastmod>2022-08-04T15:46:40.285Z</lastmod>  </url> <url>    <loc>https://releasesoon.ru/film/650</loc>    <lastmod>2022-08-04T15:46:40.285Z</lastmod>  </url>  <url>    <loc>https://releasesoon.ru/film/649</loc> <lastmod>2022-08-04T15:46:40.285Z</lastmod>  </url></urlset>'
const xml = ref(TEST)



</script>

<template>
  <PrettyXml :xml="xml" :options="{shortRecord: true}"/>
</template>

<style scoped>

</style>
