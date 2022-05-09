import { deleteCar, updateCar } from "../services/car.service"
import { useState } from "react"

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
        const res = await updateCar(e.target.parentNode.id, carData)
        await props.updateCar(res.data.data)
        changeBool(e)
    }

    async function handleClick(e) {
        e.preventDefault()
        await deleteCar(e.target.parentNode.id)
        await props.deleteCar(e.target.parentNode.id)
    }

    return (
        <div className="section">
            <h1 className="heading-h1 light-purple-gradient">See all your car below</h1>

            <div className="flex-space-between-align-center">
                {
                    props.allCar.map(name => {
                        return updateACar === false ?
                            <div className="one-card">
                                <div id={name._id} key={name._id}>
                                    <p>Brand: {name.brand}</p>
                                    <p>Model: {name.model}</p>
                                    <p>Horse power: {name.horse_power}</p>
                                    <p>Num doors: {name.num_doors}</p>
                                </div>
                                <div>
                                    <p className="button-color" onClick={changeBool}>Modif informations</p>
                                    <p className="button-color" onClick={handleClick}>Delete Car</p>
                                </div>
                            </div>
                        :
                            <div className="one-card">
                                <div id={name._id} key={name._id}>
                                    <form onChange={onChangeHandler}>
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
                                    </form>

                                    <p className="button-color" onClick={changeBool}>Cancel</p>
                                    <p className="button-color" onClick={onSubmitHandler}>Validate</p>
                                </div>
                            </div>
                    })

                }
            </div>
        </div>
    )
}

export default CarSeeAll