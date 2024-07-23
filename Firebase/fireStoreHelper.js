import { collection, addDoc } from "firebase/firestore"; 
import { database } from "./firebaseSetup";
import { doc, deleteDoc } from "firebase/firestore"; 
import {updateDoc} from 'firebase/firestore';

export async function writeToDB(item,collectionName) {
	try {
	     await addDoc(collection(database, collectionName), item);
	  }
	catch (err) {
	    console.log(err)
	  }
	}

    export async function deleteFromDB(id, collectionName) {
		try { 
		  await deleteDoc(doc(database, collectionName, id));
		}
		catch (err) {
		  console.log(err)
		}
	  }


	
	  export async function updateDB(id, collectionName) {
		
		try {
			const goalRef = doc(database, collectionName, id);
			await updateDoc(goalRef, { warning: true });// use this for now
		}
		catch (err) {
		  console.log(err)
		}
	  }