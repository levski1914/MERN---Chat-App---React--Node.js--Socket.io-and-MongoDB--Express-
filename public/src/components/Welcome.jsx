import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Welcome = ({ currentUser }) => {
  const [userName, setUsername] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setUsername(
        await JSON.parse(localStorage.getItem("chat-app-user")).username
      );
    };

    fetchData();
  }, []);

  return (
    <>
      <Container>
        <h1>
          Welcome, <span>{userName}</span>
        </h1>

        <h3>Please select chat to start messaging</h3>
      </Container>
    </>
  );
};

export default Welcome;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;
