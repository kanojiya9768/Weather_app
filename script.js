// have used universal weather app api 

//on clicking enter
document.getElementById('search').addEventListener('submit', (e) => {
  e.preventDefault();
  fetch_api();

  document.getElementById('searched_text').innerText = '';
})



//on click of search btn
document.getElementById('search_city').addEventListener('click', (e) => {
  e.preventDefault();
  fetch_api();

  document.getElementById('searched_text').innerText = '';
})





//fetch api here 
let fetch_api = () => {

  let city_name = document.getElementById('searched_text').value;
  let url = `https://api.weatherapi.com/v1/current.json?key=cb80e1fac84c43beb82105100211509&q=${city_name}&aqi=no`;

  fetch(url).then((res)=>{
    return res.json();
  }).then((data)=>{
    //call show data function to display the data on screen
    show_data(data);

    //print response on console to make sure that response is comming succefully
   console.log(data);
  }).catch(err =>{
    alert("Enter valid city , State or Country Name.!")
  })
  
}






//show data method is written here 
let show_data = (newdata) => {

  let time = new Date(newdata.location.localtime).toDateString();
  document.getElementById('cards').style.display = 'flex'; 

  let localtime = new Date(newdata.location.localtime).toLocaleTimeString();
  

  let data = `
   <div id='card'>
      <div id='places'>
        <p>${newdata.location.name}</p>
        <p>${newdata.location.region}</p>
        <p>${newdata.location.country}</p>
      </div>
      
      <p>${time}</p>
      <p>${localtime}</p>
      <img src=${newdata.current.condition.icon} alt='icon'>
      
        <p>Temprature in Cencius : <b>${newdata.current.temp_c} °C</b></p>
        <p>Temprature in Fahrenheit : <b>${newdata.current.temp_f} °F</b></p>
    </div>`

  document.getElementById('cards').innerHTML = data;

}
