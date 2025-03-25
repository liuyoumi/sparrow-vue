import {toPascalCase} from "@/utils/index.js";
import {SystemMenuTypeEnum} from "@/utils/const.js";

const modules = import.meta.glob("../views/**/*.vue");

/**
 * 将菜单数据转换层可访问的页面路由
 * @param {Array} menus
 */
export const generateRoutes = (menus) => {
  const routes = [];
  const moduleKeys = Object.keys(modules);
  for (const item of menus) {
    const data = {
      path: item.path,
      name: toPascalCase(item.path),
      redirect: item.redirect,
      meta: {
        icon: item.icon,
        title: item.name,
        visible: item.visible,
        external: item.external,
        keepAlive: item.keepAlive,
        breadcrumb: item.breadcrumb,
      },
    };
    
    // 对于菜单，需要添加component
    if (item.type === SystemMenuTypeEnum.MENU) {
      const moduleKey = moduleKeys.find(s => s.includes(item.component));
      data.component = modules[moduleKey];
    }
    
    // 如果存在子菜单，则递归调用生成子路由
    if (item.children) {
      data.children = generateRoutes(item.children);
    }
    
    routes.push(data);
  }
  
  return routes;
};