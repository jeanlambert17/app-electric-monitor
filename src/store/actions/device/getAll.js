import { createFetchPattern } from '../../../utils/reduxHelpers';
import getAllApi from '../../../api/device/getAll';

const getAllPattern = createFetchPattern(
  'GET_ALL',
  getAllApi,
);

export const getAllReducer = getAllPattern.reducer;
export const getAll = getAllPattern.action;