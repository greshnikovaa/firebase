import React, {useState} from 'react'
import { newListFirebase, getListFirebase } from '../api/list.api';

const Add = ({setList}) => {
    const [text, setText] = useState('')

    const newList = async () => {
        const data = {
            text: text,
            date: new Date(),
            bool: false
        }
        await newListFirebase(data)
        const dataList = await getListFirebase()
        setList(dataList)
    }

    return (
        <div className='top_box'>
            <input 
                placeholder='text..' 
                type="text"
                value={text}
                onChange={(e)=>setText(e.target.value)}
            />
            <button onClick={newList}>send</button>
        </div>
    );
};
export default Add