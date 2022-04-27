import { useState } from "react"
import { addCar } from "../services/car.service"

const CarForm = () => {

    const [carData, setCarData] = useState({
        brand: "",
        model: "",
        horse_power: 0,
        num_doors: 0
    })

    const dummyTrucks = [
        {
            name: "Trucky",
            weight: 4000
        },
        {
            name: "Truckor",
            weight: 8500
        }
    ]

    const onChangeHandler = (e) => {
        setCarData({
            ...carData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        console.log(carData)
        // send post to API
        await addCar(carData)
    }

    return (
        <div>

            <form onChange={onChangeHandler} onSubmit={onSubmitHandler}>
                <label>Brand</label>
                <input type="text" name="brand" />

                <label>Model</label>
                <input type="text" name="model" />

                <label>Horse Power</label>
                <select name="horse_power">
                    <option value="">Please select</option>
                    <option value="180">180</option>
                    <option value="250">250</option>
                </select>

                <label>Number of Doors</label>
                <select name="num_doors">
                    <option value="">Please select</option>
                    <option value="2">2</option>
                    <option value="4">4</option>
                </select>

                <input type="submit" name="submit" />

            </form>
        </div>
    );
}

const Truck = (props) => {
    return (
        <div>
            <p>Name : {props.name}</p>
            <p>Weight : {props.weight}</p>
        </div>
    )
}

export default CarForm