import { AxiosError } from 'axios';
import { ErrorType } from './types';

export function handleHttpError(error: AxiosError): ErrorType {
  const genericErrorMessage = 'Something Failed. Try again?';

  if (error.response) {
    if (error.response.data) {
      return {
        statusCode: error.response.status,
        message: error.response.data.error || genericErrorMessage,
      };
    }
  }

  return {
    statusCode: 500,
    message: genericErrorMessage,
  };
}
