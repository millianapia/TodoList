import React, { useState } from "react"
import TodoListElement from "./todoListElement/todoListElement"


export default function TodoListList(props) {

const liste = props.liste.map((item, index)=>{
    return <TodoListElement name={item} key={index} idx={index} onDeleteHandler={props.onDeleteHandler}/>
})
    return(
        <div>
           {liste}
        </div>
    )
}


