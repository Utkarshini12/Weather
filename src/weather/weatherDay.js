import styles from '../styles.module.css'

function WeatherDay({min, max, weatherType, weatherKey, dayOfWeek }) {

    return(
        <div className='card text-white bg-dark m-3'>
           
            <div className={styles.day}> 
            <div className='text-center'> {dayOfWeek}</div>
           
    <img src ={ `https://developer.accuweather.com/sites/default/files/${weatherKey}-s.png`} alt={weatherType} /> 
    Temp :{min} / {max} 
                </div>
           
        </div>
    )
}

export default WeatherDay