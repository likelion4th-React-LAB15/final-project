import styled from 'styled-components/macro'
import theme from 'style/theme'



export const PrimaryButton = ({type="button", children, ...rest}) => {
  return <StyledPrimaryButton type={type} {...rest}>{children}</StyledPrimaryButton>
}

export const SecondaryButton = ({type="button", children, visible, ...rest}) => {
  const invisible = visible ? 'inline-block' :'none' ;
  return <StyledSecondaryButton type={type} style = {{display:invisible}} {...rest}>{children}</StyledSecondaryButton>
}

const StyledPrimaryButton = styled.button`
  width: 21.25rem;
  height: 3.125rem;
  color: ${theme.white};
  background-color: ${theme.blue};
  margin: ${theme.spacingXs} 0;
  border-radius: 3.125rem;
  border: none;
  cursor: pointer;
`

const StyledSecondaryButton = styled.button`
  width: 9.0625rem;
  height: 2.75rem;
  color: ${theme.blue};
  background-color: ${theme.white};
  margin: ${theme.spacingMd} 0;
  border-radius: 3.125rem;
  border: .0625rem solid ${theme.blue};
  cursor: pointer;
`
