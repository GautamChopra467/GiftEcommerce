import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, where, query, addDoc, doc, updateDoc } from 'firebase/firestore/lite';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import dummyData from './dummyData.json'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAoFhIzcePvnVsGPcLbcrXTOfoDLHVtDYI",
  authDomain: "hehe-ba5e1.firebaseapp.com",
  projectId: "hehe-ba5e1",
  storageBucket: "hehe-ba5e1.appspot.com",
  messagingSenderId: "849570640499",
  appId: "1:849570640499:web:6c8deb53a5b90baa7eb006",
  measurementId: "G-HXM7SCLF0T"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };


export async function signUp(email, password){
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const usersCollection = collection(db, 'Users');
    const userData = {
      userId: user.uid,
      name: '',
      email: email,
      dob: '',
      gender: '',
      mobileNumber: '',
      cart: [],
      wishlist: [],
      orderHistory: [],
      following: 0
    };
    await addDoc(usersCollection, userData);
    return user;
    console.log("1")
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

export async function getCartItems(userId) {
  console.log("2")
  const cartCol = collection(db, 'Users', userId, 'cart');
  const cartSnapshot = await getDocs(cartCol);
  const cartList = cartSnapshot.docs.map(doc => doc.data());
  return cartList;
}
export async function updateCartItemInDatabase(userId, updatedItem) {
  console.log("3")
  try {
    const userRef = doc(db, 'Users', userId);
    await updateDoc(userRef, {
      cart: updatedItem
    });
    console.log('Cart item updated in the database');
  } catch (error) {
    console.error('Error updating cart item in the database:', error);
    throw error;
  }
}
export async function addToCart(userId, item) {
  console.log("4")
  const userRef = db.collection('Users').doc(userId);
  await userRef.update({
    cart: [...item, ...userRef.cart]
  });
}
export async function removeFromCart(userId, itemId) {
  console.log("5")
  const userRef = db.collection('Users').doc(userId);
  await userRef.update({
    cart: userRef.cart.filter(item => item.productId !== itemId)
  });
}
export async function addToWishlist(userId, item) {
  console.log("6")
  const userRef = db.collection('Users').doc(userId);
  await userRef.update({
    wishlist: [...item, ...userRef.wishlist]
  });
}
export async function removeFromWishlist(userId, itemId) {
  console.log("7")
  const userRef = db.collection('Users').doc(userId);
  await userRef.update({
    wishlist: userRef.wishlist.filter(item => item.productId !== itemId)
  });
}
export async function addToOrderHistory(userId, item) {
  console.log("8")
  const userRef = db.collection('Users').doc(userId);
  await userRef.update({
    orderHistory: [...item, ...userRef.orderHistory]
  });
}
export async function removeFromOrderHistory(userId, orderId) {
  console.log("9")
  const userRef = db.collection('Users').doc(userId);
  await userRef.update({
    orderHistory: userRef.orderHistory.filter(item => item.orderId !== orderId)
  });
}

export async function getProductById(docId) {
  console.log("10")
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
  console.log("11")
  const prodCol = collection(db, 'Products');
  const prodSnapshot = await getDocs(prodCol);
  const prodList = prodSnapshot.docs.map(doc => doc.data());
  return prodList
}

export async function getOrders() {
  console.log("12")
  const prodCol = collection(db, 'Orders');
  const prodSnapshot = await getDocs(prodCol);
  const prodList = prodSnapshot.docs.map(doc => doc.data());
  return prodList
}

export async function getProductsByCategory(category) {
  console.log("13")
  const prodCol = collection(db, 'Products');
  let prodSnapshot;

  if (category) {
    const q = query(prodCol, where('category', '==', category));
    prodSnapshot = await getDocs(q);
  } else {
    prodSnapshot = await getDocs(prodCol);
  }

  const prodList = prodSnapshot.docs.map(doc => doc.data());
  return prodList;
}

