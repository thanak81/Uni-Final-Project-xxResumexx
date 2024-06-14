

export const getAllResume = async (req) => {
  const data = await fetch(`${process.env.NEXTAUTH_URL}/api/resume`);
  const response = await data.json();
  return response.payload.resume;
};
import { toast } from "react-toastify";

export const createResume = async (data) => {

  try {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/resume`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const createData = await response.json();
    toast.success("Resume created successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Bounce,
    });
    return createData;
  } catch (error) {
    // console.error("Error creating resume:", error);
    toast.error(`There an error while creating a resume ${error}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Bounce,
    });
    throw error;
  }
};

export const deleteResume = async (id) => {
  try {
    const data = await fetch(`${process.env.NEXTAUTH_URL}/api/resume/${id}`, {
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
    const data = await fetch(`${process.env.NEXTAUTH_URL}/api/resume/${id}`);
    const response = await data.json();
    return response;
  } catch (error) {
    console.error("Error creating resume:", error);
    throw error;
  }
};

export const updateResume = async (request, id) => {
  try {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/resume/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    });
    const updatedData = await response.json();
    return updatedData;
  } catch (error) {
    console.error("Error creating resume:", error);

    throw error;
  }
};

