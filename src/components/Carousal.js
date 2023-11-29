import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React, {useRef, useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import {carousalData} from '../data/CarousalData';
import {Pagination} from 'react-native-snap-carousel';
const sliderWidth = Dimensions.get('screen').width;
const Carousal = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carousal = useRef();
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.img} />
      </View>
    );
  };
  return (
    <View style={styles.slidecont}>
      <Carousel
        ref={carousal}
        data={carousalData}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={530}
        onSnapToItem={index => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={carousalData.length}
        activeDotIndex={activeSlide}
        containerStyle={{position: 'absolute', bottom: 0, left: 15}}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
        }}
        inactiveDotStyle={{
          width: 15,
          height: 15,
          borderRadius: 10,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        dotColor="green"
        inactiveDotColor="white"
      />
    </View>
  );
};

export default Carousal;

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 250,
    opacity: 0.7,
  },
  slidecont: {
    position: 'relative',
  },
});
