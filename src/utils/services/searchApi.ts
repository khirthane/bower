import axios from 'axios';

const API_KEY = 'eab3e6914c9724a6f315ece0e0db32b5';
const URI = `https://libraries.io/api`;
export type IRecordUnknown = Record<string, string | number | boolean | string[]>;
export type IRecordUnknownList = IRecordUnknown[];

export const searchPlugins = async (
  text: string,
  page: number,
  pageSize: number,
  sort: string,
): Promise<IRecordUnknownList> => {
  try {
    const { data } = await axios.get(`${URI}/search`, {
      params: {
        q: text,
        api_key: API_KEY,
        page: page,
        per_page: pageSize,
        ...(sort && { sort: sort }),
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
