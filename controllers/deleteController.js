const AWS = require('aws-sdk');
const s3 = require('../app/s3')

AWS.config.update({
  accessKeyId: 'XYZ',
  secretAccessKey: 'XYZ',
  region: 'us-east-1', 
});

module.exports.Controller = async (req,res)=>
{
        
    if (!req.session.authenticated) {
      return res.status(401).send('Go To Login Page');
    }
    try {
       
        const bktName = 'abdbkt1'; 
        const objects = await s3.listObjectsV2({ Bucket: bktName }).promise();
      
        if (objects.Contents.length === 0) {
            return res.status(200).send('Nothing to delete in Bucket');
        }
  
        const keys = objects.Contents.map((obj) => ({ Key: obj.Key }));
        await s3.deleteObjects({ Bucket: bktName, Delete: { Objects: keys } }).promise();
      
        return res.status(200).send('Bucket is Emptied');
    } catch (err) {
      console.error(`Error: ${err.message}`);
      return res.status(500).send('Error');
      }
  }
  
    
    

      

