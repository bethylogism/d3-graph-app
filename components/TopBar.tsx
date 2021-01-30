import React from 'react';
import { StyleSheet, View as NativeView } from 'react-native';

import { View, Text } from './Themed';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ColorKey, TeamNames } from '../screens/TabOneScreen';

// type TopBarProps = {
//   name: keyof ColorKey;
//   color: Pick<ColorKey, keyof ColorKey>;
// }[];

type TopBarProps = {
  names: TeamNames;
  colors: ColorKey;
};

export default function TopBar({ names, colors }: TopBarProps) {
  const teamKeys = Object.keys(names).filter(
    (key) => !Object.keys(colors).includes(key)
  );

  return (
    <View style={styles.topbar}>
      <View style={styles.inner}>
        <FontAwesomeIcon style={styles.hamburger} icon={faBars} />
        <View
          style={{ ...styles.avatar, backgroundColor: `${colors['teamA']}` }}
        />
        <Text style={styles.keyText}>{names['teamA']}</Text>
        <View
          style={{ ...styles.avatar, backgroundColor: `${colors['teamB']}` }}
        />
        <Text style={styles.keyText}>{names['teamB']}</Text>
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
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  keyText: {
    color: 'gray',
    marginHorizontal: 5,
  },
  hamburger: {
    padding: 10,
    color: '#fff',
    marginRight: 15,
  },
  avatar: {
    borderRadius: 100,
    width: 25,
    height: 25,
    borderColor: '#fff',
    borderWidth: 1,
    marginHorizontal: 5,
  },
});
