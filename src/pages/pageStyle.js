import styled from "styled-components"
import "fontsource-fira-sans/700.css"

export const PageWrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  margin-bottom: 40px;
  text-align: left;
`

export const Content = styled.div`
  padding-bottom: 100px;

  .wp-block-columns {
    width: 100%;
    min-height: 500px;
    max-height: 500px;

    @media (max-width: 900px) {
      max-width: 640px;
      min-height: unset !important;
      max-height: unset !important;
    }
  }

  .wp-block-image {
    float: left;
    display: block;
    padding-left: 0;
    margin-left: 0;
    width: 25%;
    min-height: 500px;
    max-height: 500px;

    @media (max-width: 1200px) {
      width: 20%;
      margin-top: 0;
      padding-top: 0;
      padding-bottom: 20px;
      min-height: unset !important;
      max-height: unset !important;
    }

    @media (max-width: 900px) {
      width: 100%;
      margin-top: 0;
      padding-top: 0;
      padding-bottom: 30px;
      margin-bottom: 0px;
      min-height: unset !important;
      max-height: unset !important;
    }
  }

  img {
    @media (max-width: 900px) {
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  p {
    @media (max-width: 900px) {
      margin-top: 0;
      margin-bottom: 0;
      padding-bottom: 10px;
      padding-top: 10px;
      font-size: 1.5rem;
    }
  }

  a {
    padding-bottom: 0px;
  }

  h2 {
    padding-top: 10px;
    padding-bottom: 10px;

    @media (max-width: 900px) {
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  h3 {
    padding-top: 20px;
    margin-bottom: 0px;

    @media (max-width: 900px) {
      padding-bottom: 10px;
      padding-top: 10px;
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  h4 {
    padding-bottom: 0px;
    margin-bottom: 0px;

    @media (max-width: 900px) {
      margin-top: 0;
      padding-bottom: 0;
      margin-bottom: 0;
    }
  }
`
// PostPage styles

export const PostWrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  margin-bottom: 40px;
  text-align: left;
`

export const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px;
`

export const PostContent = styled.article`
  margin-top: 20px;
`

export const PostDetails = styled.span`
  font-weight: bold;
  text-transform: capitalize;
`

export const StyledH1 = styled.h1`
  padding-top: 40px;

  @media (max-width: 800px) {
    padding-top: 0px;
  }
`

export const PersonIcon = styled(BsFillPersonFill)`
  transform: scale(1.5);
  color: grey;
`
