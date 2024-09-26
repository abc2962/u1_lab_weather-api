
const textInput = document.querySelector("#textInput")
const temp = document.querySelector("#temp")
const button = document.querySelector("#submitButton")
const cityName = document.querySelector("#cityName")
const apiKey = `dca695368ce3428fa84215347242609`


 

button.addEventListener("click", async () => {
    let city = textInput.value
    let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
    console.log(response)

let locationArray =  [`${response.data.location}, `, `${response.data.location.region}`]
locationArray.filter((location, locationArray) => {
    // if (location === `,` ) {
    //     locationArray.delete(locationArray[1])
    //     let locationText = locationArray.join(``)
        console.log(locationArray)
        cityName.textContent = `${response.data.location.name}, ${response.data.location.country}`
        temp.textContent = `(${response.data.current.temp_f}°F) (${response.data.current.temp_c}°)`

    })
})

// })

// dca695368ce3428fa84215347242609
