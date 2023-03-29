# THIS 指向

首先我们要知道关键字 this 是什么！

this 是根据执行上下文（执行环境）动态指向当前调用的对象； 谁调用，就指谁。

1、全局作用域下：this 始终指向 window 对象。

2、函数作用域下：函数被谁调用，this 就指向谁。

3、对象中的函数作用域下：this 指向该方法所属的对象。

4、在构造函数中：this 始终指向新对象。

5、自执行函数中：this 指向 window。

6、箭头函数中：箭头函数本身没有 this，它的 this 是继承而来的。

注意：匿名函数的 this 就指向 window，没有其他结果。

## 全局作用域下

在全局作用域下，this 关键字 就是 Window。

```
    <script>
        console.log(this); // Window
    </script>

```

## 函数作用域下

在函数作用域中，this 关键字不是一成不变的，是谁调用，就是谁。

```
    function ordinary() {

        console.log(this);
    }

    const obj = { a: 1 };

    ordinary(); // Window

    ordinary.call(obj); // {a: 1}

```

## 对象中的函数作用域下

注：对象中的函数中的 this 是可以修改的

```
    const obj = {

        a: 1,

        ordinary: function () {

            console.log(this);
        },
    };

    obj.ordinary(); // {a: 1, ordinary: ƒ}

```

## 在构造函数中

在构造函数中 this 就是实例对象

```
    function Ordinary(name) {

        this.name = name;

        console.log(this);
    }

    const fun = new Ordinary("张三");  // Ordinary {name: '张三'}

    console.log(fun); // Ordinary {name: '张三'}

```

## 自执行函数中

在自执行函数内 this 是 Window

```
    (function Ordinary() {

        console.log(this); // Window
    })();
```

## 箭头函数中

箭头函数的 this 比较特殊，它本身没有 this ，但是它可以继承上级作用域的 this

```
    const obj = {

        a: this,

        arrows: () => {

            console.log(this);

        },
        ordinary: function () {

            console.log(this.a); // window
        },
    };

    obj.arrows(); // window

    obj.ordinary(); // obj

    <!-- 如果上面的例子不够明显，请看下面 -->

    function ordinary() {

        console.log(this, "ordinary");

        return () => {

            console.log(this, "arrows");
        };
    }
    ordinary()();  // window "ordinary" // window "arrows"

    <!-- 上面的这是在全局调用，如果改变了 ordinary 这个函数的 this 呢 -->

    const obj = {

        a: 1,
    };

    function ordinary() {

        console.log(this, "ordinary");

        return () => {

            console.log(this, "arrows");
        };
    }

    ordinary.call(obj)(); // {a: 1} 'ordinary'  // {a: 1} 'arrows

```

## 匿名函数的

匿名函数的 this 就指向 window，没有其他结果

```
    const obj = {
        a: 1,
    };

    function ordinary() {

        console.log(this);

        return function () {

            console.log(this);
        };
    }
    ordinary.call(obj)(); // {a: 1}  // Window
```
