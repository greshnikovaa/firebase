import React, {useEffect} from 'react'
import { getListFirebase, deleteListFirebase } from '../api/list.api';

const List = ({list, setList}) => {

    const getList = async () => {
        const data = await getListFirebase()
        setList(data)
    }

    const deleteList = async (id) => {
        await deleteListFirebase(id)
        getList()
    }

    useEffect(() => {
        getList()
    },[])

    return (
        <ol className='box'>
            {!!list && list.map((item) => 
                <li
                    onClick={()=>deleteList(item.id)}
                    key={item.id}
                >{item.text}</li>
            )}
        </ol>
    );
};
export default List