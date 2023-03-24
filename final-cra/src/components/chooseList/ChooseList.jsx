import styled from 'styled-components/macro';
import theme from 'style/theme';
import { Link } from 'react-router-dom';

export const ChooseList = ({ reserData }) => {
  return (
    <>
      <StyledChooseList>
        {reserData.map((data) => {
          return (
            <li key={data.id}>
              <img src={require(`assets/${data.image}`)} alt={data.alt} />
              <h3>
                <span className="line">{data.headingLine}</span>
                <span className="bold">{data.headingBold}</span>
              </h3>
              <p>{data.desc}</p>
              <strong>{data.strong}</strong>
              <Link to="/reservation1">Reservation</Link>
            </li>
          );
        })}
      </StyledChooseList>
    </>
  );
};

const StyledChooseList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  li {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: calc(100% / 2 - 0.625rem);
    padding: 3.75rem 3.75rem 5rem 3.75rem;
    background-color: ${theme.white};
    border-radius: 3.75rem;
    border: 0.125rem solid ${theme.blue};
  }
  li > img {
    max-height: 5rem;
  }
  h3 {
    margin-top: 3.75rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 2.5625rem;
  }
  .line {
    color: transparent;
    -webkit-text-stroke-width: 0.125rem;
    -webkit-text-stroke-color: ${theme.blue};
  }
  .bold {
    color: ${theme.blue};
  }
  .line + .bold {
    margin-left: 0.625rem;
  }
  p {
    margin-top: 1.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.25rem;
    color: ${theme.indigo};
    line-height: 28px;
    text-align: center;
  }
  strong {
    margin: 2.8125rem auto 0 auto;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    color: ${theme.indigo};
  }
  a {
    display: inline-block;
    margin-top: 3.75rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1.125rem;
    color: ${theme.indigo};
    padding: 0.875rem 1.875rem;
    border-radius: 1.875rem;
    border: 0.125rem solid ${theme.indigo};
    text-transform: uppercase;
    transition: all 0.3s;
  }
  a:hover {
    color: ${theme.white};
    background-color: ${theme.indigo};
  }
`;
