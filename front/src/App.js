import './App.css';
import CarForm from './components/CarForm.component'
import CarSeeAll from "./components/CarSeeAll.component"
import { useState, useEffect } from "react"
import { seeAllCar } from "./services/car.service"

function App() {
    const [allCar, setArray] = useState([
        {_id: "1234", brand: "Audi", model: "RS8", horse_power: 480, num_doors: 4}
    ])

    const addCarReact = (newValue) => {
        setArray((array) => [...array, newValue])
    }

    const deleteCar = (id) => {
        setArray(allCar.filter(item => item !== allCar[allCar.findIndex(a => a._id === id)]))
    }

    const updateCar = (data) => {
        console.log("need to update a value")
    }

    useEffect( () => {
        console.log("is fire")
        seeAllCar().then(r => {
            r.data.data.forEach(item => {
                addCarReact(item)
            })
        })
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <CarSeeAll
                    allCar={allCar}
                    deleteCar={deleteCar}
                    updateCar={updateCar}
                />

                <CarForm
                    allCar={allCar}
                    addCarReact={addCarReact}
                />
            </header>
        </div>
    )
}

export default App;