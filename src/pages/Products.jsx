// src/pages/Products.jsx
import React from 'react';
import tutorials from "../img/tutorials.jpg";
import meetingSpace from '../img/meeting-space.jpg'; 
import coffeeGear from '../img/coffee-gear.jpg';
import coffee from '../img/coffee.jpg';
import pdfFile from '../assets/seikon2024.pdf';
import Overview from '../Overview';
import { FileType } from 'lucide-react';
const Products = () => {
  return (
    <div>
    <div className="section" >
      <h1>入会のご案内</h1>
      <a href="https://jomo-news-form.spiral-site.com/discussion?_ifbs-discussion=s1_Step1" target="_blank" >
      <input type="button" className="button is-info" value="入会申し込みフォーム" /></a><br />
      <div className="columns is-centered">
        <div className="column is-12-desktop is-10-tablet is-6-mobile">
        <p className="text-small">豊富な講師陣による良質な講演をお届けする知的サロンです。ぜひご⼊会ください。</p>
        </div>
      </div>

      {/* Add your products list or any content here */}
      <div className="columns is-centered">
        <div className="column is-4-desktop is-4-tablet is-6-mobile" style={{justifyItems:"center"}}>
          <img src={tutorials} /><br />
          <p className="text-small">毎月１回（8月休会）、昼食会の後に多彩な講師を迎えて講演会を開催します。 併せて経済誌「プレジデント」（月2回）の定期配布なども行い、会員組織の「知的サロン」として喜ばれています。 年会費は72,000円です。</p>
        </div>
        <div className="column is-1-desktop is-1-tablet">
          &emsp;
        </div>
        <div className="column is-4-desktop is-4-tablet is-6-mobile" style={{justifyItems:"center"}}>
          <img src={meetingSpace} /><br />
          <p className="text-small">国内外の「話題のテーマ」を取り上げ、幅広い分野の講師を招いて、お話を伺います。 様々な社会の変化に対応する考え方や、解決する課題を見つけるきっかけにしていただけます。</p>
        </div>
      </div>
      <br />
      <div className="columns is-centered">
        <div className="column is-4-desktop is-4-tablet is-6-mobile" style={{justifyItems:"center"}}>
          <img src={coffeeGear} /><br />
          <p className="text-small">様々な分野の人の話を聞く機会は、考えやアクテビティを向上させる良いきっかけとなります。また、現代社会の中で、最近の情報をすばやく取り入れることは、時代を生き抜くために必須です。適切なキーワードやネットワークを探すのも、様々な視点が必要になります。</p>
        </div>
        <div className="column is-1-desktop is-1-tablet">
          &emsp;
        </div>
        <div className="column is-4-desktop is-4-tablet is-6-mobile" style={{justifyItems:"center"}}>
          <img src={coffee} /><br />
          <p>政経懇話会に参加することで、新たなコミュニティーの構築が可能。県内の政治経済文化界において幅広いネットワークを形成することができます。</p>
        </div>
      </div>
      <Overview />
      <div className="section is-flex-mobile is-flex-desktop">
         <a href={pdfFile} target="_blank" rel="noopener noreferrer"><h2><FileType size={24} />&nbsp;PDF ダウンロード</h2></a>
      </div>
      <div className="section is-flex-mobile is-flex-desktop">
        <a href="https://jomo-news-form.spiral-site.com/discussion?_ifbs-discussion=s1_Step1" target="_blank" >
        <input type="button" className="button is-danger is-outlined" value="入会申し込みフォーム" /></a>
      </div>
    </div>

   

    </div>
  );
};

export default Products;
