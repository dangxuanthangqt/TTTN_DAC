import jwtDecode from 'jwt-decode';

export const checkRole =(token)=>{
  //  let token = getAccessToken();
  let role = jwtDecode(token).role;

    return role;
}