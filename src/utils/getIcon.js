export const getIcon = (status) => {
    const weatherIcon = require(`../icons/${status}.png`);
    return weatherIcon;
};
