import React from 'react';
import { Alert } from 'react-native';

import { fireEvent, render, waitFor } from '@testing-library/react-native';

import Toogle from '../src/components/Toogle/toogle';

// Mockando react-native-config
jest.mock('react-native-config', () => ({
  CATS_API_KEY: 'test_api_key',
}));

describe('Toogle Component', () => {
  const mockMessage = 'Feature will be available if I pass this stage';

  beforeEach(() => {
    jest.spyOn(Alert, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should display the correct message when pressed', async () => {
    const { getByTestId } = render(<Toogle />);

    const toggleButton = getByTestId('toogle-button');
    fireEvent.press(toggleButton);

    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith('Wait!', mockMessage);
    });
  });
});
