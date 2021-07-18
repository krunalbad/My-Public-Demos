import apiInstance from '@src/api';
import { BASE_URL } from '@utils/constants';

export async function getUserLoginRequestApi(dataObj) {
  try {
    const response = await apiInstance({
      method: 'POST',
      baseURL: BASE_URL,
      url: 'api/login',
      headers: {
        'Content-Type': 'application/json',
      },
      data: dataObj,
    });
    return Promise.resolve(response);
  } catch (error) {
    throw new Error(error);
  }
}