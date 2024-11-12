import React, { useState, useEffect } from "react";
import Airtable from 'airtable';
import 'bulma/css/bulma.min.css';
import { Link } from 'react-router-dom';
import "./TableLayout.css"; 

const base = new Airtable({ apiKey: process.env.VITE_APP_AIRTABLE_ACCESS_TOKEN }).base(process.env.VITE_APP_AIRTABLE_BASE_ID);

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
    <>
    <div className="columns is-mobile is-mutiline">
        <div className="column is-12 table_wrap">
            <p className="has-text-left">
                <small>※↓画面を横にスクロールできます</small>
            </p>
            <table className="table is-fullwidth tbl-inner">
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td><Link to={`/blog/${item.id}`} >{item.name}</Link></td>
                            <td>{item.date}</td>
                            <td>{item.place}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}