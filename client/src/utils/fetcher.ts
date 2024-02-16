import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/`,
  headers: {
    'Content-Type': 'application/json'
  },
});

export const getFetcher = async <T>(url: string): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api.get<T>(url);
    return response.data;
  } catch (error) {
    // Gérer les erreurs de requête ici
    throw new Error('Erreur lors de la requête GET');
  }
};

export const postFetcher = async <T>(url: string, data: any): Promise<T> => {
  try{
    const response: AxiosResponse<T> = await api.post<T>(url, data);
    return response.data
  } catch (error) {
    console.log(error)
    throw new Error('Erreur lors de la requête POST');
  }
};

export const putFetcher = async <T>(url: string, data: any): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api.put<T>(url, data);
    return response.data
  } catch (error) {
    console.log(error)
    throw new Error('Erreur lors de la requête PUT');
  }
}

export const deleteFetcher = async <T>(url: string): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api.delete(url);
    return response.data
  } catch (error) {
    console.log(error)
    throw new Error('Erreur lors de la requête DELETE');
  }
}
