import styled from "styled-components";

export const Container = styled.div`
  direction: flex;
  flex-direction: column;
  height: 15rem;
  width: 20rem;
  padding: 0.5rem;
`;

export const ContentIcon = styled.div`
  border-top: 1px solid var(--ifm-color-primary);
  color: var(--ifm-color-primary);
  font-size: 1.5em;
  margin-bottom: -0.5em;
  margin-top: 1em;
  text-align: center;
`;

export const Icon = styled.i`
  padding: 0 var(--ifm-spacing-horizontal);
  background: var(--ifm-background-color);
  position: relative;
  top: -1rem;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
`;

export const Content = styled.div`
  text-align: center;
`;
