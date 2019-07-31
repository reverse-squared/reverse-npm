"use strict";
function dateEqualsNow(month, date, year) {
    const now = new Date();
    const nowMonth = now.getMonth() + 1;
    const nowDate = now.getDate();
    const nowYear = now.getFullYear();
    return nowMonth === month && nowDate === date && nowYear === year;
}
module.exports = dateEqualsNow;
//# sourceMappingURL=dateEqualsNow.js.map