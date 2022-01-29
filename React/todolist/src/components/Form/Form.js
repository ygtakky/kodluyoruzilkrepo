import { useEffect, useState } from "react";

function Form({ todos, setTodos }) {

  const [form, setForm] = useState("");
  const initialValue = "";

  // Reset the form input
  useEffect(() => {
    setForm(initialValue);
  }, [todos])

  // Handle input change
  const handleChange = (e) => {
    setForm(e.target.value);
  }

  // Handle form submit to the list
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form !== "" && todos.filter((element) => element.value === form).length === 0)
    {
      setTodos([...todos, {value: form.trim(), isCompleted: false}]);
    }
  }

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <input value={form} onChange={handleChange} />
      </form>
    </div>
  );
}

export default Form;