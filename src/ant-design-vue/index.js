/**
 * 使用:
 *  1. 项目中需要的组件进行释放(解开注释)
 *
 * 注意:
 *  1. 打包只会包含释放(解开注释)的组件, 减少打包文件大小
 */
import Vue from "vue";
import {
  Affix,
  Alert,
  Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  Button,
  Calendar,
  Card,
  Cascader,
  Checkbox,
  Col,
  Collapse,
  ConfigProvider,
  DatePicker,
  Divider,
  Drawer,
  Dropdown,
  Empty,
  Form,
  FormModel,
  Icon,
  Input,
  InputNumber,
  Layout,
  List,
  LocaleProvider,
  Menu,
  Modal,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  Row,
  Select,
  Skeleton,
  Slider,
  Spin,
  Statistic,
  Steps,
  Switch,
  Table,
  Tabs,
  Tag,
  TimePicker,
  Tooltip,
  Transfer,
  Tree,
  Upload,
  Descriptions,
  Result,
  Timeline,
  Notification,
  message
} from "ant-design-vue";
Select.props.showSearch.default = true;
Select.props.filterOption.default = () => {
  return (input, option) => {
    return (
      option.componentOptions.children[0].text
        .toLowerCase()
        .indexOf(input.toLowerCase()) >= 0
    );
  };
};
Vue.use(Layout);
Vue.use(BackTop);
Vue.use(Calendar);
Vue.use(Affix);
Vue.use(Statistic);
Vue.use(Tabs);
Vue.use(Collapse);
Vue.use(Button);
Vue.use(Checkbox);
Vue.use(Drawer);
Vue.use(Badge);
Vue.use(Progress);
Vue.use(Tooltip);
Vue.use(Button);
Vue.use(Input);
Vue.use(Icon);
Vue.use(Switch);
Vue.use(Form);
Vue.use(FormModel);
Vue.use(Row);
Vue.use(Col);
Vue.use(InputNumber);
Vue.use(Select);
Vue.use(DatePicker);
Vue.use(TimePicker);
Vue.use(LocaleProvider);
Vue.use(Table);
Vue.use(Alert);
Vue.use(Popconfirm);
Vue.use(Dropdown);
Vue.use(Menu);
Vue.use(Upload);
Vue.use(Radio);
Vue.use(Divider);
Vue.use(Cascader);
Vue.use(Popover);
Vue.use(Breadcrumb);
Vue.use(Tree);
Vue.use(Spin);
Vue.use(Pagination);
Vue.use(Tag);
Vue.use(Card);
Vue.use(Checkbox);
Vue.use(List);
Vue.use(Modal);
Vue.use(Steps);
Vue.use(Transfer);
Vue.use(Empty);
Vue.use(Slider);
Vue.use(Skeleton);
Vue.use(Avatar);
Vue.use(Descriptions);
Vue.use(Result);
Vue.use(Timeline);
Vue.use(ConfigProvider);
Vue.prototype.$antNotify = Notification;
Vue.prototype.$antMessage = message;
Vue.prototype.$antAlert = (params) => {
  return Modal[params.type]({ ...{ centered: true }, ...params });
};
const typeList = {
  info: { class: "ant-confim-info", icon: "info-circle" },
  success: { class: "ant-confim-success", icon: "check-circle" },
  error: { class: "ant-confim-error", icon: "close-circle" },
  warning: { class: "ant-confim-warning", icon: "exclamation-circle" }
};
Vue.prototype.$antConfirm = (params) => {
  return Modal.confirm({
    ...{ centered: true },
    ...params,
    ...typeList[params.type]
  });
};
console.log("antd-design-vue loaded.");
