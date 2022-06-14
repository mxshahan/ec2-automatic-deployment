# GitHub/EC2 Instance | Automatic Deployment using GitHub Action

This is a simple express server where the main focus is to deploy application in AWS EC2 instance automatically. 

## prerequisition
We need few things to know to deploy application automatically in EC2 or any other cloud server

- Github account
- Cloud server (AWS, Digital Ocean etc)
- Any application (I used nodejs-express server)
- Use of CLI

So let's dive in

The steps that we will follow to reach our goal

- Create one ec2 instance in aws console
- Install nodejs in aws 
- Create a github repository
- Push our code in git repo
- Setup GitHub Workflow file
- Setup Action Runners
- Connect Action Runner with ec2 instance
- Run Action Runner

...Wola we have completed our task