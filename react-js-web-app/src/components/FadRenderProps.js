import React from 'react';

import DoctorComponent from '../shared/DoctorComponent';

function FadRenderProps() {
  return (
    <div className="App">
      <DoctorComponent render={({ docs, filteredDocs, searchBy, filterBy, isLoading, num, onChangeText, getDoctorsOnType, getPhotoUrl }) => {
        return (
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
                  <div>
                    <img src={getPhotoUrl(d)} />
                    <div>{d.tm_X3b_en_title[0]}</div>

                    <div style={{ textAlign: 'center' }}>{d.specialties_specific}</div>

                    <div style={{ textAlign: 'center' }}><div style={{ fontWeight: 'bold' }}>Duke</div> Health Provider</div>

                  </div>
                )
              })
            }

          </div>
        )
      }} />

    </div>
  );
}

export default FadRenderProps;
