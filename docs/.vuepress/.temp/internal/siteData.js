export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "递归之路",
  "description": "",
  "head": [],
  "locales": {
    "/": {
      "lang": "zh-CN"
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}