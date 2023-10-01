import { $host } from 'shared/config/http/host';

export const $hostGet = async (apiURL: string) =>
  await $host.get(apiURL).then(res => {
    return res.data;
  });
