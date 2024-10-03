import React from "react";
import { useState, useEffect  } from 'react';
import Airtable from 'airtable';
const base = new Airtable({ apiKey: process.env.VITE_APP_AIRTABLE_ACCESS_TOKEN }).base(process.env.VITE_APP_AIRTABLE_BASE_ID);

import "./BlogRoll.css";
export default function BlogRoll() {
    const [data, setData] = useState([]);

    useEffect(() => {
        base('Schedule').select({ view: 'Grid view' }).eachPage((records, fetchNextPage) => {
          setData(records.map((record) => record.fields));
          fetchNextPage();
        });
      }, []);

    return (

<div className="columns">
  
    {data.map((item, index) => (
      <div key={index} className="column is-3">{item.name}<br />
      <img src={item.image?.[0]?.url || 'default_image_url'}  />
      <br />{item.type}
      </div>
    ))}


</div>

    );
}