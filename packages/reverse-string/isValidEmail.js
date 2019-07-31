"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isValidEmail(email) {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email);
}
exports.isValidEmail = isValidEmail;
//# sourceMappingURL=isValidEmail.js.map