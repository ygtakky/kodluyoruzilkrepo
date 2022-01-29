import { useState } from "react";

function List({ todos, setTodos }) {
  const [filter, setFilter] = useState("all");
  const [edit, setEdit] = useState("");
  const [editMode, setEditMode] = useState(false);

  const filtered = todos.filter((element) => {
    if (filter === "all") {
      return element;
    } else {
      return element.isCompleted === filter;
    }
  });

  const handleClearCompleted = () => {
    setTodos(
      todos.filter((item) => {
        return item.isCompleted !== true;
      })
    );
  };

  const handleDelete = (e, value) => {
    setTodos(todos.filter((element) => element.value !== value));
  };

  const handleCompletedToggle = (value) => {
    const newArray = todos.map((element) => {
      if (element.value === value) {
        const updatedItem = {
          ...element,
          isCompleted: !element.isCompleted,
        };

        return updatedItem;
      }
      return element;
    });

    setTodos(newArray);
  };

  const handleEdit = (e) => {
    setEdit(e.target.value);
  };

  const handleSubmit = (value) => {
    const newArray = todos.map((element) => {
      if (element.value === value) {
        const updatedItem = {
          ...element,
          value: edit,
        };

        return updatedItem;
      }
      return element;
    });

    setTodos(newArray);
    setEditMode(false);
  };

  return (
    <div className="List">
      <ul>
        {filtered.map((element, i) => {
          return (
            <li key={i}>
              <input
                className="Checkbox"
                type="checkbox"
                checked={element.isCompleted ? true : false}
                onChange={() => handleCompletedToggle(element.value)}
              />
              <input
                className={`ListItem ${element.isCompleted ? "Completed" : ""}`}
                value={editMode ? edit.value : element.value}
                onFocus={() => setEditMode(true)}
                onBlur={() => handleSubmit(element.value)}
                onChange={handleEdit}
              />
              <button
                className="destroy danger"
                onClick={(e) => handleDelete(e, element.value)}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
      <div className="Filter">
        <span>
          <strong>
            {todos.filter((element) => !element.isCompleted).length}
          </strong>{" "}
          item(s) left
        </span>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter(false)}>Active</button>
        <button onClick={() => setFilter(true)}>Completed</button>
        <button className="danger" onClick={handleClearCompleted}>
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default List;
