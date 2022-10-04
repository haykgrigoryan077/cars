import { useDispatch, useSelector } from "react-redux"
import { CarsProps, CarsPropstest } from "../interface/interface"
import { ChangeEvent, useState } from "react"
// style
import "./index.css"
import { changeColorAction } from "../redux/cardReducer"
import { EDIT_CAR_DATA } from "../redux/types"

interface CarsDataProps {
    carsData: Array<CarsProps>
}

interface Props {
    carsReducer: CarsDataProps
}

const Cars = () => {

    const carsData = useSelector((state: Props) => {
        console.log(state);
        return state.carsReducer.carsData
    })

    const dispatch = useDispatch()

    const [color, setColor] = useState<string>('')
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value)
    }

    return (
        <div className="carsWrapper">
            {carsData.map((value: CarsProps, index: number) => {
                return (
                    <div key={index + Math.random()} className="card-wrapper" style={{backgroundColor: value.backgroundColor}}>
                        <div className="img-wrapper">
                            <img src={value.image} />
                        </div>
                        <div className="content-wrapper" style={{color: "white"}}>
                            <h2 >{value.company}</h2>
                            <h4>{value.model}</h4>
                        </div>
                        <input
                            type='text'
                            onChange={(e) => {
                                handleInput(e)
                            }}
                        />
                        <input
                            value='change color'
                            type='submit'
                            onClick={() => {
                                dispatch(changeColorAction(EDIT_CAR_DATA, value.id, 'blue'))
                            }}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Cars