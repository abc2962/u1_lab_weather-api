const textInput = document.querySelector("#textInput")
const temp = document.querySelector("#temp")
const button = document.querySelector("#submitButton")
const cityName = document.querySelector("#cityName")
const apiKey = `dca695368ce3428fa84215347242609` 

button.addEventListener("click", async () => {
    let city = textInput.value
    city = textInput.value.toLowerCase()
    
    let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
let locationArray =  [`${response.data.location}, `, `${response.data.location.region}`]
locationArray.filter((location, locationArray) => {    
        cityName.textContent = `${response.data.location.name}, ${response.data.location.country}`
        temp.textContent = `(${response.data.current.temp_f}°F) (${response.data.current.temp_c}°C)`
    })})
// dca695368ce3428fa84215347242609
