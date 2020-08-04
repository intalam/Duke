import React, { useState, useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import {SET_DOCTORS, setDoctors} from '../shared/redux/actions';

import { getDoctorsSolr, getPhotoUrl, filterByText } from '../shared/fad-utils';
import { Link } from 'react-router-dom';
import doctors from '../shared/doctors';

var timeout = null;
const Doctors = ({ navigation, ...props }) => {

  const dispatch = useDispatch();
  const docs = useSelector(state => state.doctors);
  const filteredDocs = useSelector(state => state.doctors);
  const [searchBy, setSearchBy] = useState('');
  const [filterBy, setFilterBy] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const num = useSelector(state => state.doctors.length);

  useEffect(() => {
    getDoctors();
  }, []);

  const getDoctors = (text = '') => {
    clearTimeout(timeout);
    setIsLoading(true);
    timeout = setTimeout(() => {
      let filteredDoc = getDoctorsSolr(text);
      dispatch(setDoctors(filteredDoc));
      setIsLoading(false);
    }, 1000);

  };

  const onChangeText = (text) => {
    setFilterBy(text);
    dispatch(setDoctors(filterByText(docs, text)));
  };

  const getDoctorsOnType = (text) => {
    setSearchBy(text);
    getDoctors(text);
  };

  return (
    <div className="App">

      <div>
        <div className="head">Doctors {!isLoading && ('( ' + num + ' match Found )')}</div>
        <h2>Doctors filtered by: {searchBy}</h2>
        <div>
          <input
            className="input"
            onChange={e => getDoctorsOnType(e.target.value)}
            value={searchBy}
            placeholder={'Type to get docs from SOLR'}
          />
        </div>

        <div>
          <input
            className="input"
            onChange={e => onChangeText(e.target.value)}
            value={filterBy}
            placeholder={'Type to get docs from SOLR'}
          />
        </div>

        {
          isLoading && <div><h1>Loading...</h1></div>
        }
        {
          !isLoading && filteredDocs && !filteredDocs.length && <>
            <div><div style={{ fontSize: 20, color: '#00539b' }}>No Match Found</div></div>
          </>
        }

        {
          !isLoading && filteredDocs && filteredDocs.map((d) => {
            return (
              <div key={d.its_field_duke_id}>
                <Link className="photo-link" to={"/doctor-profile?id="+d.its_field_duke_id}>
                  <img src={getPhotoUrl(d)} />
                </Link>
                <Link className="title-link" to={"/doctor-profile?id="+d.its_field_duke_id}>
                  <div>{d.tm_X3b_en_title[0]}</div>
                </Link>

                <div style={{ textAlign: 'center' }}>{d.specialties_specific}</div>

                <div style={{ textAlign: 'center' }}><div style={{ fontWeight: 'bold' }}>Duke</div> Health Provider</div>

              </div>
            )
          })
        }

      </div>


    </div>
  );
};

export default Doctors;
