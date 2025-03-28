<script lang="jsx">
export default defineComponent({
  name: "Sider",
  setup() {
    const collapsed = ref(false);

    /** 监听菜单项点击并跳转到对应页面 */
    const route = useRoute();
    const router = useRouter();
    const onMenuClick = ({key: path}) => {
      if (validator.isURL(path)) {
        window.location.href = path;
        return;
      }
      router.push({path});
    };

    /** 页面刷新时高亮路由对应的菜单项，若高亮的菜单项存在于子菜单则展开 */
    const state = reactive({
      openKeys: [],
      subMenuKeys: [],
      selectedKeys: [],
    });
    watch(route, ({path}) => {
      state.openKeys = state.subMenuKeys.filter(key => path.startsWith(key));
      state.selectedKeys = [path];
    });
    const onMenuOpenChange = (openKeys) => {
      const latestOpenKeys = openKeys.find(key => state.openKeys.indexOf(key) === -1);
      state.openKeys = latestOpenKeys ? [latestOpenKeys] : openKeys;
    };

    /**
     * 根据父子路径获取菜单项的key值
     * @param {string} parentPath
     * @param {string} path
     * @return {string}
     */
    const getKey = (parentPath, path) => {
      if (validator.isURL(path)) {
        return path;
      }
      return `${parentPath}/${path}`.replace(/\/+/g, "/");
    };

    const userStore = useUserStore();
    const renderMenu = () => {
      return (
          <AMenu
              mode="inline"
              theme="dark"
              openKeys={state.openKeys}
              v-model:selectedKeys={state.selectedKeys}
              onClick={onMenuClick}
              onOpenChange={onMenuOpenChange}
          >
            {renderMenuItem(userStore.routes)}
          </AMenu>
      );
    };
    const renderMenuItem = (routes, parentPath = "/") => {
      return routes.filter(item => item.meta.visible).map(item => {
        const key = getKey(parentPath, item.path);
        if (item.children) {
          state.subMenuKeys.push(item.path);
          return (
              <ASubMenu key={key}>
                {{
                  title: () => renderMenuItemTitle(item.meta),
                  default: () => {
                    return renderMenuItem(item.children, item.path);
                  },
                }}
              </ASubMenu>
          );
        }
        return (
            <AMenuItem key={key}>
              {renderMenuItemTitle(item.meta)}
            </AMenuItem>
        );
      });
    };
    const renderMenuItemTitle = (meta) => {
      return (
          <span>
              <Icon name={meta.icon}/>
              <span class="ml-2">{meta.title}</span>
          </span>
      );
    };

    return () => (
        <ALayoutSider v-model:collapsed={collapsed.value} collapsible>
          {renderMenu()}
        </ALayoutSider>
    );
  },
});
</script>