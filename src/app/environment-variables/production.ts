import { EnvironmentVariables } from './environment-variables.interface';

export const prodVariables: EnvironmentVariables = {
  API_URL: "http://qa-api.voyageframework.com/api/v1",
  SERVER_URL: "http://qa-api.voyageframework.com",
  OAUTH_REDIRECT_URL: "http://localhost:3000",
  OAUTH_CLIENT_ID: "client-super"
};