import Button from "./Button";

export const List = ({ item }) => {
  return (
    <div className="todo_list">
      <input type="checkbox" placeholder="Enter Task" />
      <p className="todo_text">{item?.name}</p>
      <p className="todo_date">{item.date}</p>
        <Button name="Delete" />
    </div>
  );
};
