import React from "react";
import { useState, useEffect } from 'react';
import Airtable from 'airtable';
import 'bulma/css/bulma.min.css';
import { Columns, Card, Content } from 'react-bulma-components';
import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed

const base = new Airtable({ apiKey: process.env.VITE_APP_AIRTABLE_ACCESS_TOKEN }).base(process.env.VITE_APP_AIRTABLE_BASE_ID);

import "./BlogRoll.css";

export default function BlogRoll() {
    const [data, setData] = useState([]);

    useEffect(() => {
        base('Schedule').select({ view: 'Grid view' }).eachPage((records, fetchNextPage) => {
            setData(records.map((record) => ({
                ...record.fields,
                id: record.id // Include the record ID for linking
            })));
            fetchNextPage();
        });
    }, []);

    return (
        <Columns multiline>
            {data.map((item) => (
                <Columns.Column key={item.id} size={3}>
                    <Card>
                        <Card.Image src={item.image?.[0]?.url || 'default_image_url'} alt={item.name} />
                        <Card.Content>
                            <Content>
                                <p className="title is-4">{item.name}</p>
                                <p className="subtitle is-6">{item.type}</p>
                                <Link to={`/seminar/${item.id}`} className="button is-link">
                                    View Details
                                </Link>
                            </Content>
                        </Card.Content>
                    </Card>
                </Columns.Column>
            ))}
        </Columns>
    );
}