# 响应式 Object.defineProperty()

Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

```
  /***
     * @parser Object.defineProperty(obj, prop, descriptor)
     *
     * @param obj 要定义属性的对象。
     *
     * @param prop 要定义或修改的属性的名称或 Symbol 。
     *
     * @param descriptor 要定义或修改的属性描述符。
     *
     * @return obj 被传递给函数的对象。
     *
     * @described 通过赋值操作添加的普通属性是可枚举的
     *
     * @source MDN https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
     *
     * @author 徐健
     *
     * /

    let obj = { name: "张三" };

    let number = 10;

    Object.defineProperty(obj, "age", {

      enumerable: true,   // 是否允许枚举 默认 false

      configurable: true, // 是否允许删除 默认 false

      // writable: true,  // 是否允许修改 默认 false

      // value:'',  // 初始值

      get() {  // 当有人读取 obj 的 age 属性时， get 函数( getter )就会被调用，且返回值就是 age 的值
        return number;
      },

      set(value) { //当有人修改 obj 的 age 属性时， set 函数( setter )就会被调用，且会收到修改的具体值
        number = value;
      },
    });

    // 注意：

    // 1、共用描述符 ：enumerable、configurable

    // 2、数据描述符 ：writable、value

    ///3、存取描述符 ：get、set

    // 4、当描述符存在 writable 或者 value 时，不能再使用  get 或 set ，否则会产生一个异常

    ///5、这些选项不一定是自身属性，也要考虑继承来的属性，通过 Object.create(null) 将 Object.prototype.__proto__ 属性指向 null
```

## vue2 响应式原理

1、vue 响应式也叫作数据双向绑定

2、首先遍历 data 里的数据，每一个数据都添加上 get 和 set 方法来实现数据监听

3、然后通过 get 来收集依赖

4、最后通过 set 来进行更改数据
