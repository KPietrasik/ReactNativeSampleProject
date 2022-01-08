import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

import Button from './components/Button';
import SayHello from './components/SayHello';
import PriceTrackerModal from './components/PriceTrackerModal';
import MoreComponent from './components/MoreComponent';
import ShopModal from './components/ShopModal';

import {price, more, shop, home} from './theme/icons';
import {violet, green, textDark, blue, secondary} from './theme/colors';

const App = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [status, setStatus] = useState('');

  const MODAL_STATES = {
    tracker: <PriceTrackerModal />,
    shop: <ShopModal />,
    more: <MoreComponent />,
  };

  const showModal = newStatus => {
    setIsClicked(true);
    setIsModalVisible(true);
    setStatus(newStatus);
  };
  const hideModal = newStatus => {
    setIsClicked(true);
    setIsModalVisible(false);
    setStatus(newStatus);
  };

  return (
    <SafeAreaView>
      <SayHello isClicked={isClicked} />

      {isModalVisible ? (
        <View>
          <Button
            text="RETURN"
            backgroundColor={secondary}
            func={hideModal}
            status="return"
            icon={home}
          />
          {MODAL_STATES[status]}
        </View>
      ) : (
        <View>
          <Button
            text="PRICE TRACKER"
            backgroundColor={violet}
            func={showModal}
            status="tracker"
            icon={price}
          />
          <Button
            text="SHOP NOW"
            backgroundColor={green}
            func={showModal}
            status="shop"
            icon={shop}
          />
          <Button
            text="MY TASKS"
            backgroundColor={blue}
            func={showModal}
            status="more"
            icon={more}
          />
          <View style={styles.infoContainer}>
            <Text style={[styles.information, {color: violet}]}>
              <Text style={styles.strong}>Price tracker: </Text>crypto price
              tracker app.(API, FlatList, Image, Styling)
            </Text>
            <View style={styles.divider} />
            <Text style={[styles.information, {color: green}]}>
              <Text style={styles.strong}>Shop now: </Text>restaurant service
              app, Using react native components like View, SafeAreaView,
              ScrollView, Text, FlatList.
            </Text>
            <View style={styles.divider} />
            <Text style={[styles.information, {color: blue}]}>
              <Text style={styles.strong}>My tasks: </Text>dynamic list To Do
              with data deletion option, Using RN components:
              KeyboardAvoidingView, StyleSheet,View, TextInput,
              TouchableOpacity, Keyboard.
            </Text>
            <View style={styles.divider} />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    marginTop: 20,
  },
  strong: {
    fontWeight: 'bold',
  },
  information: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    color: textDark,
    alignItems: 'center',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: textDark,
    marginHorizontal: 16,
    marginTop: 16,
  },
  image: {
    height: 300,
    width: 300,
    marginLeft: 40,
    resizeMode: 'stretch',
  },
});

export default App;
