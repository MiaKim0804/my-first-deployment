//This would contain some configuration details
const env = process.env.REACT_APP_ENV
//environment variables are variables this is used by the application itself
//details such as secret keys/environment are part of the env't variables
//in react, environment variables start with REACT_APP_

let config = {
    baseURL:'http://localhost'
}

switch (env.toUpperCase()) {
    case 'STAGE':
        config.baseURL = 'http://stage.skillsunion.com'
        break;
    case 'PRODUCTION':
        config.baseURL = 'http://skillsunion.com'
        break;
}

export default config;