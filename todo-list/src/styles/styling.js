import styled from "styled-components";

export const AppWrapper = styled.div`
  text-align: center;
  font-family: "Open Sans", sans-serif;
  width: 100vw;
  height: 100vh;
`;

export const AppHeader = styled.header`
  font-size: 1.5rem;
`;

export const TodoWrapper = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid black;
  width: 80%;
  height: 3rem;
  padding: 1rem;
`;

export const TodoItem = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  height: 3rem;
  margin: 0.8rem 0;
  border: 2px solid black;
  padding: 1rem;
  text-align: left;
  cursor: pointer;
  font-size: 1.25rem;
  &:hover {
    Background: lightblue;
  };
  ${({ Done }) => Done && `
    Background: lightgreen;
    > span {
    text-decoration: line-through;
    };
    &:hover {
      Background: #88dc88;
    };
  `};
`;
