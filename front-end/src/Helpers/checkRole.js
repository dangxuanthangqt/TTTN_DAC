import jwtDecode from 'jwt-decode';
import { getAccessToken } from './localStorageService';

export const checkRole =()=>{
  let token = getAccessToken();
  let role = jwtDecode(token).data.role;

    return role;
}