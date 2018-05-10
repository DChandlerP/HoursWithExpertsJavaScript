const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function mediaRequest(url, type) {
    const xml = new XMLHttpRequest();
    xml.open("GET", url , true);
    xml.addEventListener("load", function() {
        console.log(xml.responseText);
    });
    xml.setRequestHeader("accept", type);
    xml.send(null);
}

const url = "http://eloquentjavascript.net/author";
const types = {plain: "text/plain", html: "text/html", json: "application/json", rainbows: "application/rainbows+unicorns"};

mediaRequest(url, types.html);
mediaRequest(url, types.json);
mediaRequest(url, types.plain);
mediaRequest(url, types.rainbows);
