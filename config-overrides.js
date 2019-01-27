const { override, fixBabelImports, addLessLoader } = require("customize-cra")
const { theme } = require("./theme")

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    // 重写 less-loader 是否可以让 create-react-app 支持 less?
    javascriptEnabled: true,
    modifyVars: theme
  })
)
