
    async function fetchEmployees() {
        try {
            const response = await fetch("../data/employees.json");
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }
    fetchEmployees();


export default {fetchEmployees};

