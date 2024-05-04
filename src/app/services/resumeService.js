

export const getAllResume = async (req) => {
  const data = await fetch("http://localhost:3000/api/resume");
  const response = await data.json();
  return response.payload.resume;
};

export const createResume = async (data) => {
  try {
    const response = await fetch("http://localhost:3000/api/resume", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const createData = await response.json();
    console.log("response create", response);
    return createData;
  } catch (error) {
    console.error("Error creating resume:", error);
    throw error;
  }
};

export const deleteResume = async (id) => {
  try {
    const data = await fetch(`http://localhost:3000/api/resume/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const response = await data.json();
  } catch (error) {
    console.error("Error deleting resume:", error);
    throw error;
  }
};

export const getResumeById = async (id) => {
  try {
    const data = await fetch(`http://localhost:3000/api/resume/${id}`);
    const response = await data.json();
    return response;
  } catch (error) {
    console.error("Error creating resume:", error);
    throw error;
  }
};

export const updateResume = async (request, id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/resume/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    });
    const updatedData = await response.json();
    console.log("updatedDate", updatedData);
    return updatedData;
  } catch (error) {
    console.error("Error creating resume:", error);

    throw error;
  }
};

