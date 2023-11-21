// Write your solution in this file!
const employee = {
  name :'Sam',
  streetAddress : '11 Broadway',
};


function updateEmployeeWithKeyAndValue(employee,key,value) {
  return {...employee,[key]: value};
};

  const employeeNewAddress = updateEmployeeWithKeyAndValue(employee,'streetAddress','12 Broadway')
  console.log(employeeNewAddress);

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
  employee[key]= value ;

  return employee;

  const employeeNewAddressDes = destructivelyUpdateEmployeeWithKeyAndValue(employee,'streetAddress','12 Broadway');
  console.log(employeeNewAddressDes);
};

function deleteFromEmployeeByKey(employee,key,value) {

    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
  }
  
  const deletedKey = deleteFromEmployeeByKey(employee,'name')

  console.log(deletedKey);

  function  destructivelyDeleteFromEmployeeByKey(employee, key) {
    
    delete employee[key];

    return employee;
    
  };

  const deletedKeyDes = destructivelyDeleteFromEmployeeByKey(employee,'name');
