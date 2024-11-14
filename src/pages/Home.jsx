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
      <h1>入会のご案内</h1>
      <a href="https://jomo-news-form.spiral-site.com/discussion?_ifbs-discussion=s1_Step1" target="_blank" >
      <input type="button" className="button is-info" value="入会申し込みフォーム" /></a>
      <p>豊富な講師陣による良質な講演をお届けする知的サロンです。ぜひご⼊会ください。</p>
      {/* Add your top list or any content here */}
      <strong>最近の講演</strong>
      <BlogRoll />
      <div className="section" style={{textAlign:'right'}}>
       <Link to="/blog">そのほかの講演を見る <ArrowRight /></Link>
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