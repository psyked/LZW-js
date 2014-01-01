LZW.js
======

**LZW encoding and decoding of Strings in JavaScript**

From [Wikipedia](http://en.wikipedia.org/wiki/Lempel%E2%80%93Ziv%E2%80%93Welch):

> **Lempel–Ziv–Welch (LZW)** is a universal lossless data compression algorithm created by *Abraham Lempel*, *Jacob Ziv*,
> and *Terry Welch*. It was published by Welch in 1984 as an improved implementation of the LZ78 algorithm published by
> Lempel and Ziv in 1978. The algorithm is simple to implement, and has the potential for very high throughput in hardware
> implementations. It was the algorithm of the widely used Unix file compression utility compress, and is used in the GIF
> image format.
>
> <cite>http://en.wikipedia.org/wiki/Lempel%E2%80%93Ziv%E2%80%93Welch</cite>

Methods
-------

### LZW.encode(string)

Takes an input string, compresses it using LZW and returns the compressed string.

Input: **String**

Output: **String**

### LZW.decode

Takes a LZW-encoded string, decompresses it and returns the original, uncompressed string.

Input: **String**

Output: **String**

Credits
-------

- Original encode / decode functions provided by [Matthew Crumley](http://stackoverflow.com/users/2214/matthew-crumley) in a [StackOverflow post.](http://stackoverflow.com/questions/294297/javascript-implementation-of-gzip)