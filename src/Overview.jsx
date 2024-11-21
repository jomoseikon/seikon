import 'bulma/css/bulma.min.css';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Overview.css';

export default function Overview() {
    return (
            <div className="section">
                <div className="columns is-mobile is-mutiline is-centered">
                <div className="column is-12">
                  <div className="table_wrap">
                    <table className="table is-fullwidth tbl-inner2">
                        <tbody>
                            <tr>
                                <td><p className="has-text-left mb-3"><small>※↓画面を横にスクロールできます</small></p></td>
                            </tr>
                            <tr>
                                <td>●経営者、自治体、議会、各種団体などの会員で構成</td>
                            </tr>
                            <tr>
                                <td>●毎月1回（8月休会）昼食後に多彩な講師を迎えて講演会を開催（代理出席も可能）</td>
                            </tr>
                            <tr>
                                <td>●経済誌「プレジデント」（月2回）お届け</td>
                            </tr>
                            <tr>
                                <td>●年会費	72,000円 </td>
                            </tr>
                            <tr>
                                <td>●会場	前橋市内 </td>
                            </tr>
                            <tr>
                                <td>●問い合わせ	群馬政経懇話会事務局（上毛新聞社営業局事業部内）<br />TEL: 027-254-9955 FAX: 027-254-9906（平日 9:00〜17:00）</td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
                </div>
                </div>
            </div>
    );
}