import axios from "axios";
// import config from "@/config/index";
import configure from 'next/config';
import { getUserToken, setUserToken } from '@/utils/auth';

const { publicRuntimeConfig } = configure();

const baseInstance = axios.create({
  baseURL: publicRuntimeConfig.REACT_APP_API_PATH,
});

baseInstance.defaults.headers.common["Accept"] = "application/json";
baseInstance.defaults.headers.common["Content-Type"] = "application/json";
baseInstance.defaults.withCredentials = true

baseInstance.interceptors.request.use(async function (publicRuntimeConfig) {
  const url = getDynamicURL(publicRuntimeConfig.url);
  publicRuntimeConfig.url = `${publicRuntimeConfig.baseURL}/${url}`;

  const token = getUserToken();
  if (publicRuntimeConfig.method !== 'get') {
    const secretToken = await baseInstance.get(`auth/csrftoken`);
    publicRuntimeConfig.headers['X-CSRF-TOKEN'] = secretToken?.csrfToken?.trim()
  }
  if (token) {
    publicRuntimeConfig.headers.Authorization = `Bearer ${token}`;
  }
  return publicRuntimeConfig;
});

baseInstance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    console.log(err)
    throw err;
  }
);

baseInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (originalConfig.url !== "/auth/login" && err.response) {

      if (err?.response?.data?.error?.name === 'TokenExpiredError' && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const rs = await baseInstance.post(`${config.REACT_APP_API_PATH}/auth/refresh`);
          if (rs && !rs.error) {

            setUserToken(rs.token);
            originalConfig.headers.Authorization = `Bearer ${rs.token}`;
          }

          return baseInstance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  }
);

const getDynamicURL = (url) => {
  const host = window.location.host
  let subdomain = host.split('.')[0]
  const excludeUrls = ['auth', 'organizations', 'uploads', 'users', 'embedded-reports']
  let organizationPrefix = true

  excludeUrls.forEach(endpoint => {
    if (url.indexOf(endpoint) !== -1) {
      organizationPrefix = false
    }
  })

  if (subdomain.indexOf('-') !== -1) {
    subdomain = subdomain.slice(0, subdomain.indexOf('-'))
  }

  if (subdomain && organizationPrefix) {
    if (url[0] === '/') {
      return `organizations/${subdomain}/${url.substring(1)}`
    }
    return `organizations/${subdomain}/${url}`
  }
  else {
    return url
  }
}

export default baseInstance;