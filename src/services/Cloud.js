import { initializeApp } from "firebase/app";

export class CloudService {
    constructor() {
        const firebaseConfig = {
            apiKey: process.env.API_KEY,
            authDomain: "online-cinema-99215.firebaseapp.com",
            projectId: "online-cinema-99215",
            storageBucket: "online-cinema-99215.appspot.com",
            messagingSenderId: "427356881162",
            appId: process.env.APP_ID,
            measurementId: "G-NWJGG6GZYP"
        };

        const app = initializeApp(firebaseConfig);
    }
}

export const cloudService = new CloudService();