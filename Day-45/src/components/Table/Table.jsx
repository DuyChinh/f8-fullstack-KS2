import "./Table.css"

const Table = ()=> {
    const arrJSON = localStorage.getItem("data");
    const arr = JSON.parse(arrJSON);
    console.log("table",arr);
  return (
    <div>
      <table className="table">
        <tr>
          <th>Lần</th>
          <th>Số bạn nhập</th>
        </tr>
        {/* {arr.map((item, index) => (
          <tr key={index}>
            <th>{item.time}</th>
            <th>{item.value}</th>
          </tr>
        ))} */}
      </table>
    </div>
  )
}

export default Table