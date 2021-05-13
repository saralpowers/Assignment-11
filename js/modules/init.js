
async function fetchEmployees() {
    try {
        const response = await fetch("../data/employees.json");
        //console.log(response);
        return response
    } catch (error) {
        console.error(error);
    }
}

export default {fetchEmployees};
