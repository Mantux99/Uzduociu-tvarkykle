import React from "react";
import styles from "./index.module.scss";

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <a className={styles.active} href="/">
            Home
          </a>
        </li>
        <li>
          <a href="/tasks">Tasks</a>
        </li>
        <li>
          <a href="/users">Users</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li className={styles.logo}>
        <a href="/">TASKS MANAGER</a>
        </li>
      </ul>
    </div>
  );
}
