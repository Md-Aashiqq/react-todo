import Button from "../Components/Button";
import { List } from "../Components/List";

const Home = () => {
  return (
    <div className="home__container">
      <div className="home_header">
        <h1> Todo List </h1>
      </div>

      <div className="todo__body">
        <div className="todo_add">
          <input type="text" placeholder="Enter Task" />
          <Button name="Add" />
        </div>
        <List item={{ name: "Task 1", date: "10/10/2022" }} />
        <List item={{ name: "Task 1", date: "10/10/2022" }} />
      </div>
    </div>
  );
};

export default Home;
