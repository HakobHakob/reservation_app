import * as Styled from "./Styled"
import { useState } from "react"
import { format } from "date-fns"
import { useLocation } from "react-router-dom"
import { Header } from "../../components/header/Header"
import { Navbar } from "../../components/navbar/Navbar"
import { DateRange } from "react-date-range"
import "react-date-range/dist/styles.css" // main css file
import "react-date-range/dist/theme/default.css" // theme css file
import { SearchItem } from "../../components/searchItem/SearchItem"

export const List = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)

  return (
    <Styled.List>
      <Navbar />
      <Header type="list" />

      <Styled.ListContainer>
        <Styled.ListWrapper>
          <Styled.ListSearch>
            <Styled.ListTitle>Search</Styled.ListTitle>
            <Styled.ListItem>
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </Styled.ListItem>

            <Styled.ListItem>
              <label>Check-in Date</label>
              <span
                onClick={() => setOpenDate(!openDate)}
                className="check-in-span"
              >
                {`
                ${format(date[0].startDate, "dd/mm/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/mm/yyyy"
                )}
                `}
              </span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                  minDate={new Date()}
                />
              )}
            </Styled.ListItem>

            <Styled.ListItem>
              <label>Options</label>
              <Styled.ListOptions>
                <Styled.ListOptionItem>
                  <Styled.ListOptionText>
                    Min price <small>per night</small>
                  </Styled.ListOptionText>
                  <input type="number" className="lsOptionInput" />
                </Styled.ListOptionItem>
                <Styled.ListOptionItem>
                  <Styled.ListOptionText>
                    Max price <small>per night</small>
                  </Styled.ListOptionText>
                  <input type="number" className="lsOptionInput" />
                </Styled.ListOptionItem>

                <Styled.ListOptionItem>
                  <Styled.ListOptionText>Adult</Styled.ListOptionText>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </Styled.ListOptionItem>

                <Styled.ListOptionItem>
                  <Styled.ListOptionText>Children</Styled.ListOptionText>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </Styled.ListOptionItem>

                <Styled.ListOptionItem>
                  <Styled.ListOptionText>Room</Styled.ListOptionText>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </Styled.ListOptionItem>
              </Styled.ListOptions>
            </Styled.ListItem>
            <button className="search-btn">Search</button>
          </Styled.ListSearch>

          <Styled.ListResult>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </Styled.ListResult>
        </Styled.ListWrapper>
      </Styled.ListContainer>
    </Styled.List>
  )
}
