import React, { useState, createContext } from "react";

import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  initializeAuth,
  getAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
const firebaseConfig = {
  apiKey: "AIzaSyAA-Qx7VnR_J0JxdUGwoVkwuRgqLDkXBto",
  authDomain: "mealstogo-f5e57.firebaseapp.com",
  projectId: "mealstogo-f5e57",
  storageBucket: "mealstogo-f5e57.appspot.com",
  messagingSenderId: "982907915056",
  appId: "1:982907915056:web:1920c92241b925f0de56f5",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const loginRequest = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const registerRequest = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
