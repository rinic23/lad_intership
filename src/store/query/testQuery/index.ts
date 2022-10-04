import { platformApi } from '../platformApi';

export type TTestData = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const extendedApi = platformApi.injectEndpoints({
  endpoints: (build) => ({
    getTestData: build.query<TTestData, void>({
      query: () => ({ url: '/todos/1', method: 'GET' }),
    }),
  }),

  overrideExisting: false,
});

export const { useGetTestDataQuery } = extendedApi;
