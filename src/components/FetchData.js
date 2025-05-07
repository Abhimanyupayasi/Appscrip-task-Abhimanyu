import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import LeftShort from './LeftShort';
import { useEffect } from 'react';
import { PiHeartBold } from "react-icons/pi";




function FetchData() {
  const [mobile, setMobile] = React.useState(false)
  const [tablet, setTablet] = React.useState(false)
  const [desktop, setDesktop] = React.useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMobile(true)
        setTablet(false)
        setDesktop(false)
      } else if (window.innerWidth <= 1024) {
        setMobile(false)
        setTablet(true)
        setDesktop(false)
      } else {
        setMobile(false)
        setTablet(false)
        setDesktop(true)
      }
    };

    handleResize(); // Call the function initially to set the state based on the current window size
    window.addEventListener('resize', handleResize); // Add event listener to handle window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener on component unmount
    };
  }, []);
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    const [showFilter, setShowFilter] = React.useState(false)


    React.useEffect(() => {
        const api = 'https://fakestoreapi.com'
        const fetchData = async () => {
            try {
                const response = await fetch(`${api}/products`)
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json()
                setData(data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }
    , [])

    const showFilterHandler = () => {
        setShowFilter(!showFilter)
    }
    const hideFilterHandler = () => {
        setShowFilter(false)
        
    }
    const filterHandler = () => {
        setShowFilter(true) 
      
    }
    
  return (
    <> <div className='filter-items'>
    {mobile ?   (<div style={{borderRight: '1px solid #dadada', width:'55%', margin:'auto', padding:'10px'}}>
        Filter
    </div>): (<div>
        <p>3425 ITEMS</p>
        <a  onClick={showFilterHandler}>
        <FaChevronLeft />
            {showFilter ? <p>Hide Filter</p> : <p>Show Filter</p> } </a>
    </div>)}
    <div>
        
        
        
       <div className='filter-items-container'>
       <select className='select-filter'>
            <option value="recomended">Recomended</option>
            <option value="Newest-first">Newest first</option>
            <option value="popular">popular</option>
            <option value="Price-high">Price : high to low</option>
            <option value="Price-low">Price : low to high</option>
        </select>
        </div>
        

    </div>

</div>
   <div className='main-fetch-data' >
    {showFilter && (<div style={showFilter ? { display: 'block' } : { display: 'none' }} className='left-short'>
        {/* <LeftShort  /> */}
        {showFilter && <LeftShort hideFilterHandler={hideFilterHandler} />}
    </div>)}
    <div>
   
    <div className='fetch-data-container'>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data.length > 0 && (
            <div className='fetch-data-list'>
                {data.map((item) => (
                    <div key={item.id} className='fetch-data-item'>
                        <img src={item.image} alt={item.title} />
                        <div className='heart-text'><h3>{item.title} </h3> <span><PiHeartBold /></span></div> 
                        <p> <a href=''>Sign in</a> or Create an account to see pricing</p>
                        {/* <p>Price: ${item.price}</p> */}
                    </div>
                ))}
            </div>
        )}
    </div>

   </div>
   </div>
   </>
  )
}

export default FetchData