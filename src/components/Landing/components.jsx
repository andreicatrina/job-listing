import { styled } from "styled-components";

export const LandingSection = styled.div`
  width: 100%;
  min-height: 100vh;
  /* background-color: red; */
`;

export const HeaderSection = styled.header`
  width: 100%;
  height: 80px;
  background-color: var(--primary);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 48px 24px;
  gap: 24px;
  position: relative;
`;

export const ParentJob = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const JobContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  border-radius: 8px;
  padding: 24px;
  cursor: pointer;

  -webkit-box-shadow: 5.5px 3px 7px 4.5px #dddddd;
  -moz-box-shadow: 5.5px 3px 7px 4.5px #dddddd;
  box-shadow: 5.5px 3px 7px 4.5px #dddddd;
  transition: 0.3s;

  &:hover {
    border-left: 4px solid var(--primary);
    padding: 24px 28px 24px 28px;
  }
`;

export const CompanyOfferContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const JobPhotoContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const JobDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CompanyName = styled.span`
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
`;

export const CompanyPosition = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;

export const ShortDetailsContainer = styled.div`
  display: flex;
  gap: 8px;

  span {
    color: var(--darkGrayCyan);
  }
`;

export const JobTechStackContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    font-size: 16px;
    font-weight: 600;
    padding: 4px 6px;
    background-color: var(--lightGrayCyan2);
    color: var(--primary);
    border-radius: 4px;
    transition: 0.6s;

    &:hover {
      color: var(--lightGrayCyan2);
      background-color: var(--primary);
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: -20px;
  width: 100%;
  max-width: ${(props) => props.maxWidth};
  border-radius: 4px;
  border-bottom: 2px solid var(--primary);
  background-color: white;

  input {
    /* border: 1px solid black; */
    border: none;
    height: 40px;
    width: 100%;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    font-size: 20px;
    font-weight: 500;
  }
`;

export const ClearSpan = styled.span`
  display: ${(props) => props.display};
  font-size: 16px;
  font-weight: 600;
  padding-left: 4px;
  cursor: pointer;
`;

export const SearchIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid black; */
  border: none;
  height: 36px;
  width: ${(props) => props.width};
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 2px;
  background-color: ${(props) => props.background};

  svg {
    width: 20px;
    height: 20px;
    color: var(--darkGrayCyan);
    cursor: pointer;
  }
`;
