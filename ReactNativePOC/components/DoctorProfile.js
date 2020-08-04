import React from 'react';

import { View, Text, Image, Button, StyleSheet, Linking, TouchableHighlight } from 'react-native';

import NotifyDoctorAppointment from './NotifyDoctorAppointment';

import { getDoctorsSolr, getPhotoUrl, filterByText } from '../shared/fad-utils';

const DoctorProfile = ({ route, navigation, ...props }) => {

  const { doctor: d = {} } = route.params;

  return (
    <View style={styles.container}>

      <View style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        <TouchableHighlight
          /* onPress={() => navigation.navigate('Doctor Profile')} */
          onPress={() => navigation.navigate('WebViewUI', { url: 'https://dukehealth.org' + d.sm_url[0] })}
        >
          <Image source={{ uri: getPhotoUrl(d) }}
            resizeMode={'cover'}
            style={{
              alignSelf: 'center',
              height: 200,
              width: 150,
              borderWidth: 1,
            }}
          />
        </TouchableHighlight>
      </View>

      <Text
        style={
          { color: '#00539b', textAlign: 'center', fontSize: 25, }
        }
        /* onPress={() => Linking.openURL('https://dukehealth.org' + d.sm_url[0])} */
        onPress={() => navigation.navigate('WebViewUI', { url: 'https://dukehealth.org' + d.sm_url[0], title: d.tm_X3b_en_title[0] })}
      >
        {d.tm_X3b_en_title[0]}
      </Text>

      <Text style={{ textAlign: 'center', fontSize: 20, }}>{d.specialties_specific}</Text>

      <Text style={{ textAlign: 'center', fontSize: 20, }}><Text style={{ fontWeight: 'bold' }}>Duke</Text> Health Provider</Text>

      <Text style={{ textAlign: 'center', fontSize: 20, }}>
        Rating {d.fts_field_patient_satisfaction_score}
      </Text>

      <Text style={{ textAlign: 'center', fontSize: 20, }}>
        Total Rating  {d.its_field_total_responses}
      </Text>

      <NotifyDoctorAppointment d={d} />

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    textAlign: 'center',
    marginTop: 30
  },
  submit: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#00539b'
  },
  submitText: {
    color: '#00539b',
    textAlign: 'center',
  },
});

export default DoctorProfile;