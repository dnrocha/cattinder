import React from 'react';
import {ImageBackground, Text, useWindowDimensions, View} from 'react-native';

import {CardI, CardInfoI} from '../../types/card-types';
import styles from './card.styles';

const CardInfo = ({name, origin, affection}: CardInfoI) => {
  return (
    <View style={styles.infoContainer}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.origin}>{origin}</Text>
      </View>
      <View style={styles.affection}>
        <Text style={styles.name}>{affection}</Text>
      </View>
    </View>
  );
};

const Card = ({imageUrl, ...props}: CardI) => {
  const {width, height} = useWindowDimensions();
  const imageWidth = width * 0.9;
  const imageHeight = height * 0.5;

  return (
    <View style={{...styles.card, width: imageWidth, height: imageHeight}}>
      <ImageBackground
        source={{uri: imageUrl}}
        resizeMode="cover"
        width={300}
        height={400}
        style={styles.image}
        accessible
        accessibilityRole="image"
        testID="card-image">
        <CardInfo {...props} />
      </ImageBackground>
    </View>
  );
};

export {Card};
