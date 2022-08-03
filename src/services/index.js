import { config } from "./config";

/**
 * Esta funcion consume el api de github y retorna una lista de usuarios
 */
export const searchUsers = async (username) => {
  try {
    const response = await fetch(
      `${config.baseUrl}/search/users?q=${username}`
    );

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};
