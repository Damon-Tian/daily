module.exports = {
    base: '/dist/',
    title: 'personal practice',
    description: 'no description',
    themeConfig: {
        sidebar: 'auto',
        // {
        // '/weather/': ['', 'first', 'second'],
        // '/': [''],
        // },
        nav: [
            {
                text: "想知道天气吗",
                link: "/weather/",
            },
            {
                text: "工具",
                items: [{ text: "主页", link: "/" }],
            },
        ],
    }
}