export function displayProducts(){
    let url = "https://www.mocky.io/v2/5dd2f11a33000022ae7a3f61";
    return fetch(url)
           .then(data => data.json());
  }