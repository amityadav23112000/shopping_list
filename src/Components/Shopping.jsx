// rfce
import React, { useState } from 'react'
import InputBox from './InputBox';
import ListItem from './ListItem';

function Shopping() {
    const [content, setContent] = useState("");
    // state ke through 
    const [tasks, setTasks] = useState([]);

    const handleInput = (e) => {
        setContent(e.target.value)
    }
    const handleAddItem = () => {
        // input value 
        if(content=="")return 
        const newItem = content
        // tasks array me add krna hai
        // const newArr = [];
        // for (let i = 0; i < tasks.length; i++) {
        //     newArr.push(tasks[i]);
        // }

        // newArr.push(newItem)
        // [Hello, HI]
        const newArr = [...tasks];
        newArr.push(newItem);

        setTasks(newArr)
        setContent("");
    }
    const handleDelete = (index) => {
        console.log("Remove Item");
        // inbuilt function -> search 
        const filteredArr = []
        for (let i = 0; i < tasks.length; i++) {
            if (i != index) {
                filteredArr.push(tasks[i]);
            }
        }
        setTasks(filteredArr);


    }
    // return -> jo bhi us time pe state me rahega mai bikul waise hi ui render krunga 
    return (
        <div className='Shopping-list'>
            <InputBox handleInput={handleInput} content={content} handleAddItem={handleAddItem}></InputBox>
            <h2> ShoppingCart</h2>
            <ListItem handleDelete={handleDelete} tasks={tasks}></ListItem>
        </div >
    )
}
export default Shopping;
