import React from 'react';

import { render } from '@testing-library/react-native';

import { Card } from '../src/components/Card/card';

describe('Card Component', () => {
  const mockProps = {
    imageUrl: 'https://cdn2.thecatapi.com/images/2bbSbBC-v.jpg',
    name: 'Whiskers',
    origin: 'Siam',
    affection: 5,
  };

  it('should render the cat name correctly', () => {
    const {getByText} = render(<Card {...mockProps} />);
    expect(getByText('Whiskers')).toBeTruthy();
  });

  it('should render the cat origin correctly', () => {
    const {getByText} = render(<Card {...mockProps} />);
    expect(getByText('Siam')).toBeTruthy();
  });

  it('should render the cat image correctly', () => {
    const { getByTestId } = render(<Card {...mockProps} />);
    const image = getByTestId('card-image');
    expect(image).toBeTruthy();
    expect(image.props.source.uri).toBe(mockProps.imageUrl);
  });
});
