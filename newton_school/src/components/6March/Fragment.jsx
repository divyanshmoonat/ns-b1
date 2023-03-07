import { useRef } from "react";

import Container from "../Container/Container";
import TableRow from "./TableRow/TableRow";
import Modal from "./Modal/Modal";
import { createPortal } from "react-dom";
import "./Fragment.css";

const users = [
  {
    sNo: 1,
    name: "Alex",
    contactNo: "1231231321",
  },
  {
    sNo: 2,
    name: "Sean",
    contactNo: "4564567891",
  },
  {
    sNo: 3,
    name: "Julia",
    contactNo: "9879879874",
  },
];

const Fragment = () => {
  const myInputRef = useRef();
  console.log(myInputRef.current.value);
  // myInputRef.current == event.target
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Contact No</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.sNo}>
                <TableRow user={user} />
              </tr>
            );
          })}
        </tbody>
      </table>
      {createPortal(<Modal />, document.getElementById("portalRoot"))}
      <input ref={myInputRef} type={"text"} placeholder="Type something..." />
    </>
  );
};

export default Fragment;
