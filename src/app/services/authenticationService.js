export const forgotPasswordService  = async (email)=> {
    const response = await fetch(`/api/reset-password`,{
        method: "POST",
        body: JSON.stringify(email),
        headers: {"CONTENT-TYPE": "application/json"}
    })
console.log(response)
    const data = await response.json();
    console.log("dataa",data)
    return data;
}