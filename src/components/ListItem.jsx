import { useSelector } from "react-redux";

const ListItem = () => {
  const { arrinfo } = useSelector((state) => state.infoStudent);

  return (
    <div className="card container">
      <h2 className="text-center py-2">Danh Sanh</h2>
      <table className=" card-header table align-middle mb-0 shadow-5 rounded-top">
        <thead className=" text-white bg-primary">
          <tr>
            <th>Name</th>
            <th>Title</th>
            <th>Status</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {arrinfo.map((item) => {
            return (
              <tr key={item.id}>
                <th>{item.id}</th>
                <th>{item.name}</th>
                <th>{item.email}</th>
                <th>{item.phone}</th>
                <th>zai</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListItem;
