import React from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import {menu} from '../theme/icons';
import MenuScreen from './MenuScreen';
import {textDark, background, primary} from '../theme/colors';

const ShopModal = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Image
            source={require('../assets/images/toppng.com-man-face-1645x2339.png')}
            style={styles.profileImage}
          />
          <Image source={menu} style={styles.buttonMenu} />
        </View>
      </SafeAreaView>

      {/*  titles */}
      <View style={styles.titlesWrapper}>
        <Text style={styles.titlesSubtitle}>Food</Text>
        <Text style={styles.titlesTitle}>Delivery</Text>
      </View>
      <MenuScreen />
    </View>

  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    background: background,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    color: textDark,
    padingTop: 20,
    alignItems: 'center',
  },
  profileImage: {
    height: 30,
    width: 30,
    borderRadius: 40,
    resizeMode: 'stretch',
  },
  buttonMenu: {
    height: 30,
    width: 30,
  },
  titlesWrapper: {
    marginTop: 5,
    paddingHorizontal: 20,
  },
  titlesSubtitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: textDark,
  },
  titlesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: primary,
    textShadowColor: '#000',
    textShadowOffset: {width: 0.5, height: 0.5},
    textShadowRadius: 1,
    marginTop: 5,
  },
});
export default ShopModal;
