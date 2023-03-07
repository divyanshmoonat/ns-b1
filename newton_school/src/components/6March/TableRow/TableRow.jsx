const TableRow = (props) => {
  return (
    <>
      <td>{props.user.sNo}</td>
      <td>{props.user.name}</td>
      <td>{props.user.contactNo}</td>
    </>
  );
};

export default TableRow;
