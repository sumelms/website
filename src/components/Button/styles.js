import styled from "styled-components";

export const Container = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: var(--ifm-color-primary);
  color: var(--ifm-color-primary-light);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: 0.3s;
  opacity: 1;

  &:hover {
    opacity: 0.8;
    color: var(--ifm-color-primary-light-gray);
    text-decoration: none;
  }

  & + a {
    margin-left: 1rem;
  }
`;
