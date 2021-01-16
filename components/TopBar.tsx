import React from 'react';
import { StyleSheet } from 'react-native';

import { View } from './Themed';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function TopBar() {
  return (
    <View style={styles.topbar}>
      <View style={styles.inner}>
        <FontAwesomeIcon style={styles.hamburger} icon={faBars} />
        <View style={styles.avatar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topbar: {
    backgroundColor: 'rgba(18,18,18,0.75)',
    bottom: 2,
    height: 68,
  },
  inner: {
    marginTop: 25,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  hamburger: {
    padding: 10,
    color: '#fff',
  },
  avatar: {
    borderRadius: 100,
    width: 25,
    height: 25,
    borderColor: '#fff',
    borderWidth: 1,
  },
});
