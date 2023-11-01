const AWS = require('aws-sdk');

    
// AWS S3 configurations
const awsAccessKey = 'XYZ'
const awsSecretKey = 'XYZ'
const awsBucketName = 'abdbkt1'

// AWS SES configurations
const awsSesRegion = 'us-east-1';
const awsSenderEmail = 'XYZ@gmail.com';

function s3bucket(){

const s3 = new AWS.S3({
accessKeyId: awsAccessKey,
secretAccessKey: awsSecretKey
});
return s3
}
module.exports = {awsAccessKey,awsSecretKey,awsBucketName,awsSesRegion,awsSenderEmail}
module.exports = s3bucket()
