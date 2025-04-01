<script lang="jsx">
import {Logo} from "@/layout/components/Logo";
import {useAppStore} from "@/store/modules/app.js";

export default defineComponent({
  name: "Sider",
  setup() {
    const appStore = useAppStore();

    /** 监听菜单项点击并跳转到对应页面 */
    const router = useRouter();
    const onMenuClick = ({key}) => {
      if (validator.isURL(key)) {
        window.location.href = key;
        return;
      }
      router.push(key);
    };

    /** 页面刷新时高亮路由对应的菜单项，若高亮的菜单项存在于子菜单则展开 */
    const route = useRoute();
    const state = reactive({
      openKeys: [],
      selectedKeys: [route.path],
    });
    const userStore = useUserStore();
    if (route.matched.length >= 2) {
      state.openKeys = [route.matched.at(-2).path];
    }
    const onMenuSelect = ({key}) => {
      if (userStore.routes.find(item => item.path === key)) {
        state.openKeys = [];
      }
      state.selectedKeys = [key];
    };
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

    const renderMenu = () => {
      return (
          <AMenu
              mode="inline"
              openKeys={state.openKeys}
              selectedKeys={state.selectedKeys}
              onClick={onMenuClick}
              onSelect={onMenuSelect}
              onOpenChange={onMenuOpenChange}
          >
            {renderMenuItem(userStore.routes)}
          </AMenu>
      );
    };
    const renderMenuItem = (routes, parentPath = "/") => {
      return routes.filter(item => item.meta?.visible).map(item => {
        const key = getKey(parentPath, item.path);
        if (item.children) {
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
        <ALayoutSider v-model:collapsed={appStore.collapsed} collapsible theme="light" trigger={null}>
          {renderMenu()}
        </ALayoutSider>
    );
  },
});
</script>