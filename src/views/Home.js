import React, {useEffect, useState} from "react";

import { useSelector, useDispatch } from 'react-redux'

import BG from "../assets/img/head 2.png"

import { GET_ALL_COUNTRIES } from '../redux/actions/country'
import { GET_DETAIL_CORONA } from '../redux/actions/corona'

export default function Home() {
  let [countrySelect, setCountrySelect] = useState('')
  const dispatch = useDispatch()
  const country = useSelector((state) => state.country)
  const getCorona = useSelector((state) => state.corona)
  const coronaFilter = getCorona.list[getCorona.list.length - 1] 
  const { Confirmed, Recovered, Deaths, Date } = coronaFilter === undefined? { Confirmed: 0, Recovered: 0, Deaths: 0, Date: '' } : coronaFilter
  const kasus = Confirmed.toString().split('').reverse().join('').match(/\d{1,3}/g).join('.').split('').reverse().join('')
  const sembuh = Recovered.toString().split('').reverse().join('').match(/\d{1,3}/g).join('.').split('').reverse().join('')
  const mati = Deaths.toString().split('').reverse().join('').match(/\d{1,3}/g).join('.').split('').reverse().join('')
  const tanggal = Date.substr(0, 10)
  // console.log({kasus, sembuh, mati, tanggal})
  const onCountrySelect = (value) => {
    setCountrySelect(countrySelect = value)
    dispatch(GET_DETAIL_CORONA(countrySelect))
  }
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
            <p>Terakhir Update : { tanggal } </p>
        </div>
        <div className="form-group select-custom">
            <select className="form-control" value={ countrySelect } onChange={(val) => onCountrySelect(val.target.value)}>
                <option value={''} defaultValue>Negara</option>
                {
                  country.list.map((item, index) => (
                    <option key={index} value={item.Slug} >{item.Country}</option>
                  ))
                }
            </select>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="card" style={{borderBottom: "solid 21.63px #7F90FC"}}>
                <div className="card-body">
                  <p className="card-title">Kasus</p>
                  <p className="card-number">{ kasus }</p>
                  <p className="card-title">Orang</p>
                  <p className="card-text">Jumlah angka kasus COVID - 19</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card" style={{borderBottom: "solid 21.63px #90FE99"}}>
                <div className="card-body">
                    <p className="card-title" >Sembuh</p>
                    <p className="card-number">{ sembuh }</p>
                    <p className="card-title">Orang</p>
                    <p className="card-text">Jumlah angka sembuh COVID - 19</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="card" style={{borderBottom: "solid 21.63px #FE7F89"}}>
                  <div className="card-body">
                    <p className="card-title" >Meninggal</p>
                    <p className="card-number">{ mati }</p>
                    <p className="card-title">Orang</p>
                    <p className="card-text">Jumlah angka meninggal COVID - 19</p>
                  </div>
                </div>
              </div>
          </div>
    </div>
  );
}