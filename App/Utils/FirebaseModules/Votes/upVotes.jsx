import { db } from '../../firebase-config'
import { collection, getDocs, updateDoc, increment } from 'firebase/firestore'

const upvoteRef = collection(db, 'Upvotes')

const getUpvoteCount = async () => {
    const upvoteDocSnap = await getDocs(upvoteRef);
    console.log("Upvote collection data:", upvoteDocSnap.docs[0].data().f1);
    return upvoteDocSnap;
  };

  const incrementUpvotes = async () => {
    const docSnap = await getDocs(upvoteRef);
    if (docSnap.docs.length > 0) {
        const firstDocRef = docSnap.docs[0].ref;
        try {
            await updateDoc(firstDocRef, {
                f1: increment(1),
            })
        } catch (error) {
            console.log('Error updating document: ', error);
        }
    } else {
        console.log('No documents found in Upvotes collection')
    }
  }

  export {
    getUpvoteCount,
    incrementUpvotes
  }