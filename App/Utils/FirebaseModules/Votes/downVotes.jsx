import { db } from '../../firebase-config'
import { collection, getDocs, updateDoc, increment } from 'firebase/firestore'

const downvoteRef = collection(db, 'Downvotes')

const getDownvoteCount = async () => {
    const downvoteDocSnap = await getDocs(downvoteRef);
    console.log("Downvote collection data:", downvoteDocSnap.docs[0].data().f1);
    return downvoteDocSnap;
  };

  const decrementDownvotes = async () => {
    const docSnap = await getDocs(downvoteRef);
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
    getDownvoteCount,
    decrementDownvotes
  }