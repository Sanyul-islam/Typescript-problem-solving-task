"use strict";
function multiplyValue(Number1, Number2 = 2) {
    const totall = Number1 * Number2;
    return totall;
}
function processInput(input) {
    if (typeof input === "string") {
        let result = input.trim().toLowerCase();
        return result;
    }
    if (typeof input === "number") {
        let result = input * 10;
        return result;
    }
    if (typeof input === "boolean") {
        if (input === true) {
            return `"Active"`;
        }
        else {
            return `"Inactive"`;
        }
    }
}
function formatCoordinate([lat, lng, location]) {
    return `"Location: ${location} ,(${lat}, ${lng})"`;
}
function concatenateArrays(...arrays) {
    return arrays.flat();
}
const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true },
];
function getPopularCourses(courses, minStudents) {
    return courses.filter((course) => course.students >= minStudents && course.isPublished);
}
const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" },
];
function pluckValues(users, key) {
    const result = users.map((user) => {
        return user[key];
    });
    return result;
}
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `"Employee: ${this.name}, Base Salary: ${this.baseSalary}"`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `"Manager of ${this.department}: ${this.name}"`;
    }
}
async function validateAgeAsync(age) {
    if (age < 18) {
        throw new Error(`Access Denied: Must be 18 or older`);
    }
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
    return `"Access Granted"`;
}
