export const list = [
  {
    id: 1,
    pid: 0,
    path: "/system",
    type: 1,
    icon: "system",
    name: "系统管理",
    sort: 1,
    visible: true,
    external: false,
    keepAlive: true,
    breadcrumb: true,
    children: [
      {
        id: 101,
        pid: 1,
        path: "menu",
        component: "system/menu/index",
        type: 2,
        icon: "menu",
        name: "菜单管理",
        sort: 1,
        visible: true,
        external: false,
        keepAlive: true,
        breadcrumb: true,
      },
      {
        id: 102,
        pid: 1,
        path: "role",
        component: "system/role/index",
        type: 2,
        icon: "role",
        name: "角色管理",
        sort: 2, // 菜单
        visible: true,
        external: false,
        keepAlive: true,
        breadcrumb: true,
      },
      {
        id: 103,
        pid: 1,
        path: "user",
        component: "system/user/index",
        type: 2,
        icon: "user",
        name: "用户管理",
        sort: 3, // 菜单
        visible: true,
        external: false,
        keepAlive: true,
        breadcrumb: true,
      },
      {
        id: 104,
        pid: 1,
        path: "dict",
        component: "system/dict/index",
        type: 2,
        icon: "dict",
        name: "字典管理",
        sort: 4, // 菜单
        visible: true,
        external: false,
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