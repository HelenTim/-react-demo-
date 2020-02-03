# -react-demo-

### 看第24集
### 值得关注的点
#### 组件名称 大写
#### 我们一般在写组件的时候 文件的后缀名可一用 ‘.js’/‘.jsx’，但是我们一般使用 ‘.jsx’
  - 这样做的目的是 我们可以区分是组件文件  还是一般的js文件。
### 给模板配置关键字：在输入关键字的时候 模板就会显示出来
- https://www.bilibili.com/video/av51174155?p=19     6:00
### react里标签的class属性要换为 className。
### react里this的指向问题
  - 可控组件里，react生命周期函数里的this直接指向当前这个类所新创建出来的对象；
  - 可控组件里，我们自定义的方法里的this  指向undefined，解决方法如下：
      + 在类的构造器里使用bind来绑定this
      + 在声明方法的时候使用箭头函数来声明此方法。
### 数据在哪个组件 更新数据的方法就在哪个组件
    - 不然 数据不受控制
### 我们在使用 ‘prop-types’这个库的时候有两种使用方法
   - 1、 第一种：写在组件类的外面
   - 2、 第二种：写在组件类的里面
   - 参考：https://www.bilibili.com/video/av51174155?p=21   第10分钟。
### 子组件要想操作父组件
    - 父组件通过属性把自己的方法传递给子组件
    - 子组件接收父组件传递来的属性（props）来拿到方法 并且执行方法。
