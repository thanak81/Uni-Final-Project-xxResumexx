export const getAllCoverLetter = async () => {
  const res = await fetch("http://localhost:3000/api/cover-letter");
  const data = await res.json();

  return data.payload.coverLetter;
};
import { toast } from "react-toastify";

export const createCoverLetter = async (data) => {
  try{
    const res = await fetch("http://localhost:3000/api/cover-letter", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const createData = await res.json();
    toast.success("Cover letter created successfully", {
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
  }catch(error){
    toast.error(`There was an error creating your cover letter. Please try again ${error}`, {
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
  }
  
};



export const updateCoverLetter = async (data, id) => {
  const res = await fetch(`http://localhost:3000/api/cover-letter/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
  const updatedData = await res.json();
  return updatedData;
};

export const deleteCoverLetter = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/cover-letter/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
  } catch (error) {
    console.error("Error deleting cover letter:", error);
    throw error;
  }
};

export const getCoverLetterById = async (id) => {
  try {
    const data = await fetch(`http://localhost:3000/api/cover-letter/${id}`);
    const response = await data.json();
    return response;
  } catch (error) {
    console.error("Error creating resume:", error);
    throw error;
  }
};
