### redux的理解：
  - 参考：https://gitee.com/wangluoshihuang/shangguigureact-20180119/raw/master/基础部分/课件/尚硅谷-React全家桶.pdf 第8节。
  - 组件里无非是要得到数据和对数据操作：[参考](https://gitee.com/wangluoshihuang/shangguigureact-20180119/raw/master/%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/%E8%AF%BE%E4%BB%B6/%E5%B0%9A%E7%A1%85%E8%B0%B7-React%E5%85%A8%E5%AE%B6%E6%A1%B6.pdf) 8.4.6节。
    + 使用：this.props.store.dispatch(actions.decrement(number))来操作数据；
    + 使用：this.props.store.getState()来获得数据。
  - 使用 createStore(reducers里操作数据的具体做法的函数名) 创建出来一个store对象
    + 把store对象赋值给组件的属性上，此时属性可以向下传递。所以子组件就可以拿到store对象的dispatch方法，来触发actons里的函数。
    + [参考：](https://gitee.com/wangluoshihuang/shangguigureact-20180119/raw/master/%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86/%E8%AF%BE%E4%BB%B6/%E5%B0%9A%E7%A1%85%E8%B0%B7-React%E5%85%A8%E5%AE%B6%E6%A1%B6.pdf) 8.4.7和8.4.6。
    
  总之：先创建 store对象，然后利用store对象在子组里触发acton即可。
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
