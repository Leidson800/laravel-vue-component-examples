export function getTheme(themes, localCssClasses) {
    const currentTheme = window.appData.theme;
    const foundTheme = themes[currentTheme] ?? themes.theme1;
    return localCssClasses.concat(foundTheme);
};