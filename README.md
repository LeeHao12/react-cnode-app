### 效果

![demo](./demo.gif)

DEMO: https://LeeHao92.github.io/react-cnode-app

### 主要技术栈

react

antd、motion（动画）

react-router-4、connected-react-router（saga 中获取 router）

redux、redux-saga（异步处理）、redux-actions（create action）、reselect（selete data）

css-module、sass、github-markdown-css（文章样式同 github）

### Deploy

部署到 `gh-pages` 分支

```js
yarn add gh-pages
"scripts": {
  ...others config,
  "predeploy": "yarn build",
  "deploy": "gh-pages -d build"
}
```

### TODO

- [ ] 发布帖子
- [ ] 回复评论
- [ ] 点击加载更多 修改为 下拉加载更多
- [ ] 优化样式
- [ ] 通过 Travis 部署到 Nginx
