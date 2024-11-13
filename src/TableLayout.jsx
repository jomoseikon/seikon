import React, { useState, useEffect } from "react";
import Airtable from 'airtable';
import 'bulma/css/bulma.min.css';
import { Link } from 'react-router-dom';
import "./TableLayout.css"; 

const base = new Airtable({ apiKey: process.env.VITE_APP_AIRTABLE_ACCESS_TOKEN }).base(process.env.VITE_APP_AIRTABLE_BASE_ID);

const formatDate = (date) => 
    new Intl.DateTimeFormat("ja", {
      day: "numeric", 
      month: "long",
      year: "numeric", 
    }).format(new Date(date));

export default function TableLayout() {
    const [data, setData] = useState([]);

    useEffect(() => {
        base('Schedule').select({ view: 'Grid view' }).eachPage((records, fetchNextPage) => {
            setData(records.map((record) => ({
                ...record.fields,
                id: record.id
            })));
            fetchNextPage();
        });
    }, []);

  return (
    <div className="container">
    <div className="section">
    <div className="columns is-mobile is-mutiline is-centered">
        <div className="column is-12 table_wrap">
        <h2 className="title is-3">最近の講演</h2>
            <p className="has-text-left">
                <small>※↓画面を横にスクロールできます</small>
            </p>
            <table className="table is-fullwidth tbl-inner">
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td><Link to={`/blog/${item.id}`} >{item.name}</Link></td>
                            <td>{formatDate(item.date)}</td>
                            <td>{item.place}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    </div>
    </div>
  )
}