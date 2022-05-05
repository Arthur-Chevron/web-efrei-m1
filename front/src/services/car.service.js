import axios from 'axios'

const URL = 'http://localhost:8085/'

// add a car to the database
export const addCar = async (carData) => {
    try {
        return await axios.post(
            URL + 'cars',
            carData
        )
    } catch(err) {
        console.log("addCar error : " + err)
    }
}

// see all car from database
export const seeAllCar = async () => {
    try {
        return await axios.get(
            URL + 'cars/findAll'
        )
    } catch(err) {
        console.log("seeAllCar error : " + err)
    }
}

// see one car from database
export const seeOneCar = async (id) => {
    try {
        return await axios.get(
            URL + 'cars/findAll?_id' + id
        )
    } catch(err) {
        console.log("seeAllCar error : " + err)
    }
}

// update a car
export const updateCar = async (id, data) => {
    try {
        return await axios.put(
            URL + 'cars?_id=' + id,
            data
        )
    } catch(err) {
        console.log("updateCar error : " + err)
    }
}

// delete a car
export const deleteCar = async (id) => {
    try {
        return await axios.delete(
            URL + 'cars?_id=' + id
        )
    } catch(err) {
        console.log("seeAllCar error : " + err)
    }
}