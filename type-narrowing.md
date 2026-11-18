What is Type Narrowing in TypeScript?

Introduction:

Type Narrowing means checking the type of a variable so TypeScript can understand its exact type. It helps prevent errors and makes code safer.

Detailed Explanation
TypeScript provides different ways to narrow types.

1. Using typeof: Checks basic types like string and number.
  
  function showValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

2. Using instanceof: Checks whether an object belongs to a class.

    const today = new Date();

    if (today instanceof Date) {
        console.log(today.getFullYear());
    }

3. Using in: Checks whether a property exists in an object.
       if ("email" in user) {
  console.log(user.email);
} 

Conclusion:

Type Narrowing helps us write safer and cleaner code by checking variable types before using them.