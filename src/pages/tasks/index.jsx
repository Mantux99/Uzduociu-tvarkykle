import React, { useState } from "react";
import styles from "./index.module.scss";
import Dropdown from "components/common/dropdown";
import { connect } from "react-redux";
import { getUsers, getUserTasks, getUserName } from "store/selectors";
import { assignUserToTask, toggleTask, deleteTask, createTask } from "store/actionCreators";

const Tasks = ({
  users,
  getUserTasks,
  getUserName,
  changeUser,
  createTask,
  toggleTask,
  deleteTask,
}) => {
  const [newTitle, setNewTitle] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [selectedUserId, setSelectedUserId] = useState("");

  const tasks = getUserTasks(selectedUserId);

  const tableContainerHeader =
    tasks.length > 0
      ? (selectedUserId ? getUserName(selectedUserId) : "All") + " tasks"
      : `No ${
          selectedUserId ? getUserName(selectedUserId) : ""
        } tasks at the moment`;

  const handleSubmit = (e) => {
    createTask({
      userId: selectedUserId,
      title: newTitle,
      done: false
    });
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Task Manager</h2>
          <section className={styles.mytable}>
            <div className={styles.inputGroup}>
              <label htmlFor="user">Select user</label>
              <select
                id="user"
                onChange={(e) => setNewUserName(e.target.value)}
                value={newUserName}
              >
                <option value="">Unassigned</option>
                {users.map(({ id, name }) => (
                  <option key={id} value={id}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                placeholder="Learn react hooks"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <button type="submit">Add task</button>
            </div>
          </section>
        </form>
        <div className={styles.tableContainer}>
          <div className={styles.tableContainerHeader}>
            <h2>{tableContainerHeader}</h2>
            <select
              value={selectedUserId ?? ""}
              onChange={(e) => setSelectedUserId(e.target.value)}
            >
              <option value={""}>All</option>
              {users.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          {tasks.length > 0 ? (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Task ID</th>
                  <th>Title</th>
                  <th>Done</th>
                  <th>User</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map(({ id, userId, title, done }) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{done ? "Done" : "Not Done"}</td>
                    <td>
                      <div className={styles.spanSpaceBetween}>
                        <span>{getUserName(userId)}</span>
                        <Dropdown
                          title="Re-assign"
                          options={[
                            ...users.map(({ id, name }) => ({
                              id,
                              value: name,
                            })),
                            {
                              id: "",
                              value: "unassigned",
                            },
                          ]}
                          onChange={(userId) => changeUser(id, userId)}
                        />
                      </div>
                    </td>
                    <td className={styles.spanSpaceBetween}>
                      <button onClick={() => toggleTask(id)}>
                        {done ? "Reset" : "Complete"}
                      </button>
                      <button onClick={() => deleteTask(id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  users: getUsers(state),
  getUserTasks: (userId) => getUserTasks(state, userId),
  getUserName: (userId) => getUserName(state, userId),
});

const mapDispatchToProps = (dispatch) => ({
  changeUser: (id, userId) => dispatch(assignUserToTask(id, userId)),
  toggleTask: (id) => dispatch(toggleTask(id)),
  deleteTask: (id) => dispatch(deleteTask(id)),
  createTask: (id) => dispatch(createTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
