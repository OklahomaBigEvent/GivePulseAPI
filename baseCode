///////// THIS IS THE BASE CODE TO PULL ALL GIVEPULSE DATA. IT NEEDS TO BE CHANGED FOR EACH USE //////////
                          // Created by Nick Pranske 214-415-6134 (2023)
// Define your variables
const basicToken = "Basic RDRFVzd2aFd1cFVVZnd0S0VOaU1RcWdwRXJ1MUNsRDQ6VkM0dHdTcVpqTE50eFRqREdrNzFVNU5NSU9SZUQ5bno6YmlnZXZlbnQlNDBvdS5lZHU6VEJFMjAyMyUyMQ==";
const baseUrl = "https://api2.givepulse.com/";
const authEndpoint = "auth";
const authHeaders = {
Authorization: basicToken,
};
// Construct the URL for the authentication request
const authUrl = baseUrl + authEndpoint;
// Set the options for the initial request
const authOptions = {
headers: authHeaders,
method: "GET",
};
// Perform the authentication request
const authResponse = UrlFetchApp.fetch(authUrl, authOptions);
// Extract the bearer token from the authentication response
const authResponseData = JSON.parse(authResponse.getContentText());
const bearerToken = authResponseData.token;
// Define endpoints
const registrationEndpoint = "registrations";
const eventEndpoint = "events";
const userEndpoint = "users";

const limit = 50; // THIS IS THE MAX NUMBER OF REQUEST PER CALL. YOU CAN DECREASE FOR TESTING PURPOSES
const offset = 0; // THIS ALLOWS YOU TO LOOP THROUGH AND CALL IT SEVERAL TIMES

// Construct the URL for the requests
let registrationUrl = baseUrl + registrationEndpoint + "?limit=" + limit + "&offset=" + offset;
let eventUrl = baseUrl + eventEndpoint + "?limit=" + limit + "&offset=" + offset;
let userUrl = baseUrl + userEndpoint + "?limit=" + limit + "&offset=" + offset;
// Create the authorization headers for the registration request
const bearerAuthorization = {
Authorization: "Bearer " + bearerToken,
};
// Set the options for the requests
const requestOptions = {
headers: bearerAuthorization,
method: "GET",
};

// Define the spreadsheet and sheets
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getActiveSheet();

///////////////////////////////// Fetch actual Data //////////////////////////////////

function getGivePulseData() {

// NEXT STEP IS TO FIGURE OUT HOW TO LOOP THROUGH AND GET DIFFERENT SETS OF RESULTS

const response = UrlFetchApp.fetch(eventUrl, requestOptions); // change first parameter according to the data you need to pull
const responseData = JSON.parse(response.getContentText());
//Logger.log(Object.getOwnPropertyNames(responseData.results[0])); // FOR DEBUGGING
}
