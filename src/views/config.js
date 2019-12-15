export const menuData = [
  {
    name: "系统首页",
    path: "/home",
    children: []
  },
  {
    path: "/comprehensive",
    name: "综合展示",
    children: [
      {
        path: "/about",
        name: "状态监控"
      },
      {
        path: "/warning_monitor",
        name: "监控预警"
      }
    ]
  },
  {
    path: "/diagnose",
    name: "诊断分析",
    children: []
  },
  {
    path: "/report_view",
    name: "报表查询",
    children: []
  },
  {
    path: "/library",
    name: "知识库管理",
    children: []
  },
  {
    path: "/devOps",
    name: "运维管理",
    children: []
  },
  {
    path: "/admin",
    name: "系统管理",
    children: [
      {
        path: "/company",
        name: "公司管理"
      }
    ]
  }
];
