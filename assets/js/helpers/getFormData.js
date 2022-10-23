import formJson from "url:~/assets/json/data.json" // Add json as static asset

export const getFormData = async () => {
    // await response of fetch call
    let response = await fetch(formJson);
    // only proceed once promise is resolved
    let data = await response.json();
    // only proceed once second promise is resolved
    return data;
}