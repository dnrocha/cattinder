import React, { useCallback, useEffect, useRef } from 'react';
import { Text, View } from 'react-native';
import { Swiper, SwiperCardRefType } from 'rn-swiper-list';

import { LikeSvg, NopeSvg } from '../../assets/svg';
import { AppDispatch, RootState } from '../../store';
import { fetchCats, voteCat } from '../../store/cats-slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Cat } from '../../types/cat-types';
import { ActionButton } from '../ActionButton/action-button';
import { Card } from '../Card/card';
import styles from './swiper.styles';

const SwiperComponent = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const {cats, loading, error, voting, voteError} = useAppSelector(
    (state: RootState) => state.cats,
  );
  const ref = useRef<SwiperCardRefType>();

  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);

  const handleVote = useCallback(
    (imageId: string, value: number) => {
      dispatch(voteCat({imageId, value}));
    },
    [dispatch],
  );

  const renderCard = useCallback(({imageUrl, name, origin, affection}: Cat) => {
    return (
      <Card
        imageUrl={imageUrl}
        name={name}
        origin={origin}
        affection={affection}
      />
    );
  }, []);

  const OverlayLabelRight = useCallback(() => {
    return <View style={[styles.overlayLabelContainer, styles.like]} />;
  }, []);

  const OverlayLabelLeft = useCallback(() => {
    return <View style={[styles.overlayLabelContainer, styles.nope]} />;
  }, []);

  if (loading) {
    return <Text style={styles.loading}>Loading...</Text>;
  }

  if (error) {
    return <Text style={styles.error}>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Swiper
          ref={ref}
          data={cats}
          renderCard={renderCard}
          onIndexChange={index => {
            if (index === cats.length) {
              dispatch(fetchCats());
            }
          }}
          onSwipeRight={cardIndex => {
            const cat = cats[cardIndex];
            if (cat) {
              handleVote(cat.id, 1);
            }
          }}
          onSwipeLeft={cardIndex => {
            const cat = cats[cardIndex];
            if (cat) {
              handleVote(cat.id, -1);
            }
          }}
          OverlayLabelRight={OverlayLabelRight}
          OverlayLabelLeft={OverlayLabelLeft}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <ActionButton
          onTap={() => ref.current?.swipeLeft()}
          icon={<NopeSvg width={80} height={80} />}
        />
        <ActionButton
          onTap={() => ref.current?.swipeRight()}
          icon={<LikeSvg width={80} height={80} />}
        />
      </View>

      {voting && <Text>Submitting your vote...</Text>}
      {voteError && <Text>Error submitting vote: {voteError}</Text>}
    </View>
  );
};

export default SwiperComponent;
