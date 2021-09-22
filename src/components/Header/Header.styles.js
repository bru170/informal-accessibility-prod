import styled from "styled-components"

//todo make sure nav bar sticks to top, can see content through

export const Wrapper = styled.nav`
  height: 40px;
  width: 100%;
  padding-top: 20px;
  background-color: #f0f0f0;
`

export const Content = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 5px;

  img {
    width: 200px;
    margin: 0;
    padding: 12px 0 0 0;
  }

  @media (max-width: 1220px) {
    padding: 0 20px;
  }

  a {
    font-family: "Fira Sans";
    text-decoration: none;
    color: #bb3355;
  }

  .header-active {
    text-decoration: underline;
    text-decoration-color: #bb3355;
    text-underline-offset: 3px;
    text-decoration-thickness: 3px;
  }
`
