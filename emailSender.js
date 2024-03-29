const { google } = require('googleapis');
const gmail = google.gmail('v1');

const personalDetails = require("./details.js");
// console.log(personalDetails)
async function sendReply(auth, email,headers) {
    try {

        let details ={};
        headers.forEach(item => {
            if(item.name === "From"){
                details.From = item.value;
            }
            if(item.name === "Subject"){
                details.Subject = item.value;
            }
        })
        // console.log(details);
        const messageParts = [
            `From: ${personalDetails.YourEmail}`, // Your Gmail address
            'To: ' + details.From,
            'Content-Type: text/plain; charset=utf-8',
            'Subject: Re: ' + details.Subject,
            '',
            'Hello,',
            'Thank you for your email. I am currently out of the office and will get back to you as soon as possible.',
            '',
            'Best regards,',
            `${personalDetails.YourName}`
        ];

        const rawMessage = messageParts.join('\n');
        const encodedMessage = Buffer.from(rawMessage).toString('base64');

        await gmail.users.messages.send({
            auth: auth,
            userId: 'me',
            resource: {
                raw: encodedMessage
            }
        });

        console.log('Reply sent successfully.');
    } catch (error) {
        console.error('Error sending reply:', error.message);
    }
}

module.exports = {
    sendReply
}
// Note: You need to replace 'your-email@gmail.com' and 'Your Name' with your actual Gmail address and name.