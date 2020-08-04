import doctorsArray from './doctors';


const getDoctorsSolr = (filterBy = '') => {

  let filteredDoc = [];
  doctorsArray.forEach((d) => {
    if (d.tm_X3b_en_title[0].toLowerCase().indexOf(filterBy && filterBy.toLowerCase()) > -1 && d.ss_physician_photo_url) {
      filteredDoc.push(JSON.parse(JSON.stringify(d)));
    }
  });

  return filteredDoc;
};

const getPhotoUrl = (d) => {
  let url = d.ss_physician_photo_url;
  return 'https://www.dukehealth.org' + (url ? url : '/themes/custom/dukehealth/images/default_physician_photo.png');
};

const filterByText = (doc, text) => {
  docs.forEach((d) => {
    if (d.tm_X3b_en_title[0].toLowerCase().indexOf(filterBy && filterBy.toLowerCase()) > -1) {
      filteredDoc.push(JSON.parse(JSON.stringify(d)));
    }
  });
};

export {
  getDoctorsSolr,
  getPhotoUrl,
  filterByText,
}