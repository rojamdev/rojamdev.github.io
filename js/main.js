// Fetch JSON file
async function fetchJSON(filename) {
    try {
        const response = await fetch(filename, {
            method: "GET",
            credentials: "same-origin"
        });
        const jsonObject = await response.json();
        console.log("Received JSON file:", filename)
        return jsonObject;
    } catch (error) {
        console.error(error);
    }
}


// Constants
const data = fetchJSON("data.json");

console.log(data)

console.log("Hello World");