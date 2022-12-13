import { initializeApp } from "firebase/app";

export class CloudService {
  constructor() {
    this.config = {
      apiKey: process.env.API_KEY,
      authDomain: "online-cinema-de2f7.firebaseapp.com",
      projectId: "online-cinema-de2f7",
      storageBucket: "online-cinema-de2f7.appspot.com",
      messagingSenderId: "116442762552",
      appId: process.env.APP_ID
    };

    this.app = initializeApp(this.config);
  }
}

export const cloudService = new CloudService();
