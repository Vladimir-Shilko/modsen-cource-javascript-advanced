class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    calculateAnnualSalary() {
        const baseSalary = super.calculateAnnualSalary();
        const bonus = 5000; // Пример бонуса для менеджеров
        return baseSalary + bonus;
    }
}

// Пример использования:
const manager1 = new Manager("Иван", 50000, "Отдел продаж");
const manager2 = new Manager("Анна", 60000, "Отдел маркетинга");

const manager1AnnualSalary = manager1.calculateAnnualSalary();
const manager2AnnualSalary = manager2.calculateAnnualSalary();

console.log(`Годовая зарплата менеджера ${manager1.name}: ${manager1AnnualSalary}`);
console.log(`Годовая зарплата менеджера ${manager2.name}: ${manager2AnnualSalary}`);