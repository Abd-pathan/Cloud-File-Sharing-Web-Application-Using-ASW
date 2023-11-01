const fs =require('fs')
const AWS = require('aws-sdk');
const multer = require('multer');
  const FileData = require('../app/dbConfig').FileData; 
const File = require('../app/models');
const s3 = require('../app/s3')
  const upload = multer({ dest: 'uploads/' });

 const awsSesRegion = 'us-east-1';
 const awsSenderEmail = 'a25353342@gmail.com';

   module.exports.Controller= async(req,res) =>
{
      if (!req.session.authenticated) {
      return res.status(401).send('Go To Login Page');
               }
  
    const recipientEmails = req.body.recipientEmail.split(',').map(email => email.trim());
  
    if (!req.file) {
      return res.status(400).send('Select Atleast One File');
    }
  
      const s3par = {
      Bucket: 'abdbkt1',
      Key: req.file.originalname,
      Body: fs.createReadStream(req.file.path)
    };
  
    
  async function sendEmailWithLink(fileUrl, recipientEmails) {
    const subject = "Link to Download the Uploaded File";
    const body = `Please find the link to download the uploaded file: ${fileUrl}`;
  
    const Mailpara = {
      Destination: {
        ToAddresses: recipientEmails
      },
      Message: {
        Body: {
          Text: {
            Data: body
          }
        },
        Subject: {
          Data: subject
        }
      },
      Source: s3.awsSenderEmail,
    };

    const sesEmail = new AWS.SES({ region: s3.awsSesRegion , credentials: { accessKeyId: s3.awsAccessKey, secretAccessKey: s3.awsSecretKey} });
  
    sesEmail.sendEmail(Mailpara, (err, data) => {
      if (err) {
        console.error(`Error: ${err.message}`);
        } else {
        console.log(`Email Sned `);
        }
    });
  }
    s3.upload(s3par,async(err, data) => {
      if (err) {
        return res.status(500).send(`Error: ${err.message}`);
      }
    
           const fileUrl = data.Location;
    
      var data = s3.upload(s3par).promise(); 
      FileData.create({ fileName: req.file.originalname })
      .then(() => {
        sendEmailWithLink(fileUrl, recipientEmails); 
        res.redirect('/delete')
      })
      .catch((dbErr) => {
        console.error(`Error: ${dbErr.message}`);
        res.status(500).send(`Error`);
      });
    })
  
  
  
}