export const getAllResume =async  () => {
    const data = await fetch("http://localhost:3000/api/resume");
    const response = await data.json();
    return response
}

export const createResume = async (data)=> {
    try {
        const createData = await fetch("http://localhost:3000/api/resume", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-Type" : "application/json"}
        });
        const response = await createData.json();
        console.log("response create",response);
        return response;
    } catch (error) {
        console.error("Error creating resume:", error);
        throw error; // Rethrow the error to be handled by the caller
    }
}
