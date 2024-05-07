import { appEnvs, CURRENT_ENV } from "../config/appEnvs";

const protocol = "http";
const ip = "localhost";
const port = "8080";
const version = "v1";
const prefix = "app";
const mainUrl = CURRENT_ENV === appEnvs.DEVELOPMENT ? ip : ip;
const mainUrlDev = `${protocol}://${mainUrl}:${port}/${prefix}/${version}`;
const webSocketConnectionUrl = `ws://${ip}:${port}/${prefix}/gs-guide-websocket`;

const endpoints = {
  webSocketConnectionUrl: webSocketConnectionUrl,
  login: `${mainUrlDev}/auth/login`,
  signUp: `${mainUrlDev}/auth/sign-up`,
  loginCheck: `${mainUrlDev}/auth/login-check`,
  logout: `${mainUrlDev}/auth/logout`,
  getChatList: `${mainUrlDev}/chat/get-chat-list`,
  getAllMessages: `${mainUrlDev}/chat/get-all-messages`,
};

export default endpoints;
