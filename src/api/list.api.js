import {firestore} from '../firebase'
import {
    collection,
    getDocs,
    addDoc,
    doc,
    deleteDoc
} from '@firebase/firestore'

const getListFirebase = async () => {
    const colRef = collection(firestore, 'list')
    const queryData = await getDocs(colRef)

    const data = [];
    queryData.forEach((doc) => {
        data.push({id: doc.id, ...doc.data()})
    })
    return data;
}

const newListFirebase = async (data) => {
    const colRef = await collection(firestore, 'list')
    const queryData = await addDoc(colRef,data)
    return queryData.id;
}
const deleteListFirebase = async (id) =>{
    const  docRef = await doc(firestore, 'list', id)
    deleteDoc(docRef)
}

export {getListFirebase, newListFirebase, deleteListFirebase}