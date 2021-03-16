import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3001/api/";

const getPublicContent = () => {
  return axios.get(API_URL + "test/all");
};

const getUserAccess = () => {
  return axios.get(API_URL + "test/user", { headers: authHeader() });
};

const getAdminAccess = () => {
  return axios.get(API_URL + "test/admin", { headers: authHeader() });
};

const getCharacters = (page) => {
  return axios
    .get(API_URL + `characters/${page}`, { headers: authHeader() })
}

const getCharacter = (id) => {
  return axios.get(API_URL + `character/${id}`, { headers: authHeader() });
}

const UserService = {
  getPublicContent,
  getUserAccess,
  getAdminAccess,
  getCharacters,
  getCharacter
};

export default UserService;
