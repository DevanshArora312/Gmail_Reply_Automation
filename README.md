﻿# Gmail Reply Automation

An application for automating email replies when you're on vacation using Gmail's API.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

## Introduction

This project is a web application that allows you to automate email replies when you're on vacation. It integrates with Gmail's API to detect and reply to unread emails in your inbox.

## Features

- Gmail API integration for email processing.
- Automatic labeling of vacation-related emails.
- Customizable vacation reply messages.
- Scheduled email checking and replies.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your system.
- A Gmail account for API authentication.
- Gmail API credentials (credentials.json) for authentication. You can obtain these by setting up a project in the Google Developer Console.

## Installation

1. Clone the repository:

   ```shell
   git clone [https://github.com/aaaa760/openinapp.git](https://github.com/DevanshArora312/Gmail_Reply_Automation.git)
   cd Gmail_Reply_Automation
   npm install


 ## Usage

   
1. Store your Gmail API info in `credentials.json` file.
2. Start the application
```
   node app.js
```
3. For first usage visit the link in terminal to initiate the Gmail API authentication process and create a token.json file.
4. Make sure to add your email and name in `details.js` file with format
   ```
   const YourEmail = "Your-Email@gmail.com"
   const YourName = "Your Name"
   
   module.exports = {YourEmail,YourName} 
   ```
6. Enjoy your vacation without worrying about email replies!

