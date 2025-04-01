export const list = [
  {
    id: 2,
    pid: 0,
    path: "/dashboard",
    icon: "dashboard-one",
    name: "工作台",
    sort: 1,
    visible: true,
    keepAlive: true,
    breadcrumb: true,
  },
  {
    id: 1,
    pid: 0,
    path: "/system",
    type: 1,
    icon: "setting-two",
    name: "系统管理",
    sort: 2,
    visible: true,
    keepAlive: true,
    breadcrumb: true,
    children: [
      {
        id: 102,
        pid: 1,
        path: "role",
        component: "system/role/index",
        type: 2,
        icon: "permissions",
        name: "角色管理",
        sort: 2, // 菜单
        visible: true,
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
        keepAlive: true,
        breadcrumb: true,
      },
      {
        id: 104,
        pid: 1,
        path: "menu",
        component: "system/menu/index",
        type: 2,
        icon: "hamburger-button",
        name: "菜单管理",
        sort: 4, // 菜单
        visible: true,
        keepAlive: true,
        breadcrumb: true,
      },
      {
        id: 105,
        pid: 1,
        path: "dict",
        component: "system/dict/index",
        type: 2,
        icon: "bookmark",
        name: "字典管理",
        sort: 5, // 菜单
        visible: true,
        keepAlive: true,
        breadcrumb: true,
      },
    ],
  },
  {
    id: 2,
    pid: 0,
    path: "/test",
    icon: "test-tube",
    name: "系统测试",
    sort: 3,
    visible: true,
    keepAlive: true,
    breadcrumb: true,
    children: [
      {
        id: 201,
        pid: 2,
        path: "data",
        component: "test/menu/index",
        icon: "application-menu",
        name: "测试菜单",
        sort: 1,
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