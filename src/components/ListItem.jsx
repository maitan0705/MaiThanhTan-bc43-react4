import { useDispatch, useSelector } from "react-redux";
import { delInfo, valueUpdate } from "../feature/ProductsSlice";
import { useEffect } from "react";

const ListItem = () => {
  const { arrinfo } = useSelector((state) => state.infoStudent);
  const dispatch = useDispatch();
  useEffect(()=>{

  },[arrinfo])
  
  return (
    <div className="card container">
      <h2 className="text-center py-2">Danh Sanh</h2>
      <table className=" card-header table align-middle mb-0 shadow-5 rounded-top">
        <thead className=" text-white bg-primary">
          <tr>
            <th>Ma</th>
            <th>Họ Tên</th>
            <th>Email</th>
            <th>Phone</th>
            <th className="text-center">Edit</th>
          </tr>
        </thead>
        <tbody>
          {arrinfo.map((item, index) => {
            return (
              <tr key={item.id}>
                <th>{item.id}</th>
                <th>{item.name}</th>
                <th>{item.email}</th>
                <th>{item.phone}</th>
                <th className="text-center">
                  <button
                    className="btn btn-success"
                    onClick={() => 
                      
                      dispatch(valueUpdate(item))
                    }
                  >
                    sua
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(delInfo(index))}
                  >
                    xoa
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListItem;
