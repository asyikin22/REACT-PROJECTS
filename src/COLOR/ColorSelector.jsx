
import React, {useState} from 'react'
import styles from './Color.module.css'

function ColorSelector () {

    const [color, setColor] = useState("#FFFFFF")


    function handleColorChange(event) {
        setColor(event.target.value)
    }


    return(<div className={styles.container}>
                <h1>Color Selector</h1>

                <div className={styles.display} style={{backgroundColor: color}}>
                    <p>Selected Color: {color}</p>
                </div>

                <label className={styles.label}>Pick a Color: </label>
                <input type="color" value={color} onChange={handleColorChange}/>
    </div>)

}

export default ColorSelector