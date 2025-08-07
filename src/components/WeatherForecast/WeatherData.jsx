const WeatherData = ({day, conditions, time}) => {
    return (
        <>
            <h2>{day}</h2>
            <p><span>time: </span>{time}</p>
            <p><span>conditions: </span>{conditions}</p>
        </>
    );
};

export default WeatherData;