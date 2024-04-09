import { collection, getDocs } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebase-config";

const storiesCollectionRef = collection(db, 'Stories');

// Manual test with a hardcoded image path
const testRef = ref(storage, 'Story/coaxialglacier1984_Burger_fries_and_shake_brand_packaging_for_L_17cdf8fd-9665-4609-a81b-b42d9585b510.webp');
getDownloadURL(testRef)
    .then(url => {
        console.log('Test image URL:', url);
    })
    .catch(error => {
        console.error('Error fetching test image:', error);
    });


const getFirebaseStories = async () => {
    const storyDocs = await getDocs(storiesCollectionRef);
    const stories = await Promise.all(storyDocs.docs.map(async doc => {
        const data = doc.data();
        const imageRef = ref(storage, `Story/${data}`)
        const imageUrl = await getDownloadURL(imageRef);
        return {
            id: doc.id,
            name: data.name,
            image: { url: imageUrl },
        };
    }));
    return { stories }
};

export { getFirebaseStories };