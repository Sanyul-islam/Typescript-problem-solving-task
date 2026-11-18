
function multiplyValue(Number1:number,Number2:number=2):number{
    const totall = Number1*Number2;
return totall
}


function processInput(input: string | number | boolean){
    if (typeof input === "string") {
        let result = input.trim().toLowerCase();
        return result;
    }
    if (typeof input === "number") {
        let result = input*10
        return result;
    }
    if (typeof input === "boolean") {
        if (input === true ) {
            return `"Active"`
        } else{
            return `"Inactive"`
        }
    }
}

function formatCoordinate([lat,lng,location]: readonly [number, number, string]):string {
    
  return `"Location: ${location} ,(${lat}, ${lng})"`;
}

function concatenateArrays<T>(...arrays:(readonly T[])[]): T[] {
    
  return arrays.flat();
}


interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
const courses:Course[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];
function getPopularCourses(courses: Course[], minStudents:number): Course[] {
  return courses.filter(
    (course) => course.students >= minStudents && course.isPublished
  );
}


interface user {
  id: number;
  name: string;
  role: string;
}
const users:user[] = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];

function pluckValues<T,K extends keyof T>(users:T[],key:K):T[K][]{
const result = users.map((user)=>{
    return user[key];
});
return result
}

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }
  getDetails():string{
    return `"Employee: ${this.name}, Base Salary: ${this.baseSalary}"`;
  }
}

class Manager extends Employee {
  private department:string;
  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department=department;
  }
  getRoleInfo():string{
    return `"Manager of ${this.department}: ${this.name}"`;
  }
}

async function validateAgeAsync(age: number):Promise<string> {
  if (age < 18) {
    throw new Error(`Access Denied: Must be 18 or older`)
  }
  
  await new Promise<void>((resolve) => {

    setTimeout(resolve, 1000);
  });
    return `"Access Granted"`;
}
