class Department {
    static fiscalYear = 2020;
    static createEmployee(name: string){
        return {name: name};
    }

    // private id: string;
    // private name: string;
    private employees: string[] =[];

    // constructor(id:string, n: string) {
    //     this.name = n;
    //     this.id =id;
    // }

    constructor(private readonly id:string, public name: string) {

    }

    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string){
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    private static instance: ITDepartment;
    admins: string[];
    private lastAdmin:string;

    get mostRecentAdmin(){
        return this.lastAdmin;
    }
    set mostRecentAdmin(value: string){
        this.lastAdmin =value
    }

    private constructor(id: string, admins: string[]){
        super(id, "IT");
        this.admins = admins;
        this.lastAdmin=admins[0];
    }

    static getInstance(){
        if(ITDepartment.instance){
            return this.instance;
        }
        this.instance = new ITDepartment('d2',[]);
        return this.instance;
    }
}

// const accounting = new Department('d1', 'Accounting');
// accounting.name =   "HR";
// accounting.addEmployee('Diya');
// accounting.addEmployee('Neil');
// accounting.describe();
// accounting.printEmployeeInformation();

const it = ITDepartment.getInstance();
it.addEmployee('Priya');
it.addEmployee('Atul');
it.describe();
it.printEmployeeInformation();
console.log("Most Recent " + it.mostRecentAdmin);
it.mostRecentAdmin = "Priya";
console.log("Most Recent " + it.mostRecentAdmin);


// Singleton

