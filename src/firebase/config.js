import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
	apiKey: "AIzaSyB2pwiwnshCa1HSO8RP5z5xfQfwsfixnlg",
	authDomain: "church-management-system-30295.firebaseapp.com",
	projectId: "church-management-system-30295",
	storageBucket: "church-management-system-30295.appspot.com",
	messagingSenderId: "122830565156",
	appId: "1:122830565156:web:9bed3f013fb4b0352d4db1",
}

// Initialize Firebase
const firebasApp = initializeApp(firebaseConfig)

// export const mediaStorage = getStorage(firebasApp)
export const mediaStorage = getStorage(firebasApp)
