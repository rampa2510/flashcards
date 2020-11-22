import React, { memo } from "react";
import { Card, TextField, Button, IconButton } from "ui-neumorphism";
import LockIcon from "mdi-react/LockIcon";
import Interceptor from "../Helpers/interceptor";

const styles = {
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
  container: {
    display: "flex",
    height: "100vh",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
  title: {
    display: "flex",
    fontSize: "25px",
    width: "100%",
    justifyContent: "center",
    fontWeight: "500",
    padding: "10px 0 20px 0",
  },
  iconContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 0px 10px 0px",
  },
  textInp: {
    padding: "10px 0 10px 0",
  },
};

const Signup = () => {
  const handleSubmit = React.useCallback(async () => {
    try {
      const username = document.getElementById("user").value;
      const password = document.getElementById("pass").value;
      console.log(username, password);
      const data = await Interceptor("", "POST", { username, password });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  }, []);
  return (
    <div style={styles.container}>
      <Card width={400} height={400}>
        <div style={styles.cardContainer}>
          <div style={styles.iconContainer}>
            <IconButton text={false} color="var(--error)" rounded={true}>
              <LockIcon />
            </IconButton>
          </div>
          <div style={styles.title}>Sign In</div>
          <TextField
            width={300}
            id="user"
            autofocus={true}
            placeholder="Enter username"
            style={styles.textInp}
          />
          <TextField
            type="password"
            style={styles.textInp}
            width={300}
            id="pass"
            placeholder="Enter password"
          />

          <div style={{ paddingTop: "20px" }}>
            <Button onClick={handleSubmit}>Sign In</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default memo(Signup);
