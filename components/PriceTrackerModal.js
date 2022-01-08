import React from 'react';
import {Text, StyleSheet, SafeAreaView, View, FlatList} from 'react-native';

import ListItem from './ListItem';

import {SAMPLE_DATA} from '../assets/data/priceTrackerData';
import {textLight} from '../theme/colors';

const PriceTrackerModal = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.titleWrapper}>
        <Text style={styles.largeTitle}>Markets</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.FlatListStyle}>
        <FlatList
          keyExtractor={item => item.id}
          data={SAMPLE_DATA}
          renderItem={({item}) => (
            <ListItem
              name={item.name}
              symbol={item.symbol}
              currentPrice={item.current_price}
              priceChangePercentage7d={
                item.price_change_percentage_7d_in_currency
              }
              logoUrl={item.image}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  titleWrapper: {
    marginTop: 20,
    marginLeft: 34,
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: textLight,
    marginHorizontal: 16,
    marginTop: 16,
  },
});

export default PriceTrackerModal;
