import FeatureContext from '@app/core/context/feature.context';
import { FeaturePageType } from '@app/enum/feature-page-type.enum';
import { Feature } from '@app/enum/feature.enum';
import { Button } from '@mui/material';
import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './landing-index.container.css';

// images
import LadingtImage from '@app/assets/landing.svg';
import LandingLogoImage from '@app/assets/landinglogo.svg';
import CloudImage from '@app/assets/cloud.svg';
import MoneyImage from '@app/assets/money.svg';
import PeopleImage from '@app/assets/people.svg';

const Landing: FC = () => {
  const navigate = useNavigate();

  const { nextFeature } = useContext(FeatureContext);

  const next = (featureId: Feature) => {
    nextFeature(featureId);
  };

  return (
    <>
      <div className="div1"></div>
      <img className="img1" src={LadingtImage} alt="" />
      <img className="landingLogo" src={LandingLogoImage} alt="" />
      <img className="cloud" src={CloudImage} alt="" />
      <img className="money" src={MoneyImage} alt="" />
      <img className="people" src={PeopleImage} alt="" />
      <div className="div2">
        <p className="title">
          CREATE YOUR<br></br>OWN SHORT LINK
        </p>
        <p className="context">
          產生沒有意義的文字組合（文章？），供排版時填充版面用，但不會因為字義而左右版型的判斷。文字、標點符號出現機率大致符合台灣文章習慣。聽說很多學排版的都會用這個工具。
        </p>
        <Button
          variant="contained"
          className="start rounded-2xl text-white font-medium px-4 py-1"
          onClick={() => next(Feature.Login)}
        >
          Start
        </Button>
        <div className="hr"></div>
        <div className="icon">
          <div className="boxIcon">
            <i className="box ri-archive-fill"></i>
            <p className="littleTitle">多個專案管理</p>
            <p className="icontext">把了角北勢力具不但子臺魚其提！</p>
          </div>
          <div className="chartIcon">
            <i className="chart ri-line-chart-fill"></i>
            <p className="littleTitle">目標族群分析</p>
            <p className="icontext">把了角北勢力具不但子臺魚其提！</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
