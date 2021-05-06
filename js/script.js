// IMPORT THE MODULE
import hello from '../js/modules/init.js';

// CREATE AN ARRAY OF EMPLOYEES
// let arrEmployees = [
//     [34123413, "Zak Ruvalcaba", 3424, "zak@vectacorp.com", "Executive"],
//     [23424665, "Sally Smith", 2344, "sally@vectacorp.com", "Administrative"],
//     [12341244, "Mark Martin", 5352, "mark@vectacorp.com", "Sales"],
//     [14545423, "Robin Banks", 7867, "robin@vectacorp.com", "Marketing"],
//     [13413453, "Sue Wedge", 1235, "sue@vectacorp.com", "QA"]
// ];

//convert array to json object in this form: [{"object":{"property_1":"value_1","property_2":"value_2"}}] to be copied into file from console
// function arrayToJson(arrEmployees) {
//     let obj, i, j, key, value;
//     let jsonArr = [];
//     let keyValues = ["empNum", "empName", "ext", "email", "department"];

  
//     for (i = 0; i < arrEmployees.length; i++) {
//       obj = {};
//       for (j = 0; j < keyValues.length; j++) {
//         key = keyValues[j];
//         value = arrEmployees[i][j].toString();
//         obj[key] = value;
//       }
//       jsonArr.push(obj);
//     }
//     return jsonArr;
//   }
// jsonData = (arrayToJson(arrEmployees));
// console.log(JSON.stringify(jsonData));

// GET DOM ELEMENTS
let empTable    = document.querySelector('#employees');
let empCount    = document.querySelector('#empCount');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid();

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentNode.parentNode.rowIndex;
            // REMOVE EMPLOYEE FROM ARRAY
            empTable.deleteRow(rowIndex);
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.lastElementChild.remove();
    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody');
    //let newEmployees = [];
    console.log("hi");

    async function fetchEmployees() {
        try {
            const response = await fetch("../data/employees.json");
            console.log(response);
            const employees = await response.json();
            console.log(employees);
            for (let employee of employees.employees) {
                tbody.innerHTML += 
                `
                <tr>
                    <td>${employee.empNum}</td>
                    <td>${employee.empName}</td>
                    <td>${employee.ext}</td>
                    <td><a href="mailto:${employee.email}">${employee.email}</a></td>
                    <td>${employee.department}</td>
                    <td><button class="btn btn-sm btn-danger delete">X</button></td>
                </tr>
                `
            // BIND THE TBODY TO THE EMPLOYEE TABLE
            empTable.appendChild(tbody);
            // UPDATE EMPLOYEE COUNT
            empCount.value = `(${employees.employees.length})`;
            }
        } catch (error) {
            console.error(error);
        }
    }
    fetchEmployees();
};

