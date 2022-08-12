// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching = (array, name) =>  {
    return array.filter(
      (element) => element.toLowerCase() === name.toLowerCase()
    );
  }
//   console.log(findMatching(drivers,'Bobby'));

// ************************************* 

const fuzzyMatch = (arrays,names) => {
        return arrays.filter(
            (elements) => elements.toLowerCase().indexOf(names.toLowerCase()) === 0
    );
}
console.log(fuzzyMatch (drivers,"koko"));
// ********************************************

const matchName = (arr,Name) =>{
    return arr.filter((re) => re.name ===Name);
}