import API_LOCAL from './Api-local';
import API_PROD from './Api-prod';
const hostname = window.location.hostname;
const port = window.location.port;
let isLocalApi = +port >= 5000;

export const API =
    (hostname === 'localhost' && isLocalApi) ? API_LOCAL : API_PROD
