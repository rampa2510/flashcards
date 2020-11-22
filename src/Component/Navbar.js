import React, { memo } from "react";
import { Card } from "ui-neumorphism";
import styled from "styled-components";

const StyledNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: Roboto;
  font-weight: 500;
  padding: 10px 0 10px 0;
`;

const Navbar = () => {
  return (
    <Card>
      <StyledNav>
        <h4>Flashcards</h4>
      </StyledNav>
    </Card>
  );
};

export default memo(Navbar);
