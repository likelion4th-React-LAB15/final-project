import { AboutItem, AboutItemImage, AboutItemDesc, BigFont } from 'components/about';

export const AboutList = ({ aboutData }) => {
  return (
    <ul>
      {
        aboutData.map((item, idx) => {
          return (
            <AboutItem key={item.id} count={item.id}>
              <AboutItemImage>
                <img src={require(`assets/images/${item.image}.jpg`)} alt={item.alt} />
              </AboutItemImage>
              <AboutItemDesc>
                <h3>
                  <strong className="bold full">{item.headingBold}</strong>
                  <strong className="line">{item.headingLine}</strong>
                </h3>
                <p>{item.description}</p>
              </AboutItemDesc>
              <BigFont idx={idx} color={item.bigFontColor}>
                {item.bigFontContent}
              </BigFont>
            </AboutItem>
          )
        })
      }
    </ul>
  )
}