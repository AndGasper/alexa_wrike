require('dotenv').config();

const Alexa = require('alexa-sdk');
const https = require('https');

const APP_ID = undefined;

const languageStrings = {
    'en': {
        translaition: {}
    }
}

function Wrike() {
    this.getAuthorizationCode = function() {


    }

    this.getOAuthToken = function() {
        // should take response from getAuthorizationCode for POST request to get OAuthToken
        // Should make use of Network 

    }
}

function Network() {
    this.httpsGet = function(request) {
        return https.request(options);
    }
}

const wrike = new Wrike();
const network = new Network();


function httpsGet(url, callback) {
    const options = {
        host: '',
        port: 443,
        path: '/',
        method: 'GET'
    };
    let wrikeResponse = ''; // The httpsGet method should have no concept of the wrike Response 
    

    const request = https.request(options, (response) => {
        response.setEncoding('utf8');
        response.on('end', () => {
            callback(wrikeResponse); 
        })
    });
}

// Some type of class/prototype for network requests that has the 


const handlers = {
    'LaunchRequest': function () {
        this.emit(':tell', "You can say things like, Ask Wrike: what are my tasks for today?");
    },
    'GetTodaysWrikeTasks': function () {
        httpsGet('todaysTasks', (message) => {
        this.emit(':tell', message);
        });
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = "You can say things like, Ask Wrike: what are my tasks for today?";
        this.emit(':tell', speechOutput);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', "Goodbye");
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', "Goodbye");
    },
};

exports.handler = function(event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};