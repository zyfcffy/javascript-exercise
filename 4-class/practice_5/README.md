写一个 Person 类，要有 name，age 属性，要有一个 introduce 方法，
introduce 方法返回一个字符串形如：

> My name is Tom. I am 21 years old.

再写一个 Student 类继承 Person 类，除了 name，age 属性，还有要有 class 属性。也有一个 introduce 方法，
introduce 方法返回一个字符串形如：

> My name is Tom. I am 21 years old. I am a Student. I am at Class 2.

再写一个 Teacher 类继承 Person 类，除了 name，age 属性，也有 class 属性。也有一个 introduce 方法，
introduce 方法返回一个字符串形如：

> My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.

如果 class 为空，就会返回：

> My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.

所有 Person 的子类的这段文字：

> My name is Tom. I am 21 years old.

都应该调用 Person 的 introduce 方法来获得。
