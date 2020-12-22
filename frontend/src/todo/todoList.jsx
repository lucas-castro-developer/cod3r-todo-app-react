import React from "react";
import IconButton from "../template/iconButton";

export default (props) => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map((todo) => (
      <tr key={todo._id}>
        <td className={todo.done ? "markedAsDone" : ""}>{todo.description}</td>
        <td>
          <IconButton
            icon="check"
            style="success"
            hide={todo.done}
            onClick={() => props.handleMarkAsDone(todo)}
          ></IconButton>
          <IconButton
            icon="undo"
            style="warning"
            hide={!todo.done}
            onClick={() => props.handleMarkAsPending(todo)}
          ></IconButton>
          <IconButton
            style="danger"
            icon="trash-o"
            hide={!todo.done}
            onClick={() => props.handleRemove(todo)}
          ></IconButton>
        </td>
      </tr>
    ));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};
