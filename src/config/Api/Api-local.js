const protocol = 'http';
const host = 'localhost';
const port = '4000';
const trailUrl = 'api';

const endpoint = `${protocol}://${host}${(port ? ':' + port : '')}`;
// const endpoint = `${protocol}://${host}${(port ? ':' + port : '')}/${trailUrl}`;

export default {
    host: host,
    apiUrl: trailUrl,
    endpoint: endpoint,
};