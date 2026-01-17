export function basicAuthHeader(user, pass) {
  return "Basic " + btoa(user + ":" + pass);
}
