import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";
import Item from "../components/itembox/Item";
import Subscribe from "../components/footer/Subscribe";

// image
import P_Ceramic from "../img/item/PinkCeramic.jpg";
import G_Mug from "../img/item/GoldenMug.jpg";
import Black_Tea from "../img/item/BlackTea.jpg";
import BW from "../img/item/BW.jpg";
import Ceramic_Tea from "../img/item/CeramicTea.jpg";
import Espresso_Mug from "../img/item/EspressoMug.jpg";
import Handle_Bar from "../img/item/HandleBar.jpg";
import Red_Love_Cup from "../img/item/RedLoveCup.jpg";
import Summer_Cup from "../img/item/SummerCup.jpg";
import Winter_Mug from "../img/item/WinterMug.jpg";

//promotion
import Pro_Cover1 from "../img/promotion/pro1.jpg";
import Pro_Cover2 from "../img/promotion/pro2.jpg";
import Pro_Cover3 from "../img/promotion/pro3.jpg";

//story
import Story_1 from "../img/story/story1.jpg";
import Story_2 from "../img/story/story2.jpg";
import Story_3 from "../img/story/story3.jpg";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div className="homepage">
      <div className="container">
        <div className="header-img">
          <div className="header-content">
            <div className="header-text">
              <span>BEST PLACE TO BUY DESIGN</span>
              <h1>Coffee Mugs</h1>
              <p>
                The most versatile furniture system ever created. Designed to
                fit your life, made to move and grow.
              </p>
            </div>
            <Link to={"/"}>EXPLORE OUR PRODUCTS</Link>
          </div>
        </div>

        <div className="content">
          <div className="story">
            <h1>
              Even the all-powerful Pointing has no control about the blind
              texts.
            </h1>
            <p>
              It is a paradisematic country, in which roasted parts of sentences
              fly into your mouth. Even the all-powerful Pointing has no control
              about the blind texts it is an almost unorthographic life One day
              however a small line of blind text by the name of Lorem Ipsum
              decided to leave for the far World of Grammar.
            </p>
            <Link to={"/"}>Read the full Story</Link>
          </div>

          <div className="feature">
            <h1 className="topic">FEATURED MUGS</h1>
            <div className="item-box">
              <Item
                status={"nsale"}
                cover={P_Ceramic}
                name={"Pink Premium Ceramic"}
                price={"99.00"}
              />
              <Item
                status={"sale"}
                cover={G_Mug}
                name={"Golden Designers Mug"}
                price={"69.00"}
                sprice={"50.00"}
              />
            </div>
          </div>

          <div className="products">
            <h1 className="topic">MORE PRODUCTS</h1>
            <div className="item-box">
              <Item
                status={"sale"}
                cover={Red_Love_Cup}
                name={"Red Love Cup"}
                price={"37.00"}
                sprice={"25.00"}
              />
              <Item
                status={"sale"}
                cover={Black_Tea}
                name={"Black Tea Cup"}
                price={"29.00"}
                sprice={"15.00"}
              />
              <Item
                status={"nsale"}
                cover={BW}
                name={"B&W Essentials Mug"}
                price={"19.00"}
              />
              <Item
                status={"nsale"}
                cover={Winter_Mug}
                name={"Winter Style Mug"}
                price={"25.00"}
              />
              <Item
                status={"nsale"}
                cover={Ceramic_Tea}
                name={"Ceramic Tea"}
                price={"46.00"}
              />
              <Item
                status={"nsale"}
                cover={Handle_Bar}
                name={"No Handle Bar Cup"}
                price={"34.00"}
              />
              <Item
                status={"nsale"}
                cover={Espresso_Mug}
                name={"Espresso Cup by Mugs.co"}
                price={"25.00"}
              />
              <Item
                status={"nsale"}
                cover={P_Ceramic}
                name={"Pink Premium Ceramic"}
                price={"99.00"}
              />
              <Item
                status={"nsale"}
                cover={Summer_Cup}
                name={"Summer Designer Cup"}
                price={"29.00"}
              />
            </div>
          </div>

          <div className="promotion">
            <h1 className="topic">BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE</h1>
            <div className="promotion-card">
              <div className="detail">
                <span>PREMIUM OFFER</span>
                <h1>Get our Coffee Magazine</h1>
                <p>
                  The most versatile furniture system ever created.
                  <br />
                  Designed to fit your life.
                </p>
                <Link to={"/"}>Start Shopping</Link>
              </div>
              <div className="cover">
                <img src={Pro_Cover1} alt="pro_cover1" />
                <img src={Pro_Cover2} alt="pro_cover2" />
                <img src={Pro_Cover3} alt="pro_cover3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="parallax"></div>

      <div className="story">
        <div className="container">
          <h1 className="topic">BEHIND THE MUGS, LIFESTYLE STORIES</h1>

          <div className="story-box">
            <div className="story-item">
              <div className="cover">
                <img src={Story_1} alt="story-1" />
                <Link to={"/"}>
                  <p>Read The Full Story</p>
                </Link>
              </div>
              <div className="detail">
                <Link to={"/"}>
                  <h1>
                    Health Check: why do I get a headache when I haven’t had my
                    coffee?
                  </h1>
                </Link>
                <p>
                  It is a paradisematic country, in which roasted parts of
                  sentences fly into your mouth.
                </p>
                <span>OCTOBER 9, 2018</span>
              </div>
            </div>

            <div className="story-item">
              <div className="cover">
                <img src={Story_2} alt="story-2" />
                <Link to={"/"}>
                  <p>Read The Full Story</p>
                </Link>
              </div>
              <div className="detail">
                <Link to={"/"}>
                  <h1>
                    It is a paradisematic country, in which roasted parts. Vel
                    qui et ad voluptatem.
                  </h1>
                </Link>
                <p>
                  It is a paradisematic country, in which roasted parts. Vel qui
                  et ad voluptatem.
                </p>
                <span>OCTOBER 9, 2018</span>
              </div>
            </div>

            <div className="story-item">
              <div className="cover">
                <img src={Story_3} alt="story-3" />
                <Link to={"/"}>
                  <p>Read The Full Story</p>
                </Link>
              </div>
              <div className="detail">
                <Link to={"/"}>
                  <h1>
                    Recent research suggests that heavy coffee drinkers may reap
                    health benefits.
                  </h1>
                </Link>
                <p>
                  It is a paradisematic country, in which roasted parts of
                  sentences fly into your mouth.
                </p>
                <span>OCTOBER 9, 2018</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
