"use server";

// * Axios
import axios from "axios";

// * Models
import { MealAnalysisResponse } from "@/shared/models/meal-analysis.models";

export async function analyzeMeal(
  imageFile: File
): Promise<MealAnalysisResponse> {
  const formData = new FormData();
  formData.append("", imageFile);

  console.log("Variable de Entorno: ", process.env.API_URL);

  const response = await axios.post<MealAnalysisResponse>(
    `${process.env.API_URL}/webhook/meal-analysis`, // Variable de entorno
    formData,
    {
      headers: {
        typ: process.env.TYP,
        alg: process.env.ALG,
        kid: process.env.KID, // Variable de entorno
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`, // Variable de entorno
      },
    }
  );

  return response.data;
}
