import styled from 'styled-components/macro'
import theme from 'style/theme'

export const Button = ({type='button', visible, onClick, children, secondary,...rest}) => {
  const invisible = visible ? 'inline-block' :'none';
  return <StyledButton type={type} style = {{display:invisible}} onClick={onClick} secondary={secondary} {...rest}>{children}</StyledButton>
}

const StyledButton = styled.button`
  width: ${({secondary}) => secondary ? '9.0625rem' : '21.25rem'};
  height: ${({secondary}) => secondary ? '2.75rem' : '3.125rem'};
  color: ${({secondary}) => secondary ? theme.blue : theme.white};
  background-color: ${({secondary}) => secondary ? theme.white : theme.blue};
  margin: ${({secondary}) => secondary ? theme.spacingMd : theme.spacingXs} 0;
  border-radius: 3.125rem;
  border: .0625rem solid ${theme.blue};
  cursor: pointer;
`