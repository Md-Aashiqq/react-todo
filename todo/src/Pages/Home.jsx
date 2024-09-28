import { useEffect, useState } from "react";
import Button from "../Components/Button";
import { List } from "../Components/List";

const Home = () => {

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");


  useEffect(() => { 

    setList([])

    return () => {
      console.log("UnMounted")
    }

  },[])

  const onChangeHandler = (event) => {
    setInput(event.target.value);
  }

  const onClickHandler = () => { 
    const currentDate = new Date();
    const date = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
    const task = {
      name: input,
      date: date
    }
    setList([...list, task]);
  }

  const onDeleteHandler = (name) => {
    for (let i = 0; i < list.length; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
      }
    }
    setList([...list]);
  }

  return (
    <div className="home__container">
      <div className="home_header">
        <h1> Todo List </h1>
      </div>

      <div className="todo__body">
        <div className="todo_add">
          <input onChange={onChangeHandler} type="text" placeholder="Enter Task" />
          <Button func={onClickHandler} name="Add" />
        </div>
        {list.map((item) => (
          <List func={onDeleteHandler} key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
