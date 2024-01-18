const { authenticateWithGoogle } = require('./auth');
const { checkForNewEmails } = require('./emailChecker');
const { sendReply } = require('./emailSender');
const { addLabelAndMove } = require('./emailLabeler');
const express = require("express");
const app = express();


function startApp(auth) {
    setInterval(async() => {
        const emails = await checkForNewEmails(auth);
        
        for (const singleEmailObj of emails) {
            const {email,headers} = singleEmailObj;
            await sendReply(auth, email,headers);
            await addLabelAndMove(auth, email, 'AutoReplyLabel');
        }
    }, Math.floor(Math.random() * (120000 - 45000 + 1)) + 45000);
}

app.listen(8000, () => {
    console.log(`Example is running in http://localhost:8000`);
    authenticateWithGoogle().then(data => startApp(data));

  });
  


app.get("/new",async(req,res) => {
    res.send(
        `<html>
            <head>
            <link rel="stylesheet" type="text/css" href="/styles.css">
            </head>
            <body>
            <div class="container">
                Your code is -- ${req.query.code}
            </div>
            </body>
        </html>`
    )
})

// app.get("/authenticate",async (req,res) => {
//     checkToken().then(data => {
//         if(data.success){
//             authenticateWithGoogle().then(data => startApp(data));
//             res.send(
//                 `<html>
//                     <head>
//                     <link rel="stylesheet" type="text/css" href="/styles.css">
//                     </head>
//                     <body>
//                     <div class="container">
//                         Verified!!
//                     </div>
//                     </body>
//                 </html>`
//             )
//         }else{
//             res.send(
//                 `<html>
//                     <head>
//                     <link rel="stylesheet" type="text/css" href="/styles.css">
//                     </head>
//                     <body>
//                     <div class="container">
//                         <h1>Welcome to Your Gmail Auto-Reply App</h1>
//                         <p>An app for auto-replying to your Gmail when you are on vacation.</p>
//                         <a href="${data.authUrl}">Authenticate with Gmail</a>
//                     </div>
//                     </body>
//                 </html>`
//             )
//         }
//     });
// })

// app.get('/' ,async (req,res)=>{
//     res.send(
//         `<html>
//         <head>
//           <link rel="stylesheet" type="text/css" href="/styles.css">
//         </head>
//         <body>
//           <div class="container">
//             <h1>Welcome to Your Gmail Auto-Reply App</h1>
//             <p>An app for auto-replying to your Gmail when you are on vacation.</p>
//             <form action="/authenticate" method="get">
//               <button type="submit">Authenticate with Gmail</button>
//             </form>
//           </div>
//         </body>
//       </html>`
//     )
// })

