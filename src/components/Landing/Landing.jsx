import { React, useState, useRef } from "react";

import data from "../../utils/data.json";

import {
  ClearSpan,
  CompanyName,
  CompanyOfferContainer,
  CompanyPosition,
  HeaderSection,
  JobContainer,
  JobDetailsContainer,
  JobPhotoContainer,
  JobTechStackContainer,
  LandingContainer,
  LandingSection,
  ParentJob,
  SearchContainer,
  SearchIconContainer,
  ShortDetailsContainer,
} from "./components";

import { FaSearch } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";

import headerBg from "../../assets/bg-header-desktop.svg";

import img from "../../assets/manage.svg";

export const Landing = () => {
  const [searchBar, setSearchBar] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [language, setLanguage] = useState();

  const spanElement = useRef();

  function onClickSearchBar() {
    if (searchBar === false) {
      setSearchBar(true);
    } else {
      setSearchBar(false);
    }
  }

  function onChangeSearch(e) {
    console.log(e.currentTarget.value);
    setSearchInput(e.currentTarget.value);
  }

  function onClickClearSearch() {
    setSearchInput("");
  }

  function onClickSetRoleChange() {
    setSearchInput(spanElement.current.innerText);
    console.log(spanElement.current.innerText);
  }

  return (
    <LandingSection>
      <HeaderSection>
        <img src={headerBg} alt="" />
      </HeaderSection>
      <LandingContainer>
        <SearchContainer maxWidth={searchBar ? "600px" : "0px"}>
          <input onChange={onChangeSearch} type="search" value={searchInput.toLowerCase()} />
          <ClearSpan onClick={onClickClearSearch} display={searchBar ? "flex" : "none"}>
            Clear
          </ClearSpan>
          <SearchIconContainer
            onClick={onClickSearchBar}
            background={searchBar ? "white" : "none"}
            width={searchBar ? "60px" : "40px"}
          >
            {searchBar ? <FaRegWindowClose /> : <FaSearch />}
          </SearchIconContainer>
        </SearchContainer>
        {!searchInput ? (
          <ParentJob>
            {data.map((job) => {
              return (
                <JobContainer>
                  <CompanyOfferContainer>
                    <JobPhotoContainer>
                      <img src={job.logo} alt="" />
                    </JobPhotoContainer>
                    <JobDetailsContainer>
                      <CompanyName>{job.company}</CompanyName>
                      <CompanyPosition>{job.position}</CompanyPosition>
                      <ShortDetailsContainer>
                        <span>{`${job.postedAt} ·`}</span>
                        <span>{`${job.contract} ·`}</span>
                        <span>{job.location}</span>
                      </ShortDetailsContainer>
                    </JobDetailsContainer>
                  </CompanyOfferContainer>
                  <JobTechStackContainer>
                    <span onClick={onClickSetRoleChange} ref={spanElement}>
                      {job.role}
                    </span>
                    {job.languages.map((language) => {
                      return (
                        <div>
                          <span onClick={onClickSetRoleChange}>{language}</span>
                        </div>
                      );
                    })}
                  </JobTechStackContainer>
                </JobContainer>
              );
            })}
          </ParentJob>
        ) : (
          <ParentJob>
            {data.map((job) => {
              if (job.role.toLowerCase() === searchInput) {
                return (
                  <JobContainer>
                    <CompanyOfferContainer>
                      <JobPhotoContainer>
                        <img src={job.logo} alt="" />
                      </JobPhotoContainer>
                      <JobDetailsContainer>
                        <CompanyName>{job.company}</CompanyName>
                        <CompanyPosition>{job.position}</CompanyPosition>
                        <ShortDetailsContainer>
                          <span>{`${job.postedAt} ·`}</span>
                          <span>{`${job.contract} ·`}</span>
                          <span>{job.location}</span>
                        </ShortDetailsContainer>
                      </JobDetailsContainer>
                    </CompanyOfferContainer>
                    <JobTechStackContainer>
                      <span>{job.role}</span>
                      {job.languages.map((language) => {
                        return (
                          <div>
                            <span>{language}</span>
                          </div>
                        );
                      })}
                    </JobTechStackContainer>
                  </JobContainer>
                );
              } else if (job.level.toLowerCase() === searchInput) {
                return (
                  <JobContainer>
                    <CompanyOfferContainer>
                      <JobPhotoContainer>
                        <img src={job.logo} alt="" />
                      </JobPhotoContainer>
                      <JobDetailsContainer>
                        <CompanyName>{job.company}</CompanyName>
                        <CompanyPosition>{job.position}</CompanyPosition>
                        <ShortDetailsContainer>
                          <span>{`${job.postedAt} ·`}</span>
                          <span>{`${job.contract} ·`}</span>
                          <span>{job.location}</span>
                        </ShortDetailsContainer>
                      </JobDetailsContainer>
                    </CompanyOfferContainer>
                    <JobTechStackContainer>
                      <span>{job.role}</span>
                      {job.languages.map((language) => {
                        return (
                          <div>
                            <span>{language}</span>
                          </div>
                        );
                      })}
                    </JobTechStackContainer>
                  </JobContainer>
                );
              }
            })}
          </ParentJob>
        )}
      </LandingContainer>
    </LandingSection>
  );
};

// function filteringLanguages() {
//   let filtered = data.map((job) => {
//     for (let i = 0; i < job.languages.lenght; i++) {
//       if (data.languages[i].toLowerCase() === "HTML") {
//         console.log(data.languages[i]);
//         return data.languages[i];
//       }
//     }
//   });
//   console.log(filtered);
// }
// filteringLanguages();
