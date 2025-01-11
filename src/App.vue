<script setup>
import {reactive, ref} from "vue"
import PrettyXml from './components/PrettyXml.vue';



  // content: string
  const content = ref('<?xml version="1.0" encoding="UTF-8"?><urlset  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">  <url>    <loc>https://example.com/news/651</loc>    <lastmod>2022-08-04T15:46:40.285Z</lastmod>  </url> <url>    <loc>https://example.com/news/650</loc>    <lastmod>2022-08-04T15:46:40.285Z</lastmod>  </url>  <url>    <loc>https://example.com/news/649</loc>    <lastmod>2022-08-04T15:46:40.285Z</lastmod>  </url><selfClosedTag></selfClosedTag></urlset>')
  const options = reactive({
    shortRecord:true
  })

</script>

<template>
  <h1>Demo page for Pretty-Xml-Vue-3 component</h1>
  <div class="page">
    
    <div>
      <h2>Enter your valid xml</h2>
      <textarea id="textarea" class="page__textarea" v-model="content">
      </textarea>
    </div>
    <div>
      <h2>Result</h2>
      <PrettyXml :xml="content" :options="options"/>
    </div>
    <div>
      <h2>Options</h2>
      <div>
        shortRecord: <input type="checkbox" v-model="options.shortRecord">
      </div>
    </div>
    
  </div>
  
</template>

<style scoped>

.page{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap:2rem;
}
.page__textarea{
  width: 90%;
  height: 30vh;
}
</style>

