"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
        user: 'klara.test@iths.se',
        pass: 'Testlösen',
    },
    tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false,
    },
});
const mailOptions = {
    from: 'klara.bryntesson@iths.se',
    to: 'k_bryntesson@hotmail.com',
    subject: 'Ny kontakt adderad!',
    text: 'En ny kontakt har lagts till i din kontaktlista',
};
function sendMail() {
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
        }
        else {
            console.log('Mailen har skickat:' + info.response);
        }
    });
}
exports.sendMail = sendMail;
