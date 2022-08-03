import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchUser } from "../../services";

const User = () => {
  const { username } = useParams();

  const [userDetail, setUserDetail] = useState(null);

  const fetchUser = async () => {
    const data = await searchUser(username);

    console.log(data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h1>Detalle de usuario</h1>
    </div>
  );
};

export default User;
