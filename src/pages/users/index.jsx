import React, { useState } from 'react';
import styles from './index.module.scss';
import { connect } from "react-redux";
import { getUsers } from "store/selectors";
import { deleteUser, createUser} from "store/actionCreators";


const Users = ({users, createUser, deleteUser}) => {
  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser({name: userName});

  }
  const handleDelete = (e) => {
    e.preventDefault();
    deleteUser({name: userName});

  }



  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>User Manager</h2>
          <div className={styles.inputGroup}>
            <label htmlFor="userName">User Name</label>
            <input
              id="userName"
              type="text"
              placeholder="Serbentautas"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button type="submit">Add user</button>
          </div>
        </form>
        {
          users.length > 0 ?
            <div className={styles.tableContainer}>
              <h2>All Users</h2>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(({ id, name }) =>
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td><button onClick={() => deleteUser(id)}>Delete</button></td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            : <h2>No Users are created at the moment</h2>
        }
      </div>
      <hr />
    </>
  )
}

const mapStateToProps = (state) => ({
  users: getUsers(state),
});

const mapDispatchToProps = (dispatch) => ({
  createUser: (id) => dispatch(createUser(id)),
  deleteUser: (id) => dispatch(deleteUser(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Users);
