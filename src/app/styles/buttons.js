import styled from "styled-components";
import colors from "./colors";

export const Button = styled.button`
  background-color: ${colors.primary};
  border-radius: 40px;
  color: ${colors.white};
  border: 0;
  padding: 16px 32px;

  &:hover {
    opacity: 0.9;
  }
`;
