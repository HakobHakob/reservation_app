import * as Styled from "./Styled"

export const SearchItem = () => {
  return (
    <Styled.SearchItem>
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <Styled.SiDesc>
        <Styled.SiTitle className="siTitle">Tower Street Apartments</Styled.SiTitle>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </Styled.SiDesc>
      <Styled.SiDeatils>
        <Styled.SiRating>
          <span>Excellent</span>
          <button>8.9</button>
        </Styled.SiRating>
        <Styled.SiDetailTexts>
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </Styled.SiDetailTexts>
      </Styled.SiDeatils>
    </Styled.SearchItem>
  )
}
