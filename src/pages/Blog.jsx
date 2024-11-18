import React, { useState, useEffect } from 'react';
import Airtable from 'airtable';
import 'bulma/css/bulma.min.css';
import { Container, Section, Heading, Image, Content, Columns } from 'react-bulma-components';
import { useParams } from 'react-router-dom';
import "./Blog.css";

const base = new Airtable({ apiKey: process.env.VITE_APP_AIRTABLE_ACCESS_TOKEN }).base(process.env.VITE_APP_AIRTABLE_BASE_ID);

export default function Blog() {
    const [item, setItem] = useState({}); // 初期化を空オブジェクトに変更
    const { id } = useParams();

    useEffect(() => {
        base('Schedule').find(id, (err, record) => {
            if (err) {
                console.error(err);
                return;
            }
            setItem(record.fields);
        });
    }, [id]);

    const { 
        title, name, date, place, address, tel, image, kana, katagaki, profile 
    } = item; // 分割代入でフィールドを展開

    if (!title) {
        return <div>Loading...</div>; // title がない場合、読み込み中を表示
    }

    return (
        <Section>
            <Content>
                <Columns.Column size={10} className="is-offset-1">
                    <Heading>{title}</Heading>
                    <h2>{name}</h2>
                    <p><strong>日時:</strong> {date}</p>
                    <p>●受付・昼食: 11:30〜</p>
                    <p>●講演: 12:30〜14:00</p>
                    <p><strong>会場:</strong> {place} ({address})</p>
                    <p><strong>Tel:</strong> {tel}</p>
                </Columns.Column>

                <Columns.Column size={4} className="is-offset-1">
                    <Image 
                        src={image?.[0]?.url || 'default_image_url'} 
                        alt={name} 
                    />
                </Columns.Column>

                <Columns.Column size={10} className="is-offset-1" style={{backgroundColor:"#f8f8f8"}}>
                    <h3>{name} {kana}</h3>
                    <p>{katagaki}</p>
                    <h4>《プロフィール》</h4>
                    <p>{profile}</p>
                    <h4>日時&emsp;{date}</h4>
                    <h4>会場&emsp;{place}</h4>
                    <h4>住所&emsp;{address}</h4>
                </Columns.Column>
            </Content>
        </Section>
    );
}
