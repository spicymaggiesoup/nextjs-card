import styled from "styled-components";

const CardLayout = ({children}) => {
  return(
    <StyledLayout>
    {children}
  </StyledLayout>
  )
}

export const StyledLayout = styled.div`
    max-width: 400px;
    width:100%;
    height:100%;
`

export default CardLayout;