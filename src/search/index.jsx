import styles from '../WEATHER/Weather.module.css'

export default function Search({search, setSearch, handleSearch}){

    return(<>
    <div className={styles['search-engine']}>
        <input 
            type="text"
            className="city-search"
            placeholder="search city"
            name="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)} 
        />

        <button onClick={handleSearch}>
            Search Weather
        </button>
    </div>
    
    </>)
}