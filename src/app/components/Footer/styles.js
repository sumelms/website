import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.footer`
  background-color: ${colors.light};
`;

export const Row = styled.div`
  display: flex;

  &.copyright {
    font-size: 14px;
    font-weight: 300;
    padding: 16px 0;
    background: #ddd;
  }
`;

export const Col = styled.div`
  flex: 1;

  a {
    display: block;
  }
`;
