# localstore

使用localStorage实现历史记录搜索功能

## localStorage API [Storage MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage)

作为 Web Storage API 的接口，Storage 提供了访问特定域名下的会话存储（session storage）或本地存储（local storage）的功能，例如，可以添加、修改或删除存储的数据项。

如果你想要操作一个域名的会话存储（session storage），可以使用 Window.sessionStorage；如果想要操作一个域名的本地存储（local storage），可以使用 Window.localStorage。

**属性**

`Storage.length` 只读

返回一个整数，表示存储在 Storage 对象中的数据项数量。

**方法**

`Storage.key()`

该方法接受一个数值 n 作为参数，并返回存储中的第 n 个键名。

`Storage.getItem()`

该方法接受一个键名作为参数，返回键名对应的值。

`Storage.setItem()`

该方法接受一个键名和值作为参数，将会把键值对添加到存储中，如果键名存在，则更新其对应的值。

`Storage.removeItem()`

该方法接受一个键名作为参数，并把该键名从存储中删除。

`Storage.clear()`

调用该方法会清空存储中的所有键名


## screenshots

![image](https://github.com/nankeer/localstore/raw/master/screenshots.gif)