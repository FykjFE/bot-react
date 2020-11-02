# react 快速开发模板

> 代码提交规范

| 关键字   | 注释                       |
| -------- | -------------------------- |
| feat     | 新特性/功能                |
| fix      | bug 修复                   |
| docs     | 仅修改文档                 |
| style    | 代码格式的美化             |
| refactor | 代码重构(没有 fix 和 feat) |
| perf     | 提升性能                   |
| test     | 代码测试                   |
| chore    | src 目录以外的修改         |
| ci       | CI/CD 改动                 |

> 例子

```shell
git commit -m "feat: 添加登录功能"
```

> todo

- [ ] 封装 ajax 钩子
- [ ] 封装表单
- [ ] 封装表格
- [ ] 分页助手
  > 社区优秀组件库

1. `react-virtualized` 虚拟列表
2. `react-lazyload`:图片与其他懒加载 `react-loadable`:不维护 `loadable-components`:官方推荐 懒加载
3. `react-snap` `react-snapshot` 预加载

> 性能优化建议

1. 避免使用匿名函数
2. 避免使用内联对象
