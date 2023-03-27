import styled from 'styled-components/macro';
import theme from 'style/theme';

export const NotificationTitle = ({ children }) => {

  return (
    <StyledNotificationTitle className='notiTitle'>
      {children}
    </StyledNotificationTitle>
  )
}

const StyledNotificationTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 2rem;
  padding-bottom:1.5rem;
  color: ${theme.indigo};
  border-bottom: .125rem solid ${theme.blue};
  & + .notiList{
    margin-top: 1.125rem;
  }
`
