import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.header`
  height: 92px;
  border-bottom: 1px solid ${colors.light};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 153px;
`;

export const Navigation = styled.nav`
  a {
    padding: 0 4px 2px 4px;
    color: ${colors.black};

    &.active {
      border-bottom: 4px solid ${colors.primary};
    }

    &:hover {
      color: ${colors.primary};
    }
  }
  a + a {
    margin-left: 16px;
  }
`;
