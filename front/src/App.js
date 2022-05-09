import './App.css';
import CarForm from './components/CarForm.component'
import CarSeeAll from "./components/CarSeeAll.component"
import { useState, useEffect } from "react"
import { seeAllCar } from "./services/car.service"

function App() {
    const [allCar, setArray] = useState([])

    const addCarReact = (newValue) => {
        setArray((array) => [...array, newValue])
    }

    const deleteCar = (id) => {
        setArray(allCar.filter(item => item !== allCar[allCar.findIndex(a => a._id === id)]))
    }

    const updateCar = (data) => {
        let items = [...allCar];
        let item = {...allCar[allCar.findIndex(a => a._id === data._id)]};

        item._id = data._id
        item.brand = data.brand
        item.model = data.model
        item.horse_power = data.horse_power
        item.num_doors = data.num_doors
        items[allCar.findIndex(a => a._id === data._id)] = item;
        setArray((items) => [...items]);
    }

    useEffect( () => {
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