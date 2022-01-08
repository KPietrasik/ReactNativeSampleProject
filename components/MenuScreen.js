import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {medal} from '../theme/icons';
import {
  background,
  textDark,
  secondary,
  textLight,
  backgroundWrapper,
  primary,
} from '../theme/colors';

import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';

const MenuScreen = () => {
  const renderCategoryItem = ({item}) => {
    return (
      <View
        style={[
          styles.categoryItemWrapper,
          {
            backgroundColor: item.selected ? primary : secondary,
            marginLeft: item.id === 1 ? 20 : 0,
          },
        ]}>
        <Image source={item.image} style={styles.categoryItemImage} />
        <Text style={styles.categoryItemTitle}>{item.title}</Text>
        <View style={styles.categorySelectWrapper}>
          <Text style={styles.categorySelectIcon}>{'>'}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* categories */}
      <View style={styles.categoriesWrapper}>
        <Text style={styles.categoriesTitle}>Categories</Text>
      </View>
      <View style={styles.categoriesListWrapper}>
        <FlatList
          data={categoriesData}
          renderItem={renderCategoryItem}
          keyExtractor={item => item.id}
          horizontal={true}
        />
      </View>

      {/* popular */}

      <View style={styles.popularWrapper}>
        <Text style={styles.popularTitle}>Popular</Text>
        <ScrollView style={styles.scrollView}>
          {popularData.map(item => (
            <View key={item.id} style={styles.popularCardWrapper}>
              <View>
                <View>
                  <View>
                    <Image style={styles.popularCardMedal} source={medal} />
                    <Text style={styles.popularCardText}>top of the week</Text>
                  </View>
                  <View style={styles.popularPizzaWrapper}>
                    <Text style={styles.popularPizzaTitle}>{item.title}</Text>
                    <Text style={styles.popularPizzaWeight}>
                      Weight: {item.weight}
                    </Text>
                  </View>
                </View>
                <View style={styles.popularPizzaBottom}>
                  <View style={styles.popularPizzaButton}>
                    <Text style={styles.popularPizzaPlus}>+</Text>
                    <View style={styles.ratingWrapper}>
                      <Text style={styles.rating}>{item.rating}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.popularCardRight}>
                  <Image source={item.image} style={styles.popularCardImage} />
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    background: background,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    color: textDark,
    padingTop: 10,
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
    marginTop: 20,
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
  categoriesWrapper: {
    marginTop: -10,
  },
  categoriesTitle: {
    fontWeight: 'bold',
    fontSize: 19,
    paddingHorizontal: 20,
    paddingBottom: 5,
  },
  categoriesListWrapper: {
    backgroundColor: backgroundWrapper,
    height: 140,
    marginBottom: 5,
  },
  categoryItemWrapper: {
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: primary,
    marginRight: 20,
    borderRadius: 20,
    shadowColor: textDark,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2,
  },
  categoryItemTitle: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  categoryItemImage: {
    width: 40,
    height: 40,
    marginTop: 15,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  categorySelectWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
    backgroundColor: backgroundWrapper,
  },
  categorySelectIcon: {
    fontWeight: 'bold',
    fontSize: 10,
    color: textDark,
    alignSelf: 'center',
  },
  scrollView: {
    height: 200,
  },
  popularWrapper: {
    paddingHorizontal: 20,
    flexDirection: 'column',
    alignitems: 'center',
    paddingTop: 10,
  },
  popularCardWrapper: {
    backgroundColor: backgroundWrapper,
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    marginTop: 5,
    overflow: 'hidden',
    shadowColor: textDark,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2,
  },
  popularTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  popularCardMedal: {
    height: 12,
    width: 12,
  },
  popularCardText: {
    marginLeft: 10,
    fontWeight: 'semiBold',
    fontSize: 14,
    color: primary,
    textShadowColor: textDark,
    textShadowOffset: {width: 0.5, height: 0.5},
    textShadowRadius: 2,
  },
  popularPizzaWrapper: {
    marginTop: 20,
  },
  popularPizzaTitle: {
    fontWeight: '300',
    fontSize: 14,
    color: textDark,
  },
  popularPizzaWeight: {
    fontWeight: 'medium',
    fontSize: 12,
    color: textLight,
    marginTop: 5,
  },
  popularPizzaBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: -20,
  },
  popularPizzaButton: {
    backgroundColor: primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  popularPizzaPlus: {
    fontSize: 15,
    fontWeight: 'bold',
    color: textDark,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignitems: 'center',
    marginleft: 20,
  },
  rating: {
    fontSize: 12,
    color: textDark,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  popularCardRight: {
    marginLeft: 100,
    marginTop: -180,
  },
  popularCardImage: {
    width: 300,
    height: 225,
    resizeMode: 'contain',
    marginLeft: 20,
  },
});
export default MenuScreen;
