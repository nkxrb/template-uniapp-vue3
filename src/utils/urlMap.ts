import pagesJson from '../pages.json';

// tabBar页面
const tabBarPagesMap = pagesJson.pages.map((i) => {
  return {
    type: 'tabBarPage',
    name: i.name,
    path: `/${i.path}`
  };
});

// 二级页面
const subPagesMap = pagesJson.subPackages.flatMap((i) => {
  return i.pages.map((x) => {
    return {
      type: 'subPage',
      name: x.name,
      path: `/${i.root}/${x.path}`
    };
  });
});

export const pagesMap = [...tabBarPagesMap, ...subPagesMap];



