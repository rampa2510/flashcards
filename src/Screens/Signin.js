import React, { memo } from "react";
import { Card, TextField, Button, IconButton, Alert } from "ui-neumorphism";
import LockIcon from "mdi-react/LockIcon";
import AlertIcon from "mdi-react/AlertIcon";
import Interceptor from "../Helpers/interceptor";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  width: 100%;
  justify-content: center;
`;

const AlertContainer = styled.div`
  width: ${(props) => (props.windowW > 415 ? "20%" : "60%")};
  margin-left: ${(props) => (props.windowW > 415 ? "40%" : "20%")};
  padding-top: 50px;
`;

const TitleContainer = styled.div`
  display: flex;
  font-size: 25px;
  width: 100%;
  justify-content: center;
  font-weight: 500;
  padding: 10px 0 20px 0;
`;

const IconContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px 0px 10px 0px;
`;

const TextInp = styled(TextField)`
  padding: 10px 0 10px 0;
`;

const Signup = () => {
  const [isAlertVisible, setAlertStatus] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const handleSubmit = React.useCallback(async () => {
    try {
      const username = document.getElementById("user").value;
      const password = document.getElementById("pass").value;
      console.log(username, password);
      const data = await Interceptor("", "POST", { username, password });
      if (data[0] === 400) return setAlertStatus(true);
    } catch (e) {
      console.error(e);
    }
  }, []);

  React.useEffect(() => {
    console.log(windowWidth);
  }, [windowWidth]);
  React.useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
  }, []);

  return (
    <>
      <Container>
        <Card width={windowWidth > 415 ? 400 : 300} height={400}>
          <CardContainer>
            <IconContainer>
              <IconButton text={false} color="var(--error)" rounded={true}>
                <LockIcon />
              </IconButton>
            </IconContainer>
            <TitleContainer>Sign In</TitleContainer>
            <TextInp
              width={windowWidth > 415 ? 300 : 200}
              id="user"
              autofocus={true}
              placeholder="Enter username"
            />
            <TextInp
              type="password"
              width={windowWidth > 415 ? 300 : 200}
              id="pass"
              placeholder="Enter password"
            />

            <div style={{ paddingTop: "20px" }}>
              <Button onClick={handleSubmit}>Sign In</Button>
            </div>
          </CardContainer>
        </Card>
      </Container>

      <AlertContainer>
        <Alert
          rounded
          closable
          windowW={windowWidth}
          type="error"
          border="left"
          visible={isAlertVisible}
          icon={<AlertIcon />}
          onClose={() => setAlertStatus(false)}
        >
          Wrong Credentials
        </Alert>
      </AlertContainer>
    </>
  );
};

export default memo(Signup);
