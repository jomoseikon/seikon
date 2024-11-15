// src/pages/Products.jsx
import React from 'react';
import tutorials from "../img/tutorials.jpg";
import meetingSpace from '../img/meeting-space.jpg'; 
import coffeeGear from '../img/coffee-gear.jpg';
import coffee from '../img/coffee.jpg';
import Overview from '../Overview';
const Products = () => {
  return (
    <div className="container">
    <div className="section" >
      <h1>入会のご案内</h1>
      <a href="https://jomo-news-form.spiral-site.com/discussion?_ifbs-discussion=s1_Step1" target="_blank" >
      <input type="button" className="button is-info" value="入会申し込みフォーム" /></a><br />
      <div className="columns is-centered">
        <div className="column is-12-desktop is-10-tablet is-7-mobile">
         豊富な講師陣による良質な講演をお届けする知的サロンです。ぜひご⼊会ください。
        </div>
      </div>
      
      {/* Add your products list or any content here */}
      <div className="columns is-centered">
        <div className="column is-6-desktop is-6-tablet is-7-mobile" style={{justifyItems:"center"}}>
          <img src={tutorials} /><br />
          <p>毎月１回（8月休会）、昼食会の後に多彩な講師を迎えて講演会を開催します。 併せて経済誌「プレジデント」（月2回）の定期配布なども行い、会員組織の「知的サロン」として喜ばれています。 年会費は72,000円です。</p>
        </div>
        <div className="column is-6-desktop is-6-tablet is-7-mobile" style={{justifyItems:"center"}}>
          <img src={meetingSpace} /><br />
          <p>国内外の「話題のテーマ」を取り上げ、幅広い分野の講師を招いて、お話を伺います。 様々な社会の変化に対応する考え方や、解決する課題を見つけるきっかけにしていただけます。</p>
        </div>
      </div>
      <br />
      <div className="columns is-centered">
        <div className="column is-6-desktop is-6-tablet is-7-mobile" style={{justifyItems:"center"}}>
          <img src={coffeeGear} /><br />
          <p>毎月１回（8月休会）、昼食会の後に多彩な講師を迎えて講演会を開催します。 併せて経済誌「プレジデント」（月2回）の定期配布なども行い、会員組織の「知的サロン」として喜ばれています。 年会費は72,000円です。</p>
        </div>
        <div className="column is-6-desktop is-6-tablet is-7-mobile" style={{justifyItems:"center"}}>
          <img src={coffee} /><br />
          <p>国内外の「話題のテーマ」を取り上げ、幅広い分野の講師を招いて、お話を伺います。 様々な社会の変化に対応する考え方や、解決する課題を見つけるきっかけにしていただけます。</p>
        </div>
      </div>
      <Overview />
    </div>

    

    </div>
  );
};

export default Products;
