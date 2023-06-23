import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, where, query } from 'firebase/firestore/lite';
import dummyData from './dummyData.json'

const firebaseConfig = {
  apiKey: "AIzaSyBXmDZNYA4AuoCrfWBWoJEnG0cl6dw_OFc",
  authDomain: "scale-ccfa3.firebaseapp.com",
  projectId: "scale-ccfa3",
  storageBucket: "scale-ccfa3.appspot.com",
  messagingSenderId: "301440713060",
  appId: "1:301440713060:web:3c435b22d61630cc6e7a71",
  measurementId: "G-5E9VY9GDCF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getProductById(docId) {
  const prodCol = collection(db, 'Products');
  const q = query(prodCol, where('docId', '==', docId));
  const prodSnapshot = await getDocs(q);
  
  if (prodSnapshot.empty) {
    console.log('empty')
    return dummyData['Products'][0];
  }

  const prodDoc = prodSnapshot.docs[0];
  const prodObject = prodDoc.data();
  return prodObject;
}


export async function getProducts() {
  const prodCol = collection(db, 'Products');
  const prodSnapshot = await getDocs(prodCol);
  const prodList = prodSnapshot.docs.map(doc => doc.data());
  return prodList
}

export async function getOrders() {
  const prodCol = collection(db, 'Orders');
  const prodSnapshot = await getDocs(prodCol);
  const prodList = prodSnapshot.docs.map(doc => doc.data());
  return prodList
}
