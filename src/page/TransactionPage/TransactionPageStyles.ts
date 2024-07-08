import styled from "styled-components";
import ReactPaginate from "react-paginate";

export const Pagination = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  list-style: none;

  li {
    margin: 0 10px;
  }

  .selected a {
    font-weight: bold;
    border-bottom: 2px solid black;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 30px;
`;
export const Section = styled.section`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
`;
