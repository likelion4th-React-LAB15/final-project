import styled from 'styled-components/macro';
import { DbbItem } from 'components/dbb';

export const DbbList = ({ dbbData, children }) => {

  return (
    <StyledDbbList>
      {
        dbbData.map((dbbItem) => {
          return (
            <DbbItem key={dbbItem.id}>
              <div className="DddImage">
                <img src={require(`assets/images/guam-img${dbbItem.id}.jpg`)} alt={dbbItem.alt} />
              </div>
              <h3>{dbbItem.title}</h3>
              <p>
                <strong>{dbbItem.strong}</strong>
                {dbbItem.desc}
              </p>
            </DbbItem>
          )
        })
      }
    </StyledDbbList>
  )
}

const StyledDbbList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  max-width: 73.75rem;
  margin: 0 auto;
`