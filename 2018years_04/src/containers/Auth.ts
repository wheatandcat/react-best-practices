import fetch from "node-fetch";

export interface AuthInterface {
  getToken: () => string;
  signedIn: () => boolean;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
}

export default class Auth implements AuthInterface {
  getToken = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("No id token found");
    }

    return token;
  };

  signedIn = () => {
    return !!localStorage.getItem("token");
  };

  signIn = async (email, password) => {
    const response = await fetch("http://localhost:8080/sigin", {
      mode: "cors",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    if (!response.ok) {
      return;
    }

    const { token } = await response.json();

    localStorage.setItem("token", token);
  };

  signOut = async () => {
    await localStorage.removeItem("token");
  };
}
