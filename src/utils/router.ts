import { isFastClick, parseUrl, restoreUrl } from './shared';
import { pagesMap } from './urlMap';

export function onUrlPage(e: any) {
  if (isFastClick()) return;
  const { url } = e.currentTarget.dataset;
  if (!url) return;
  const { name, path, query } = parseUrl(url);
  // 原生页
  forward(name, query);
}

export function forward(name: string, query: any = {}): any {
  const targetPage = pagesMap.find((i) => i.name === name);
  if (!targetPage) return;
  const isReplace = query.replace;
  delete query.replace;
  const { type, path } = targetPage;
  const url = restoreUrl(path, query);
  const params = { url };
  if (type === 'tabBarPage') return uni.switchTab(params);
  if (!isReplace) return uni.navigateTo(params);
  uni.redirectTo(params);
}

export function back(delta: number) {
  uni.navigateBack({
    delta
  });
}
