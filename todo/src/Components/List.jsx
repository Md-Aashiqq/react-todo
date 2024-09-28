/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Button from "./Button";

export const List = ({ item , func }) => {

  const deleteHandle = () => {
    func(item.name)
  }

  useEffect(() => {   

    return () => {
      console.log("UnMounted")
    }

  },[])


  return (
    <div className="todo_list">
      <input type="checkbox" placeholder="Enter Task" />
      <p className="todo_text">{item?.name}</p>
      <p className="todo_date">{item.date}</p>
        <Button func={deleteHandle} name="Delete" />
    </div>
  );
};
