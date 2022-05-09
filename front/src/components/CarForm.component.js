import { useState } from "react"
import { addCar } from "../services/car.service"

const CarForm = (props) => {

    const [carData, setCarData] = useState({
        brand: "",
        model: "",
        horse_power: 0,
        num_doors: 0
    })

    const onChangeHandler = (e) => {
        setCarData({
            ...carData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        const res = await addCar(carData)
        await props.addCarReact(res.data.data)
    }

    return (
        <div className="one-card margin-bottom">
            <p className="light-purple-gradient">Hello, complete the form bellow to add a new car</p>

            <form onChange={onChangeHandler} onSubmit={onSubmitHandler}>
                <label>Brand</label>
                <input className="input-in-card" type="text" name="brand" />

                <label>Model</label>
                <input className="input-in-card" type="text" name="model"/>

                <label>Horse Power</label>
                <select className="select-in-card" name="horse_power">
                    <option value="">Please select</option>
                    <option value="180">180</option>
                    <option value="250">250</option>
                    <option value="250">300</option>
                    <option value="250">380</option>
                </select>

                <label>Number of Doors</label>
                <select className="select-in-card" name="num_doors">
                    <option value="">Please select</option>
                    <option value="2">2</option>
                    <option value="4">4</option>
                </select>

                <input className="button-color" type="submit" name="submit" />

            </form>
        </div>
    );
}

export default CarForm