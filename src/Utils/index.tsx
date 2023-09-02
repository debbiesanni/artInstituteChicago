import axios from "axios";
import camelCase from "lodash/camelCase";
import parse from "html-react-parser";

export const baseUrl = "https://corsproxy.io/?";

export const defaultImage = "/images/defaultImage.webp";

export const getRequest = async (url: string) => {
  try {
    const {data} = await axios(baseUrl + url);
    return data;
  } catch (err: any) {
    const {data} = err.response;
    const statusCode = data.status;
    const message = data.error;
    throw {message, statusCode};
  }
};

export const truncate = (str: string, max: number) => {
  return str?.length > max ? str.substring(0, max) + "..." : str;
};

export const snakeCaseTocamelCase = (obj: Record<string, any>) => {
  const transformedObj: any = {};
  Object.keys(obj).forEach(
    (key) => (transformedObj[camelCase(key)] = obj[key])
  );
  return transformedObj;
};

export const htmlParse = (value: string) => {
  return value ? parse(value) : null;
};
