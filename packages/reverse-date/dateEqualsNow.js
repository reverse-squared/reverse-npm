"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function dateEqualsNow(month, date, year) {
    const now = new Date();
    const nowMonth = now.getMonth() + 1;
    const nowDate = now.getDate();
    const nowYear = now.getFullYear();
    return nowMonth === month && nowDate === date && nowYear === year;
}
exports.dateEqualsNow = dateEqualsNow;
//# sourceMappingURL=dateEqualsNow.js.map