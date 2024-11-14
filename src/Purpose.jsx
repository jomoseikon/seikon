import React, { useState, useEffect } from "react";
import 'bulma/css/bulma.min.css';
import { Columns } from 'react-bulma-components';
import meetingScene from './img/001meeting.jpg';
export default function Purpose() {
    return (
        <div className="section">
            <Columns multiline>
                <Columns.Column size={6}>
                <article className="message padding:1rem;">
                  <img src={meetingScene} alt="business scene" />
                </article>
                </Columns.Column>
                <Columns.Column size={6}>
                <h2 className="title is-4">設立の目的</h2>
                <article className="message is-small">
                    <div className="message-body mb-1">
                    <span className="title is-6">情報提供</span>
                    <p>国内外の情勢をより早く、より正確に知ることを⽬指します。</p>
                    </div>
                    <div className="message-body mb-1">
                    <span className="title is-6">知的交流</span>
                    <p>会員相互の知的交流を深めることを⽬的としています。</p>
                    </div>
                    <div className="message-body mb-1">
                    <span className="title is-6">県の発展</span>
                    <p>群⾺県の政治·経済·⽂化の発展に寄与します。</p>
                    </div>
                </article>
                </Columns.Column>
            </Columns>
        </div>
    );
}