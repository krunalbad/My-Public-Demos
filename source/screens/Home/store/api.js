import apiInstance from '@src/api';
import { BASE_URL } from '@utils/constants';

export async function getUserListRequestApi() {
  try {
    const response = await apiInstance({
      method: 'GET',
      baseURL: BASE_URL,
      url: 'api/users',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return Promise.resolve(response);
  } catch (error) {
    throw new Error(error);
  }
}
