const registerAPI = "https://randhirmyshopbackend.herokuapp.com/api/register"; //Register User
const categoryInsert = "https://randhirmyshopbackend.herokuapp.com/api/category/create"; //Insert Category
const productInsert = "https://randhirmyshopbackend.herokuapp.com/api/product/create"; //Insert Product

// fetch : GET ( POSTMAN / NODE.js)


//Register User
export const Function_registerAPI = user => 
{
    return fetch(registerAPI, 
        {
      method: "POST",
      headers: 
      {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)  // JSON.stringfy : convert to JSON 
    })
      .then(response => {
        return response.json();  //JSON:Stringifly(user) : is used to convert array into json
      })
      .catch(err => console.log(err));
};

//Login Validation
  export const Function_loginAPI = user => {
    return fetch(`https://randhirmyshopbackend.herokuapp.com/api/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };


//Insert Category
export const Function_insert_category = category => 
{
    return fetch(categoryInsert, 
        {
      method: "POST",
      headers: 
      {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(category)  // JSON.stringfy : convert to JSON 
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
};


//Insert Product
export const Function_insert_product = product => 
{
    return fetch(productInsert, 
        {
      method: "POST",
      headers: 
      {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)  // JSON.stringfy : convert to JSON 
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
};


//Show Category In React
export const getAllcategories = () => 
{
  return fetch(`https://randhirmyshopbackend.herokuapp.com/api/category/getallcategories`,
   {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};


//Show Products In React
export const getAllproducts = () => {
  return fetch(`https://randhirmyshopbackend.herokuapp.com/api/product`,
   {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};


// testing get categories
export const FunctionAllCategories = () => {
  return fetch(`https://randhirmyshopbackend.herokuapp.com/api/category/getallcategories`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    // body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};