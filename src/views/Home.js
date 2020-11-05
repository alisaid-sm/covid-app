import React, {useEffect} from "react";

import { useSelector, useDispatch } from 'react-redux'

import BG from "../assets/img/head 2.png"

import { GET_ALL_COUNTRIES } from '../redux/actions/country'
import { GET_DETAIL_CORONA } from '../redux/actions/corona'

export default function Home() {
  const dispatch = useDispatch()
  const country = useSelector((state) => state.country)
  const getCorona = useSelector((state) => state.corona)
  // console.log(getCorona)
  const corona = getCorona.list[getCorona.list.length - 1]

  useEffect(() => {
    dispatch(GET_ALL_COUNTRIES())
    dispatch(GET_DETAIL_CORONA())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="cont text-center">
        <div className="logo">
            <img src={BG} alt="BG" />
        </div>
        <div className="date-new">
            <p>Terakhir Update : 01 Oktober 2020 </p>
        </div>
        <div className="form-group select-custom">
            <select className="form-control" >
                <option defaultValue>Negara</option>
                {
                  country.list.map((item, index) => (
                    <option key={index} value={item.Slug} >{item.Country}</option>
                  ))
                }
            </select>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="card mb-md-3" style={{borderBottom: "solid 21.63px #7F90FC"}}>
                <div className="card-body">
                  <p className="card-title">kasus</p>
                  <p className="card-number">{ corona.Confirmed }</p>
                  <p className="card-title">Orang</p>
                  <p className="card-text">Jumlah angka kasus COVID - 19</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card mb-md-3" style={{borderBottom: "solid 21.63px #90FE99"}}>
                <div className="card-body">
                    <p className="card-title" >Sembuh</p>
                    <p className="card-number">{ corona.Recovered }</p>
                    <p className="card-title">Orang</p>
                    <p className="card-text">Jumlah angka sembuh COVID - 19</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="card mb-md-3" style={{borderBottom: "solid 21.63px #FE7F89"}}>
                  <div className="card-body">
                    <p className="card-title" >Meninggal</p>
                    <p className="card-number">{ corona.Deaths }</p>
                    <p className="card-title">Orang</p>
                    <p className="card-text">Jumlah angka meninggal COVID - 19</p>
                  </div>
                </div>
              </div>
          </div>
    </div>
  );
}