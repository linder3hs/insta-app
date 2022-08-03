import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchUsers } from "../../services";
import { Box, Container, Typography } from "@mui/material";
import { CustomCard } from "../../components";

const Users = () => {
  const { username } = useParams();

  const [usersList, setUsersList] = useState([]);

  const fetchUsers = async () => {
    const data = await searchUsers(username);
    setUsersList(data.items);
    console.log(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Container maxWidth="md">
      <Box mt={10}>
        <Typography variant="h6">
          Resultado de la busqueda del usuario: @{username}
        </Typography>
      </Box>
      <Box>
        {usersList.length > 0 &&
          usersList.map((user, index) => (
            <CustomCard key={index} user={user} />
          ))}
      </Box>
    </Container>
  );
};

export default Users;
