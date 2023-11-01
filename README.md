# Cloud File Sharing Web Application with AWS
This project involved developing a robust file sharing web application using AWS services including S3, and SES.

The application provides user authentication using Amazon Cognito to allow secure user access. Authenticated users can upload files to S3 buckets and share them by entering email addresses of recipients.

The app generates pre-signed URLs for any files uploaded to S3 buckets. These URLs allow temporary access for recipients to download shared files.

Once a user shares a file, the application uses Amazon SES to send email to all recipient addresses. The email contains a link to download the shared file using the pre-signed URL.

The frontend is built using Node.js and JavaScript to provide an intuitive interface for uploading, sharing files, and viewing share history.

# Key technologies used:

AWS S3 for storage
AWS SES for sending notification emails
Node.js for server-side coding
JavaScript for frontend

# The app demonstrates strong proficiency in:

Building secure web applications with user authentication
Implementing serverless architecture using AWS services
Developing practical solutions using Node.js and JavaScript
Integrating S3 and SESfor storage, mailing and security
Generating pre-signed URLs for temporary file access

Overall, this project highlights skills in full-stack development, security, cloud services, and delivers a working solution for seamless file sharing.
