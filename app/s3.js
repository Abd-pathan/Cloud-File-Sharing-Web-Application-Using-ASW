const AWS = require('aws-sdk');

    
// AWS S3 configurations
const awsAccessKey = 'AKIA55K7XGY56H4ERN5T'
const awsSecretKey = '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'
const awsBucketName = 'abdbkt1'

// AWS SES configurations
const awsSesRegion = 'us-east-1';
const awsSenderEmail = 'a25353342@gmail.com';

function s3bucket(){

const s3 = new AWS.S3({
accessKeyId: awsAccessKey,
secretAccessKey: awsSecretKey
});
return s3
}
module.exports = {awsAccessKey,awsSecretKey,awsBucketName,awsSesRegion,awsSenderEmail}
module.exports = s3bucket()