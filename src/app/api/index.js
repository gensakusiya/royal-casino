// @flow

const ROOT_URI = "http://testappslab.ru:8001";

type AuthData = {
  uid: string,
  username: string,
  secret: string,
  balance: number
};

class Api {
  auth = (data: AuthData): fetch => {
    return fetch(`${ROOT_URI}/api/partners/auth`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json());
  };

  getFrameLink = (code: string): string =>
    `${ROOT_URI}/?code=${code}&lang=ru&currency=usd&mirror=true`;
}

const api: Api = new Api();

export default api;
export type { Api };
