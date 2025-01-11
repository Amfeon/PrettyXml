# Pretty Xml for Vue 3 

Pretty XML is a simple XML viewer for Vue 3. The component formats and colors an XML document. You can reveal and hide the contents of tags. If you want to use Pretty XML in Nuxt, you should wrap it in `ClientOnly`.

## Demo
https://amfeon.github.io/PrettyXml/


## Project Setup

```sh
npm install pretty-xml-vue3 --save
```
## Usage

```sh
<script setup>
  import { PrettyXml } from 'pretty-xml-vue3';

  // content: string
  const content = '<?xml version="1.0" encoding="UTF-8"?><urlset  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">  <url>    <loc>https://example.com/news/651</loc>    <lastmod>2022-08-04T15:46:40.285Z</lastmod>  </url> <url>    <loc>https://example.com/news/650</loc>    <lastmod>2022-08-04T15:46:40.285Z</lastmod>  </url>  <url>    <loc>https://example.com/news/649</loc>    <lastmod>2022-08-04T15:46:40.285Z</lastmod>  </url></urlset>'

</script>
```

```sh
<template>
      <PrettyXml :xml="content" :options="{shortRecord:true}"/>
</template>
```
options: {
  shortRecord: Boolean
} - optional value

## Styles
You need manually import component's styles.
```sh
import "pretty-xml-vue3/style.css"
```

| css-variable            | value              |
|-------------------------|--------------------|
| --tag-name-color        | rgb(207, 42, 42)   |
| --tag-content-color     | rgb(0, 0, 0)       |
| --attribute-name-color  | rgb(61, 133, 35)   |
| --attribute-value-color | rgb(42, 83, 207)   |
| --remark-color          | rgb(134, 134, 134) |

You can redefine css variables to adapt to your design.


