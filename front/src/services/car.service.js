import axios from 'axios'

const URL = 'http://localhost:8085/'

export const addCar = async (carData) => {
    try {
        await axios.post(
            URL + 'cars/update',
            carData
        )
    }
    catch(err) {
        console.log("addCar error : " + err)
    }
}