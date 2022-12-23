// have used universal weather app api 

//onform submission
document.getElementById('search').addEventListener('submit', (e) => {
  e.preventDefault();
  fetch_api();

  document.getElementById('searched_text').innerHTML = '';
})



//onlick of search button
document.getElementById('search_city').addEventListener('click', (e) => {
  e.preventDefault();
  fetch_api();

  document.getElementById('searched_text').innerHTML = '';
})




//fetch api here 
let fetch_api = async () => {
  let city_name = document.getElementById('searched_text').value;

  let url = `https://api.weatherapi.com/v1/current.json?key=cb80e1fac84c43beb82105100211509&q=${city_name}&aqi=no`;

  let res = await fetch(url);
  let data = await res.json();

  //call show data function to display the data on screen
  show_data(data);

  //print response on console to make sure that response is comming succefully
  console.log(data);
}






//show data method is written here 
let show_data = (newdata) => {

  let time = new Date(newdata.location.localtime).toDateString();
  document.getElementById('cards').style.display = 'flex';
  

  let data = `
   <div id='card'>
      <div id='places'>
        <p>${newdata.location.name}</p>
        <p>${newdata.location.region}</p>
        <p>${newdata.location.country}</p>
      </div>
      
      <p>${time}</p>
      <img src=${newdata.current.condition.icon} alt='icon'>
      
        <p>Temprature in Cencius : <b>${newdata.current.temp_c} °C</b></p>
        <p>Temprature in Fahrenheit : <b>${newdata.current.temp_f} °F</b></p>
    </div>`

  document.getElementById('cards').innerHTML = data;

}
