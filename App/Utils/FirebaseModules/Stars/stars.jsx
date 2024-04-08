import { db } from '../../firebase-config'
import { collection, getDocs, updateDoc, increment } from 'firebase/firestore'

const starsRef = collection(db, 'Stars')

const getStarsCount = async () => {
  const starsDocSnap = await getDocs(starsRef);
  console.log("Stars collection data:", starsDocSnap.docs[0].data().f1);
  return starsDocSnap;
};

const incrementStars = async () => {
  const docSnap = await getDocs(starsRef);
  if (docSnap.docs.length > 0) {
      const firstDocRef = docSnap.docs[0].ref;
      try {
          await updateDoc(firstDocRef, {
              f1: increment(1),
          })
      } catch (error) {
          console.log('Error updating document: ', error);
      }
  }
}

export {
    getStarsCount,
    incrementStars
}