"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    let hour = date.getHours();
    let minute = date.getMinutes();
    const suffix = hour >= 12 ? 'pm' : 'am';
    hour %= 12;
    hour = hour ? hour : 12;
    const minuteString = minute < 10 ? '0' + minute : minute;
    return `${year}-${month}-${day} at ${hour}:${minuteString}${suffix}`;
}
exports.formatDate = formatDate;
//# sourceMappingURL=formatDate.js.map