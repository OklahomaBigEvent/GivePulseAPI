                    // created by Nick Pranske 214-415-6134
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
let offset = 0; // THIS ALLOWS YOU TO LOOP THROUGH AND CALL IT SEVERAL TIMES

// Construct the URL for the requests
let registrationUrl = baseUrl + registrationEndpoint + "?limit=" + limit + "&offset=" + offset + "&include_administrative_fields=1";
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
const groupSheet = ss.getSheetByName("Groups");
const volSheet = ss.getSheetByName("Volunteers");
const rosterSheet = ss.getSheetByName("Group Rosters");

///////////////////////////////// Fetch actual Data //////////////////////////////////

function getGivePulseData() {

  // Find total number of instances
  const response = UrlFetchApp.fetch(registrationUrl, requestOptions); // change first parameter according to the data you need to pull
  const responseData = JSON.parse(response.getContentText());
  const total = Number(responseData.total);
  var allResponseData = [];
  var groupLeaderResponses = [];
  var volResponses = [];

  // Loop through while increasing the offset and storing results
  while (allResponseData.length < total){
    let registrationUrl = baseUrl + registrationEndpoint + "?limit=" + limit + "&offset=" + offset + "&include_administrative_fields=1";
    const response = UrlFetchApp.fetch(registrationUrl, requestOptions); // change first parameter according to the data you need to pull
    const responseData = JSON.parse(response.getContentText());
    allResponseData = allResponseData.concat(responseData.results);
    offset += 50;
  }

  // Loop through all responses and get only the registrations you need BASED ON EVENT ID

  // THIS GETS ALL GROUP LEADERS
  for(i = 0; i < allResponseData.length; i++){
    if(allResponseData[i].event_id == 382614 /* CHANGE THIS TO CHANGE THE EVENT YOU NEED */ ){
      groupLeaderResponses = groupLeaderResponses.concat(allResponseData[i]);
    }
  }

  // THIS GETS ALL VOLUNTEERS
  for(i = 0; i < allResponseData.length; i++){
    if(allResponseData[i].event_id == 382615 /* CHANGE THIS TO CHANGE THE EVENT YOU NEED */ ){
      volResponses = volResponses.concat(allResponseData[i]);
    }
  }
Logger.log(volResponses[0].user.administrative_fields[0]);
  // Paste values onto sheet
  // groupLeaderResponses
}
