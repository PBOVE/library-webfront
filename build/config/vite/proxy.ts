type ProxyItem = [string, string];

type ProxyList = ProxyItem[];

export function createProxy(list: ProxyList = []) {
  const ret: any = {};
  for (const [prefix, target] of list) {
    ret[prefix] = {
      target: target,
      changeOrigin: true,
    };
  }
  return ret;
}