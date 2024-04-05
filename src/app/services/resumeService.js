export const getAllResume =async  () => {
    const data = await fetch("http://localhost:3000/api/resume");
    const response = await data.json();

    return response
}
