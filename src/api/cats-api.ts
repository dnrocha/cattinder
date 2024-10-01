import axios from 'axios';
import Config from 'react-native-config';

import { ApiCat } from '../types/cat-types';

const API_BASE_URL = 'https://api.thecatapi.com/v1';

export const fetchCatsAPI = async (): Promise<ApiCat[]> => {
  const response = await axios.get<ApiCat[]>(`${API_BASE_URL}/images/search`, {
    params: {
      size: 'med',
      mime_types: 'jpg',
      format: 'json',
      has_breeds: true,
      order: 'RANDOM',
      page: 0,
      limit: 15,
    },
    headers: {
      'x-api-key': Config.CATS_API_KEY || '',
    },
  });
  return response.data;
};

interface VotePayload {
  image_id: string;
  sub_id?: string;
  value: number;
}

export const voteCatAPI = async (payload: VotePayload) => {
  const response = await axios.post(`${API_BASE_URL}/votes`, payload, {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': Config.CATS_API_KEY || '',
    },
  });
  return response.data;
};
