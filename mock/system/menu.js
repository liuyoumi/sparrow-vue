export const list = [
  {
    id: 1,
    parentId: 0,
    path: "/system",
    component: "Layout",
    type: 1, // 目录
    icon: "system",
    name: "系统管理",
    sort: 1,
    visible: true, // 是否可见，不可见时仍可被访问
    keepAlive: true, // 是否缓存，缓存状态下切换路由时页面值仍存在
    breadcrumb: true, // 是否在面包屑中显示
    children: [
      {
        id: 101,
        parentId: 1,
        path: "menu",
        component: "system/menu/index",
        type: 2,
        icon: "menu",
        name: "菜单管理",
        sort: 1, // 菜单
        visible: true,
        keepAlive: true,
        breadcrumb: true,
      },
      {
        id: 102,
        parentId: 1,
        path: "role",
        component: "system/role/index",
        type: 2,
        icon: "role",
        name: "角色管理",
        sort: 2, // 菜单
        visible: true,
        keepAlive: true,
        breadcrumb: true,
      },
      {
        id: 103,
        parentId: 1,
        path: "role",
        component: "system/role/index",
        type: 2,
        icon: "role",
        name: "角色管理",
        sort: 2, // 菜单
        visible: true,
        keepAlive: true,
        breadcrumb: true,
      },
      {
        id: 104,
        parentId: 1,
        path: "user",
        component: "system/user/index",
        type: 2,
        icon: "user",
        name: "用户管理",
        sort: 3, // 菜单
        visible: true,
        keepAlive: true,
        breadcrumb: true,
      },
      {
        id: 105,
        parentId: 1,
        path: "dict",
        component: "system/dict/index",
        type: 2,
        icon: "dict",
        name: "字典管理",
        sort: 4, // 菜单
        visible: true,
        keepAlive: true,
        breadcrumb: true,
      },
    ],
  },
];

export default [
  {
    url: "/api/system/menu",
    method: "get",
    timeout: 1000,
    response() {
      return {
        code: 0,
        msg: "OK",
        data: list,
      };
    },
  },
];