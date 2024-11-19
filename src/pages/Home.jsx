// src/pages/Home.jsx
import React from 'react';
import BlogRoll from '../BlogRoll';
import Purpose from '../Purpose';
import Features from '../Features';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { ArrowRight } from 'lucide-react';
const Home = () => {
  return (
    <>
    <div className="section">
    <p>めまぐるしく変化する世界情勢の中で、国内外の動向をより迅速かつ正確に把握することの重要性が増しています。上毛新聞社は、群馬県の政治・経済・文化の更なる発展に寄与すべく、県内の各界のご支援を得て、1968年4月に「群馬政経懇話会」を設立しました。</p>
    <p>&emsp;</p>
    <p>当会では、この目的を達成するため、第一線で活躍する識者を県内外から講師としてお招きし、定期的に講演会を開催しています。これにより、激動する社会の指針となる最新の知見を提供するとともに、会員間の知的交流を深める場を設けております。「タイムリーで質の高い情報を直接得られる」と高い評価をいただいている群馬政経懇話会に、ぜひご入会ください。</p>
    <p>&emsp;</p>
      <h1>入会のご案内</h1>
      <a href="https://jomo-news-form.spiral-site.com/discussion?_ifbs-discussion=s1_Step1" target="_blank" >
      <input type="button" className="button is-info" value="入会申し込みフォーム" /></a>
      <p>豊富な講師陣による良質な講演をお届けする知的サロンです。ぜひご⼊会ください。</p>
      {/* Add your top list or any content here */}
      <p>&emsp;</p>
      <h1>最近の講演</h1>
      <BlogRoll />
      <div className="section" style={{textAlign:'right'}}>
       <Link to="/blog">そのほかの講演を見る <ArrowRight style={{margin:"-.3rem"}} /></Link>
      </div>
      <div className="section">
        <Purpose />
      </div>
      <div className="section">
        <Features />
      </div>
    </div>
    </>
  );
};

export default Home;