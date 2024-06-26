export const forgotPasswordService  = async (email)=> {
    const response = await fetch(`/api/reset-password`,{
        method: "POST",
        body: JSON.stringify(email),
        headers: {"CONTENT-TYPE": "application/json"}
    })
    const data = await response.json();
    console.log("dataa",data)
    return data;
}

export const accountDetailService  = async (body)=> {
    console.log("geee",body)
    const response =  await fetch("/api/update-account",{
        method : "PUT",
        body: JSON.stringify({
            name: body.name,
            email : body.email,
            password : body.password
        }),
        headers: {"CONTENT-TYPE" : "application/json"}
    })

    const data = await response.json();
    console.log(data)
    return data;
}