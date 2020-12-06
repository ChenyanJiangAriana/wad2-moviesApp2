// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";
import "./login.css";
import React,{useState,useEffect} from "react";
// Add the Firebase services that you want to use
import "firebase/auth";

const Login =() =>