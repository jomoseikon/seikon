import React, { useState, useEffect } from 'react';
import Airtable from 'airtable';
import 'bulma/css/bulma.min.css';
import { Container, Section, Heading, Image, Content, Columns } from 'react-bulma-components';
import { useParams } from 'react-router-dom';
import "./Blog.css";
const base = new Airtable({ apiKey: process.env.VITE_APP_AIRTABLE_ACCESS_TOKEN }).base(process.env.VITE_APP_AIRTABLE_BASE_ID);

export default function Blog() {
    const [item, setItem] = useState(null);
    const { id } = useParams(); // Get the ID from URL params
    
    useEffect(() => {
        base('Schedule').find(id, (err, record) => {
            if (err) {
                console.error(err);
                return;
            }
            setItem(record.fields);
        });
    }, [id]);

    if (!item) {
        return <div>Loading...</div>;
    }

    return (
        <Section>

                <Content>
                <Columns.Column size={10} className="is-offset-1">
                <Heading>{item.title}</Heading>
                    <h2>{item.name}</h2>
                    <p><strong>日時:</strong> {item.date}</p>
                    <p>●受付・昼食: 11:30〜</p>
                    <p>●講演: 12:30〜14:00</p>
                    <p><strong>会場:</strong> {item.place} ({item.address})</p>
                    <p><strong>Tel:</strong> {item.tel}</p>
                    </Columns.Column>
                    <Columns.Column size={4} className="is-offset-1">
                    <Image src={item.image?.[0]?.url || 'default_image_url'} alt={item.name} />
                    </Columns.Column>
                    <Columns.Column size={10} className="is-offset-1">
                    <h3>{item.name} {item.kana}</h3>
                    <p>{item.katagaki}</p>
                    <h4>《プロフィール》</h4>
                    <p>{item.profile}</p>
                    <h4>日時&emsp;{item.date}</h4>
                    <h4>会場&emsp;{item.place}</h4>
                    <h4>住所&emsp;{item.address}</h4>
                </Columns.Column>
                </Content>

        </Section>
    );
}