import { useEffect, useState } from "react";
import styled from "styled-components"
import SearchResult from "./components/SearchResult/SearchResult";

export const BASE_URL = "http://localhost:9000"

const App = () => {

   const [data, setData] = useState(null)
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)
   const [filterData, setFilterData] = useState(null);

    useEffect(()=> {
      const fetchData = async () => {
         setLoading(true)
    try {
      const response = await fetch(BASE_URL);
    const json = await response.json();

    setData(json)
    setLoading(false)
   
    }
     catch (error) {
      setError("Unable to fetch data")
    }
  };
  fetchData();
    }, []);

    if(error) {
      <div>{error}</div>
    }
    if(loading){
      <div>Loading.....</div>
    }

    const searchFood = (e) =>{
         const searchValue = e.target.value;
         console.log(searchValue);

         if(searchValue === ""){
          setFilterData(null)
         }

         const filter = data.filter((food)=>
         food.name.toLowerCase().includes(searchValue.toLowerCase())
         );
         setFilterData(filter)
    }
    

  return <MainContainer>
    <TopConatiner>
      <div className="image">
        <img src="/logo.svg" alt="logo" />
      </div>

      <div className="search">
        <input onChange={searchFood} type="text" placeholder="Search Food...."/>
      </div>
        </TopConatiner>

      <FilterContainer>
         <Button>All</Button>
         <Button>Breakfast</Button>
         <Button>Lunch</Button>
         <Button>Dinner</Button>
      </FilterContainer>

      <SearchResult data= {data}/>
    
  </MainContainer>;
};

export default App;

const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopConatiner = styled.div`
min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search{
    input{
      background-color: transparent;
      color: white;
      border: 1px solid red;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      font-weight: 400;
      padding: 0 10px;
    }
  }

`;
const FilterContainer = styled.section`
     display: flex;
     justify-content: center;
     gap: 12px;
     padding-bottom: 40px;
`;
export const Button = styled.button`
    background-color: #FF4343;
    border-radius: 5px;
    padding: 6px 12px;
    border: none;
    color: white;
`;