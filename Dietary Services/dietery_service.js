let userRole="employee";
if (userRole === "employee") {
    accessLevel = "full access granted";
} else if (userRole === "member") {
    accessLevel = "full access granted";
}else if(userRole==="subscriber"){
    accessLevel="partial access granted";
}else {
    accessLevel = "No access granted subscribe first";
}
console.log(accessLevel);
let isLoggedIn = true;
let userMessage;
if (isLoggedIn) {
    if (userRole === "employee") {
        userMessage = "Welcome, Employee!";
    } else if(userRole==="member") {
        userMessage = "Welcome, Enrolled member!";
    }else{
        userMessage="Welcome, Subscriber!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);
let userType = "subscriber";
let userCategory;
switch (userType) {
    case "employee":
        userCategory = "Employee";
        break;
    case "member":
        userCategory = "Member";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);