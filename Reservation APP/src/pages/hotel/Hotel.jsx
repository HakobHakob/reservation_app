import * as Styled from "./Styled"
import { Navbar } from "../../components/navbar/Navbar"
import { Header } from "../../components/header/Header"
import { MailList } from "../../components/mailList/MailList"
import { Footer } from "../../components/footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons"
import { photos } from "./photos"
import { useState } from "react"

export const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)

  const handleOpen = (index) => {
    setSlideNumber(index)
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSlideNumber

    if (direction === "left") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }
    
    setSlideNumber(newSlideNumber)
    console.log("newSlideNumber", newSlideNumber)
  }
  return (
    <>
      <Navbar />
      <Header type="list" />
      <Styled.HotelContainer>
        {open && (
          <Styled.Slider>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("left")}
            />
            <Styled.SliderWrapper>
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </Styled.SliderWrapper>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("right")}
            />
          </Styled.Slider>
        )}

        <Styled.HotelWrapper>
          <Styled.BookNowBtn>Reserve or Book Now!</Styled.BookNowBtn>
          <Styled.HotelTitle>Tower Street Apartments</Styled.HotelTitle>
          <Styled.HotelAddress>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </Styled.HotelAddress>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <Styled.HotelImages>
            {photos.map((photo, i) => (
              <Styled.HotelImgWrapper key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </Styled.HotelImgWrapper>
            ))}
          </Styled.HotelImages>
          <Styled.HotelDetails>
            <Styled.HotelDetailsTexts>
              <Styled.HotelTitle>Stay in the heart of City</Styled.HotelTitle>
              <Styled.HotelDesc>
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </Styled.HotelDesc>
            </Styled.HotelDetailsTexts>
            <Styled.HotelDetailsPrice>
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </Styled.HotelDetailsPrice>
          </Styled.HotelDetails>
        </Styled.HotelWrapper>
        <MailList />
        <Footer />
      </Styled.HotelContainer>
    </>
  )
}
