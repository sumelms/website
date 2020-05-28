import styled from "styled-components";
import colors from "../../styles/colors";

export const Card = styled.div`
  border: 1px solid ${colors.light};
  box-shadow: 1px 1px 1px 1px ${colors.light};
  text-align: center;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  margin: 8px 0;
`;

export const Description = styled.p`
  font-size: 12px;
  font-weight: 300;
`;
