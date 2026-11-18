What are the core differences between type aliases and interface in TypeScript?

Introduction

Both type and interface are used to define the structure of data in TypeScript. They help developers describe object properties and make code easier to understand.

Detailed Explanation

1. Type Alias:
A type alias can define objects, unions, primitives, and more.
    
    type User = {
    name: string;
    age: number;
    };

2. Interface:

An interface is mainly used to define the structure of objects. It also supports extension and declaration merging.

    interface User {
    name: string;
    age: number;
    }

Core Differences:
        1. type supports union types, primitive types, and objects.

    2. interface mainly defines object structures.

    3. Both support inheritance-like extension.

    4. Interfaces can be merged, but type aliases cannot.   

When Should You Choose One?

Use interface when defining object structures, especially when working with classes or extending objects. Use type when working with unions, primitives, or more complex types.

Conclusion:

Both type and interface are useful in TypeScript. Choose interface for object structures and type for more flexible type definitions.