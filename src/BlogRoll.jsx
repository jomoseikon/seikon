import React from "react";
import { useState, useEffect  } from 'react';
import Airtable from 'airtable';
import 'bulma/css/bulma.min.css';
import { Columns } from 'react-bulma-components';

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
      <Columns multiline>
          {data.map((item, index) => (
              <Columns.Column key={index} size={3}>
                  <div>
                      {item.name}<br />
                      <img src={item.image?.[0]?.url || 'default_image_url'} alt={item.name} />
                      <br />{item.type}
                  </div>
              </Columns.Column>
          ))}
      </Columns>
  );
}