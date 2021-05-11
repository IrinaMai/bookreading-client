const getPagesTotalColor = state => state.theme.theme.CHART_PAGES_TOTAL;
const getTitleBackground = state => state.theme.theme.TITLE_BACKGROUND;

const themeSelectors = {
    getPagesTotalColor,
    getTitleBackground
};

export default themeSelectors;