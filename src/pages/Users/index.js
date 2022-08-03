import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchUsers } from "../../services";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

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
          usersList.map((user) => (
            <Box mt={3}>
              <Card>
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={1}>
                      <Avatar src={user.avatar_url} />
                    </Grid>
                    <Grid item xs={11}>
                      <Typography variant="body1">@{user.login}</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Box>
          ))}
      </Box>
    </Container>
  );
};

export default Users;
