const HOST = setupHost();

function setupHost() {
    switch (process.env.NODE_ENV) {
        case 'production':
            // return 'http://5826ed963900d612000138bd.mockapi.io/';
            return 'http://localhost:3000/';

        default:
            return '';
    }
}

function ApiService(url) {
    console.log('====================================');
    console.log('ApiService, HOST ', HOST);
    console.log('ApiService, url ', url);
    console.log('====================================');
    return fetch(HOST + url);
}

export default ApiService;
