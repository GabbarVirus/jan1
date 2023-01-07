/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  let arrDev=arr.map(function(elements)
  {
    if(elements.profession==="developer")
    {
      console.log(elements);
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here

  let arr1Dev=arr.forEach(function(array)
  {
    if(array.profession==="developer")
    {
      console.log(array);
    }
  })
}

function addData() {
  //Write your code here
  arr.push({id: 4, name: "gabbar", age: "23", profession: "vella"})
  console.log(arr);

}

function removeAdmin() {
  //Write your code here
  let updated_arr=arr.filter(function(val){
    if(val.profession!=="admin")
    {
      return val;
    }
  });
  console.log(updated_arr);
}

function concatenateArray() {
  //Write your code here
  let arr2= [
    { id: 5, name: "virus", age: "25", profession: "pogramar" },
    { id: 6, name: "Hitman", age: "26", profession: "kaaljadu" },
    { id: 7, name: "rohit", age: "27", profession: "footballer" }, 
  ];
  let Concatented_arr=arr.concat(arr2);
  console.log(Concatented_arr);
}
