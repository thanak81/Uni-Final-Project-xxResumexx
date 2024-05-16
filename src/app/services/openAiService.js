export const postData = async (data) => {
    const response = await fetch(`http://localhost:3000/api/ai`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify("generate a cover letter for web developer")
    })

    const apidata = await response.json()

    return apidata;
}