import styled from "styled-components";

const size = {
  mobile: '400px',
  tablet: '768px',
  desktop: '1300px'
}

const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
}

export const AppWrapper = styled.div`
  text-align: center;
  font-family: "Open Sans", sans-serif;
  width: 100vw;
  height: 100vh;
`;

export const AppHeader = styled.header`
  color: white;
  font-size: 1.5rem;
`;

export const TodoInput = styled.input`
  @media ${device.mobile} {
    width: 24rem;
    height: 2rem;
    font-size: 1.5rem;
    margin: 0 1rem;
  };

  @media ${device.tablet} {
    width: 50rem;
    height: 2rem;
    font-size: 1.5rem;
  };

  @media ${device.desktop} {
    width: 66rem;
    height: 2rem;
    font-size: 1.5rem;
  };
`;

export const AddButton = styled.button`
  @media ${device.mobile} {
    font-size: 1.2rem;
    width: 24.5rem;
    height: 2.5rem;
    margin: 0 1rem;
  };

  @media ${device.tablet} {
    font-size: 1.5rem;
    width: 50.5rem;
    height: 2.7rem;
  };

  @media ${device.desktop} {
    font-size: 1.5rem;
    width: 66.5rem;
    height: 2.7rem;
  };

  background-color: #1f1340;
  color: white;
  border: none;
  &:hover {
    background-color: #3B2379;
  };
`;

export const FilterDiv = styled.div`
  @media ${device.mobile} {
    width: 100%;
    padding: 0.5rem;
    border: none;
  };

  @media ${device.tablet} {
    justify-content: space-around;
    > span {
      font-size: 1.5rem;
    };
  };

  @media ${device.desktop} {
    justify-content: space-around;
    > span {
      font-size: 1.5rem;
    };
  };

  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid black;
  background-color: #1f1340;
  color: white;
  padding: 1rem;
  > span:hover {
    color: lightgrey;
  };
`;

export const FilterWrapper = styled.div`
  @media ${device.mobile} {
    width: 100%;
    height: 4rem;
  };

  @media ${device.desktop} {
    height: 5rem;
  };

  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  background-color: white;
`;

export const FilterButton = styled.button`
  @media ${device.mobile} {
    height: 2rem;
    font-size: 1rem;
  };

  @media ${device.tablet} {
    height: 2.5rem;
    > span {
    padding: 0 1rem;
    font-size: 1.5rem;
    };
  };

  @media ${device.desktop} {
    height: 3rem;
    > span {
    padding: 0 1rem;
    font-size: 1.6rem;
    };
  };

  color: black;
  &:hover {
    background-color: darkgrey;
  };
  &:focus {
    font-weight: bold;
    background-color: #d9cbfa;
  };
`;

export const TodoWrapper = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  > span {
    font-size: 1.5rem;
    color: white;
    margin-top: 3rem;
  };
`;

export const TodoItem = styled.div`
  @media ${device.mobile} {
    width: 85%;
    height: 3rem;
    margin: 0.3rem 0;
    padding: 1rem;
    font-size: 1.25rem;
  };

  @media ${device.tablet} {
    width: 60%;
    height: 3rem;
    margin: 0.8rem 0;
    padding: 1rem;
    font-size: 1.25rem;
  };

  @media ${device.desktop} {
    width: 60%;
    height: 3rem;
    margin: 0.8rem 0;
    padding: 1rem;
    font-size: 1.25rem;
  };

  border: none;
  background-color: #1f1340;
  color: white;
  display: flex;
  align-items: center;
  text-align: left;
  cursor: default;
  transform: none;
  > span {
    cursor: pointer;
  };
  &:hover {
    Background: #3B2379;
  };
  &:focus {
    border: 5px dotted red;
  };

  ${({ done }) => done && `
    background: lightgreen;
    color: black;
    > span {
    text-decoration: line-through;
    };
    &:hover {
      background: #88dc88;
    };
  `};

  ${({ isDragging }) => isDragging && `
    background: #8867e2;
  `};
`;
