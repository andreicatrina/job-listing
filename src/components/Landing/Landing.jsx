import { React, useState } from "react";

import data from "../../utils/data.json";

import {
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
  SearchContainer,
  SearchIconContainer,
  ShortDetailsContainer,
} from "./components";

import { FaSearch } from "react-icons/fa";

import headerBg from "../../assets/bg-header-desktop.svg";

import img from "../../assets/manage.svg";

export const Landing = () => {
  const [searchBar, setSearchBar] = useState(false);

  function onClickSearchBar() {
    if (searchBar === false) {
      setSearchBar(true);
    } else {
      setSearchBar(false);
    }
  }

  return (
    <LandingSection>
      <HeaderSection>
        <img src={headerBg} alt="" />
      </HeaderSection>
      <LandingContainer>
        <SearchContainer maxWidth={searchBar ? "600px" : "0px"}>
          <input type="search" />
          <SearchIconContainer onClick={onClickSearchBar} background={searchBar ? "white" : "none"}>
            <FaSearch />
          </SearchIconContainer>
        </SearchContainer>
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
        })}
      </LandingContainer>
    </LandingSection>
  );
};
