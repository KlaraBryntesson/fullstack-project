import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
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
} as nodemailer.TransportOptions);

interface MailOptions {
  from: string;
  to: string;
  subject: string;
  text: string;
}

const mailOptions: MailOptions = {
  from: 'klara.bryntesson@iths.se',
  to: 'k_bryntesson@hotmail.com',
  subject: 'Ny kontakt adderad!',
  text: 'En ny kontakt har lagts till i din kontaktlista',
};

export function sendMail() {
  transporter.sendMail(
    mailOptions,
    (error, info: nodemailer.SentMessageInfo) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Mailen har skickat:' + info.response);
      }
    },
  );
}
