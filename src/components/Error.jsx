/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
const Txt = styled.div`
    background-color: #B7322C;
    color: #fff;
    font-family: 'Lato', sans-serif;
    padding: .25rem;
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
    border-radius: 5px;
`;
const Error = ({ children }) => {
  return (
    <Txt>
      {children}
    </Txt>
  )
}

export default Error;
