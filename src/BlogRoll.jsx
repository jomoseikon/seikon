import React, { useState, useEffect } from "react";
import Airtable from 'airtable';
import 'bulma/css/bulma.min.css';
import { Columns, Card, Content } from 'react-bulma-components';
import { Link } from 'react-router-dom'; // Import Link for navigation

const base = new Airtable({ apiKey: process.env.VITE_APP_AIRTABLE_ACCESS_TOKEN }).base(process.env.VITE_APP_AIRTABLE_BASE_ID);

import "./BlogRoll.css";

const formatDate = (date) => 
    new Intl.DateTimeFormat("ja", {
      day: "numeric", 
      month: "long",
      year: "numeric", 
    }).format(new Date(date));

export default function BlogRoll() {
    const [data, setData] = useState([]);

    useEffect(() => {
        base('Schedule')
            .select({ 
                maxRecords: 12, // Limit to 20 records
                view: 'Grid view'
             })
            .eachPage(
                (records, fetchNextPage) => {
                    setData(records.map((record) => ({
                    ...record.fields,
                    id: record.id
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
                                <p className="title is-5">{item.name}</p>
                                <p className="subtitle is-6">{item.type}</p>
                                <p className="subtitle is-6">{formatDate(item.date)}<br />受付 11:30〜<br />{item.place}</p>
                                {/* Use Link to navigate to the Blog detail page */}
                                <Link to={`/blog/${item.id}`} className="button is-info">
                                    詳細はこちら
                                </Link>
                            </Content>
                        </Card.Content>
                    </Card>
                </Columns.Column>
            ))}
        </Columns>
    );
}