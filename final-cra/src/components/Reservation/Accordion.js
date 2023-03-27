import React from 'react';
import AccordionPanel from 'components/Reservation/AccordionPanel.js';
import AccordionHandle from 'components/Reservation/AccordionHandle.js';
import theme from 'style/theme';
import styled from 'styled-components';
import { useState } from 'react';

const AccordionWrapper = styled.section`
  border-bottom: 0.125rem solid #c5c6df;
`;

const AccordionItem = styled.article`
  border-top: 0.125rem solid #c5c6df;

  .box {
    padding: 24.5px 65.5px;
    display: flex;
    justify-content: space-between;
    height: 100%;

    > img {
      width: 7.375rem;
      height: 4.875rem;
    }
    .textContainer {
      display: flex;
      flex-flow: column nowrap;
      gap: 1.625rem;

      .textWrap {
        display: flex;
        flex-flow: row nowrap;
        align-item: center;

        &:nth-of-type(2) {
          .textTitle {
            margin-right: 2.375rem;
          }
        }

        .textTitle {
          font-weight: 700;
          font-size: 16px;
          margin-right: 1.25rem;
        }

        > p {
          margin: 0 0.25rem 0 0.75rem;
          font-weight: 500;
          font-size: 16px;
          color: #444;

          .item {
            color: #212c92;
            font-weight: 700;
            font-size: 16px;
            margin-left: 0.625rem;
          }
        }
      }
    }
  }
`;

const Accordion = (props) => {
  const [activeIndex, setActiveIndex] = useState(props.activeIndex ?? -1);

  const handleChangeActiveIndex = (index) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <AccordionWrapper>
      {props.list.map(({ id, handle, panel, price }, index) => {
        let isActive = activeIndex === index;
        const parsePanelHTML = { __html: panel };

        return (
          <AccordionItem key={id} aria-labelledby={id}>
            <AccordionHandle
              controlId={id}
              isActive={isActive}
              onActive={() => handleChangeActiveIndex(index)}
              price={price}
            >
              {handle}
            </AccordionHandle>
            <AccordionPanel
              controlId={id}
              isActive={isActive}
              contents={parsePanelHTML}
            />
          </AccordionItem>
        );
      })}
    </AccordionWrapper>
  );
};

export default Accordion;
