const getPagesTotalColor = state => state.theme.theme.CHART_PAGES_TOTAL;
const getTitleBackground = state => state.theme.theme.TITLE_BACKGROUND;
const getMainTextColor = state => state.theme.theme.MAIN_TEXT;
const getSecondaryBackground = state => state.theme.theme.SECONDARY_BACKGROUND;

const themeSelectors = {
    getPagesTotalColor,
    getTitleBackground,
    getMainTextColor,
    getSecondaryBackground
};

export default themeSelectors;