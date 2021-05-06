
const DUMMY = "../modules/init.js";

// Use async/await to be able to return a variable out from the promise
const employees = async () => {
    const raw = await fetch(DUMMY);
    const json_data = await raw.json();
    const empObj = (json_data);
    
    return empObj;
};

export { employees };

// EXPORT THE FUNCTION
//export default {loadData};
