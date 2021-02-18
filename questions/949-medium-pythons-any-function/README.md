Implement the Python's `any` function in the type system. A type takes the Array and return `true` if any element of the Array is true. If the Array is empty, return `false`.

For example
```
type Sample1 = Any<[1, "", false, [], {}]>; // expected to be true.
type Sample2 = Any<[0, "", false, [], {}]>; // expected to be false.
```
