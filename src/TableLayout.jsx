import React, { useState, useEffect, useRef } from "react";
import Airtable from 'airtable';
import 'bulma/css/bulma.min.css';
import { Link } from 'react-router-dom';
import "./TableLayout.css";

const base = new Airtable({ apiKey: process.env.VITE_APP_AIRTABLE_ACCESS_TOKEN }).base(process.env.VITE_APP_AIRTABLE_BASE_ID);

const formatDate = (dateStr) => {
    try {
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) {
            return "日付未定";
        }
        return new Intl.DateTimeFormat("ja", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }).format(date);
    } catch (error) {
        return "日付未定";
    }
};

// New utility function to truncate text
const truncateText = (text, maxLength = 50) => {
    if (!text) return '';
    return text.length > maxLength 
        ? text.substring(0, maxLength) + '...' 
        : text;
};

export default function TableLayout() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hasScroll, setHasScroll] = useState(false);
    const tableWrapRef = useRef(null);

    // Check if table needs scroll
    useEffect(() => {
        const checkScroll = () => {
            if (tableWrapRef.current) {
                const { scrollWidth, clientWidth } = tableWrapRef.current;
                setHasScroll(scrollWidth > clientWidth);
            }
        };

        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, [data]);

    useEffect(() => {
        setLoading(true);
        base('Schedule')
            .select({
                view: 'Grid view',
                sort: [{ field: 'date', direction: 'desc' }]
            })
            .eachPage(
                (records, fetchNextPage) => {
                    const formattedRecords = records.map((record) => ({
                        ...record.fields,
                        id: record.id,
                        date: record.fields.date || null
                    }));
                    setData(formattedRecords);
                    setLoading(false);
                    fetchNextPage();
                },
                (err) => {
                    if (err) {
                        console.error('Error loading data:', err);
                        setError(err);
                    }
                    setLoading(false);
                }
            );
    }, []);

    if (loading) return (
        <div className="container">
            <div className="section">
                <div className="has-text-centered">Loading...</div>
            </div>
        </div>
    );

    if (error) return (
        <div className="container">
            <div className="section">
                <div className="has-text-centered has-text-danger">
                    Error loading data: {error.message}
                </div>
            </div>
        </div>
    );

    return (
        <div className="container">
            <div className="section">
                <div className="columns is-mobile is-multiline is-centered">
                    <div className="column is-12">
                        <h1>最近の講演</h1>
                        {hasScroll && (
                            <p className="has-text-left mb-3">
                                <small>※↓画面を横にスクロールできます</small>
                            </p>
                        )}
                        <div 
                            ref={tableWrapRef}
                            className={`table_wrap ${hasScroll ? 'has-scroll' : ''}`}
                        >
                            <table className="table is-fullwidth tbl-inner">
                                <thead>
                                    <tr>
                                        <th>氏名</th>
                                        <th>所属</th>
                                        <th>講演テーマ</th>
                                        <th>日付</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item) => (
                                        <tr key={item.id}>
                                            <td>
                                                <Link 
                                                    to={`/blog/${item.id}`} 
                                                    title={item.name}
                                                >
                                                    {truncateText(item.name, 20) || '無題'}
                                                </Link>
                                            </td>
                                            <td title={item.katagaki}>
                                                {truncateText(item.katagaki, 30)}
                                            </td>
                                            <td title={item.title}>
                                                {truncateText(item.title, 50)}
                                            </td>
                                            <td>{formatDate(item.date)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}