import React, { useState, useEffect } from 'react';

import doctorsArray from './doctors';

import {getDoctorsSolr, getPhotoUrl, filterByText} from '../shared/fad-utils';

import Axios from 'axios';
var timeout = null;
const DoctorComponent = (props) => {

	const [docs, setDocs] = useState(doctorsArray);
	const [filteredDocs, setFilteredDocs] = useState(doctorsArray);
	const [searchBy, setSearchBy] = useState('');
	const [filterBy, setFilterBy] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [num, setNum] = useState(0);

	useEffect(() => {
		getDoctors();
	}, []);

	const getDoctors = (text = '') => {
		clearTimeout(timeout);
		setIsLoading(true);
		timeout = setTimeout(() => {
			let filteredDoc = getDoctorsSolr(text);
			setNum(filteredDoc.length);
			setFilteredDocs(filteredDoc);
			setIsLoading(false);
		}, 1000);

	};

	const onChangeText = (text) => {
		setFilterBy(text);
		setFilteredDocs(filterByText(docs, text));
	};

	const getDoctorsOnType = (text) => {
		setSearchBy(text);
		getDoctors(text);
	};

	return (
    props.render({docs, filteredDocs, searchBy, filterBy, isLoading, num, onChangeText, getDoctorsOnType, getPhotoUrl})
	);
};

export default DoctorComponent;
