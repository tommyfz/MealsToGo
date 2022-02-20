import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAMsDIit33wjCnEEQqZXMShxUcNn-e8BIA",
  authDomain: "mealstogo-47289.firebaseapp.com",
  projectId: "mealstogo-47289",
  storageBucket: "mealstogo-47289.appspot.com",
  messagingSenderId: "458230622123",
  appId: "1:458230622123:web:a36592ac1492f7ed66d4ee",
};

const apps = getApps();

if (!apps.length) {
  initializeApp(firebaseConfig);
}
