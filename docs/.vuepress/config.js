module.exports = {
  base: "/daily/",
  title: "田一一",
  description: "no description",
  themeConfig: {
    // sidebar: 'auto',
    sidebar: {
      "/others/": ["", "nightmare"],
      "/": ["", "January", "February"]
    },
    nav: [
      {
        text: "其他",
        link: "/others/"
      },
      {
        text: "每日记录",
        link: "/"
        // items: [{ text: "主页", link: "/" }],
      }
    ]
  }
};
