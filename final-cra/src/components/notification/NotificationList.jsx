import styled from 'styled-components/macro';
import theme from 'style/theme';

export const NotificationList = ({ children }) => {

  return (
    <StyledNotificationList className='notiList'>
      {children}
    </StyledNotificationList>
  )
}

const StyledNotificationList = styled.ul`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  color: ${theme.gray};
  & + .notiTitle{
    margin-top: 6.875rem;
  }
  li{
    position: relative;
    line-height: 2.25rem;
    padding-left: 1.375rem;
  }
  li span{
    position: absolute;
    top:0;
    left:0;
  }
`
