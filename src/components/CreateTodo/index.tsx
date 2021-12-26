import React, { useState } from "react";

const CreateTodo = ({ onCreate }: { onCreate: (name: string) => void }) => {
  const [name, setName] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleCreate = () => {
    onCreate(name);
    setName("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label htmlFor="create-todo">Create ToDo</label>
      <input
        id="create-todo"
        name="Create todo"
        style={{ borderRadius: "4px", height: "18px" }}
        onChange={(event) => handleChange(event)}
        value={name}
      />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default CreateTodo;
