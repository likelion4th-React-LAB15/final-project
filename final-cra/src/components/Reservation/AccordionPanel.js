import styled from 'styled-components';
import theme from 'style/theme';

const AccordionPanelStyle = styled.div`
  overflow: hidden;
  height: 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: ${theme.textBase};
  line-height: 1.1875rem;
  background-color: #f3f4f7;

  &.active {
    height: auto;
  }
`;

const AccordionPanel = ({ controlId, isActive, contents }) => {
  return (
    <AccordionPanelStyle
      role="region"
      aria-labelledby={`${controlId}-handle`}
      className={isActive ? 'active' : ''}
      dangerouslySetInnerHTML={contents}
    />
  );
};

export default AccordionPanel;
