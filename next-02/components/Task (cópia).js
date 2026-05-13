import { useState } from "react";
export default function Task({ task, onChange, onDelete, disabled } ){

function handleDelete(){
    onDelete(task)
}
// Adicionar o cancelar Edição na description
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  function handleToggle() {
    onChange({
      objectId: task.objectId,
      description: task.description,
      done: !task.done,
    });
  }

  function handleSave() {
    if (!newDescription.trim()) return;

    onChange({
      objectId: task.objectId,
      description: newDescription,
      done: task.done,
    });

    setIsEditing(false);
  }
    return (
        <>
            <li>
                {isEditing ? (
                <>
                    <input
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    disabled={disabled}
                    />
                    <button onClick={handleSave} disabled={disabled}>
                    Salvar
                    </button>
                </>
                ) : (
                <>
                    {task.description}
                    <button onClick={() => setIsEditing(true)} disabled={disabled}>
                    Editar
                    </button>
                </>
                )} 
                <input 
                type="checkbox"
                defaultChecked={task.done} 
                onChange={handleToggle}
                disabled = {disabled}
                />
                <button onClick={handleDelete} disabled = {disabled}>X</button>
            </li>
        </>
    

    );
}