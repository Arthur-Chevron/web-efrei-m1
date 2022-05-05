import { deleteCar, updateCar } from "../services/car.service"
import { useState } from "react";

const CarSeeAll = (props) => {

    const [updateACar, setUpdateACAr] = useState(false)

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

    const changeBool = (e) => {
        e.preventDefault()
        setUpdateACAr(!updateACar)
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        console.log(e.target.parentNode.id)
        const res = await updateCar(e.target.parentNode.id, carData)
        await props.updateCar(res.data.data)
    }

    async function handleClick(e) {
        e.preventDefault()
        await deleteCar(e.target.parentNode.id)
        await props.deleteCar(e.target.parentNode.id)
    }

    return (
        <div>
            <h1>See all your car below</h1>

            <div>
                <div>
                    <p>Brand</p>
                    <p>Model</p>
                    <p>Horse power</p>
                    <p>Number of doors</p>
                </div>
                {
                    props.allCar.map(name => {
                        return updateACar === false ?
                            <div id={name._id} key={name._id} >
                                <p>{name.brand}</p>
                                <p>{name.model}</p>
                                <p>{name.horse_power}</p>
                                <p>{name.num_doors}</p>
                                <p onClick={changeBool}>Modif informations</p>
                                <p onClick={handleClick}>❌</p>
                            </div>
                        :
                            <div id={name._id} key={name._id} >
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
                                        <option value="250">300</option>
                                        <option value="250">380</option>
                                    </select>

                                    <label>Number of Doors</label>
                                    <select name="num_doors">
                                        <option value="">Please select</option>
                                        <option value="2">2</option>
                                        <option value="4">4</option>
                                    </select>

                                    <input type="submit" name="submit" />

                                </form>

                                <p onClick={changeBool}>Cancel</p>
                            </div>
                    })

                }
            </div>
        </div>
    )
}

export default CarSeeAll