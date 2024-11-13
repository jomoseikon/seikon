import React, { useState, useEffect } from "react";
import 'bulma/css/bulma.min.css';
import { Columns } from 'react-bulma-components';

export default function Purpose() {
    return (
        <div className="section">
            <Columns multiline>
                <Columns.Column size={6}>
                <article className="message padding:1rem;">
                
                </article>
                </Columns.Column>
                <Columns.Column size={6}>
                <h2 className="title is-4">設立の目的</h2>
                <article className="message padding:1rem;">
                    
                </article>
                </Columns.Column>
            </Columns>
        </div>
    );
}