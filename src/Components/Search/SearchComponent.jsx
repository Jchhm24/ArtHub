export const SearchComponent = ({ searchTerm, setSearchTerm }) => {
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="flex flex-row items-center justify-center h-[38px] w-[550px] bg-nile-blue-950 rounded-lg">
                <svg className="fill-yellow-orange-300 w-[26px] h-[26px] pl-1" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path d="M380-320q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l224 224q11 11 11 28t-11 28q-11 11-28 11t-28-11L532-372q-30 24-69 38t-83 14Zm0-80q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
                </svg>
                <input 
                    type="search" 
                    id="" 
                    placeholder="Buscar..." 
                    className="placeholder:text-yellow-orange-300 placeholder:font-medium placeholder:font-Comfortaa w-full bg-transparent outline-none pr-2"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
        </div>
    )
}