import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  height: 50px;
  background-color: #bc8be0;
`;

export const ButtonContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  & > button {
    height: 100%;
    color: #ffffff;
    font-size: 17px;
    font-weight: bold;
  }
`;
