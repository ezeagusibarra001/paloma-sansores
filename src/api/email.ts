import axios from "axios";

const endpoint =
  "https://script.google.com/macros/s/AKfycbziHt7OwUzJQFUaEnG487auLos9lJC237UPVlPgOnZoOGC1qg68zXbguIfBUXtDebfNVg/exec";

export const sendEmail = async (email: string, name: string) => {
  var formdata = new FormData();
  formdata.set("name", name);
  formdata.set("email", email);
  try {
    const response = await axios.post(endpoint, formdata);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
