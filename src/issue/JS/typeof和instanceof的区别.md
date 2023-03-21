# 1、typeof 和 instanceof 的区别

这两个操作符都是用来做 数据类型判断的，但是用到的场景不同

## typeof

typeof 一般用来用来检测基本数据类型，返回的是当前数据的具体类型

```
      const num = 1;

      const str = "我饿了！";

      const bool = true;

      const empty = undefined;

      const pointer = null;

      const big = BigInt(100);

      const sym = Symbol("徐健");


      console.log(typeof num); // number

      console.log(typeof str); // string

      console.log(typeof bool); // boolean

      console.log(typeof empty); // undefined

      console.log(typeof pointer); // object

      console.log(typeof big); // bigint

      console.log(typeof sym); // symbol


```

如果用来检测引用数据类型呢

```
      const arr = [];

      const date = new Date();

      const fun = function () {};

      const obj = {};



      console.log(typeof arr); // object

      console.log(typeof date); // object

      console.log(typeof fun); // function

      console.log(typeof obj); // object
```

上面的代码可以看出，如果用 typeof 来检测基本数据类型，是没什么问题的，但是如果用来检测引用数据类型，就会发现好像不是那么准确，所以就有了 instanceof

## instanceof

instanceof 是基于原型链向上查找，语法：object instanceof constructor
查找逻辑是判断当前实例对象的原型链上 有没有 某个构造函数

```
      const arr = [];

      const date = new Date();

      const fun = function () {};

      const obj = {};

      console.log(arr instanceof Array); // true

      console.log(date instanceof Date); // true

      console.log(fun instanceof Function); // true

      console.log(obj instanceof Object); // true

```

如果用来检测基本数据类型呢

```
       const num = 1;

       console.log(num instanceof Number) // false

```

这是为啥呢？
这种声明方式是字面量声明方式，而 instanceof 是在原型链中查找，所以说是 false
如果想用 instanceof 来检测 基础数据类型 那么需要换一种声明方式

```
       const num = new Number(1);

       console.log(num instanceof Number) // true

```

## 结论

typeof 和 instanceof 的区别 有以下区别

    1、 返回值不一样， typeof 返回的是具体的数据类型， instanceof 返回的是布尔值

    2、typeof 对于实例对象，只能返回object，导致有时候得不到真实的数据类型

    3、instanceof 可以实例对象进行判断，判断方法是根据实例对象的原型链依次向上查询

## 扩展

有没有一种方法既能检测出基础数据类型，也能检测引用数据类型呢

### Object.prototype.toString.call()

获取 Object.portotype 上的 toString 方法，让方法的 this 变为需要检测的数据类型值，并且让这个方法执行

```
      const num = 1;
      const str = "我饿了！";
      const bool = true;
      const empty = undefined;
      const pointer = null;
      const big = BigInt(100);
      const sym = Symbol("徐健");
      const arr = [];
      const date = new Date();
      const fun = function () {};
      const obj = {};

      console.log(Object.prototype.toString.call(num));     // [object Number]
      console.log(Object.prototype.toString.call(str));     // [object String]
      console.log(Object.prototype.toString.call(bool));    // [object Boolean]
      console.log(Object.prototype.toString.call(empty));   // [object Undefined]
      console.log(Object.prototype.toString.call(pointer)); // [object Null]
      console.log(Object.prototype.toString.call(big));     // [object BigInt]
      console.log(Object.prototype.toString.call(sym));     // [object Symbol]
      console.log(Object.prototype.toString.call(arr));     // [object Array]
      console.log(Object.prototype.toString.call(date));    // [object Date]
      console.log(Object.prototype.toString.call(fun));     // [object Function]
      console.log(Object.prototype.toString.call(obj));     // [object Object]

```

在 Object 这个类的原型上也有一个方法 toString,但是这个方法并不是把值转换成字符串，而是返回当前值得所属类详细信息，固定结构：’[object 所属的类]'

Object.prototype.toString 执行的时候返回当前方法中的 this 的所属类信息，也就是，我想知道谁的所属类信息，我们就把这个 toString 方法执行，并且让 this 变为我们检测的这个数据值，那么方法返回的结果就是当前检测这个值得所属类信息
