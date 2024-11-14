import React, { useState, useEffect } from "react";
import 'bulma/css/bulma.min.css';
import { Columns } from 'react-bulma-components';
import Lecture from './img/002lecture.jpg';

export default function Features() {
    return (
    <div className="section">
        <Columns multiline>
        <Columns.Column size={6}>
        <h2 className="title is-4">講演会の特徴</h2>
                <article className="message is-small">
                    <div className="message-body mb-1">
                    <span className="title is-6">⼀流の講師</span>
                    <p>県内外で活躍する⼀流の講師を招いて講演会を開催します。</p>
                    </div>
                    <div className="message-body mb-1">
                    <span className="title is-6">タイムリーな情報</span>
                    <p>激動する社会の指針となるホットな情報を提供します。</p>
                    </div>
                    <div className="message-body mb-1">
                    <span className="title is-6">定期開催</span>
                    <p>毎⽉1回、政治経済、国際、⽂化など幅広い分野の講演を⾏い
                    ます。</p>
                    </div>
                </article>
        </Columns.Column>
        <Columns.Column size={6}>
        <img src={Lecture} alt="business lecture" />
        </Columns.Column>
        </Columns>
    </div>
    );
}