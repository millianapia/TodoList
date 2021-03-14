import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import TodoListList from "./todoListList/todoListList";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  wrapper: {
    margin: "auto",
    width: "40%",
    paddingTop: "50px"
  },
  inputBox: {
      width: "90%",
      margin: "auto",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 25,
    fontStyle: "bold",
  },
  pos: {
    marginBottom: 12,
  },
}));

const onSubmitHandler = () => {};

export default function TodoListWrapper() {
  const [todo, setTodo] = useState("");
  const [done, setDone] = useState(false);
  const [todoList, setTodoList] = useState([]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const liste = [...todoList];
    liste.push(todo);
    setTodoList(liste);
    setTodo("");
  };

  const onDeleteHandler = ( key) =>{
      const liste = [...todoList]
      liste.splice(key, 1)
      setTodoList(liste)
  }

  const onChangeHandler = (event) => {
    setTodo(event.target.value);
  };

  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Card className={classes.root}>
        <h3 className={classes.title}>Simple TODO App</h3>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={onSubmitHandler}
        >
          <TextField
          className={classes.inputBox}
            id="outlined-basic"
            variant="outlined"
            value={todo}
            onChange={onChangeHandler}
            placeholder="Add Todo"
          />
        </form>
        <div>
          <TodoListList liste={todoList} onDeleteHandler={onDeleteHandler}/>
        </div>
      </Card>
    </div>
  );
}
