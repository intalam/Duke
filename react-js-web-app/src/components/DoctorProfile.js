import React from 'react';

import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";

import { getDoctorById, getPhotoUrl } from '../shared/fad-utils';

const DoctorProfile = (props) => {

  const id = new URLSearchParams(useLocation().search).get('id');
  const d = getDoctorById(id);

  return (
    <>
      {
        !d && <h1>No doctor this ID</h1>
      }
      {
        !!d && <>
          <div>
            <img src={getPhotoUrl(d)} />
            <div>{d.tm_X3b_en_title[0]}</div>
            <div >{d.specialties_specific}</div>
            <div>
              <div>Duke</div>
              Health Provider
            </div>
          </div>
        </>
      }
    </>
  )
};

export default DoctorProfile;