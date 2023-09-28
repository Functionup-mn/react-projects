import styled from "styled-components";
import { BASE_URL, Button } from "../../App";

const SearchResult = ({ data }) => {
  return (
    <FoodCardContainer>
      <FoodCards>
        {data?.map((food) => ( // ? lagaye h ise optional channing
 
            <FoodCard key={food.name}>
              <div className="food_image">
                <img src={BASE_URL + food.image} alt="Food Image" />
              </div>

              <div className="food_info">
                <div className="info">
                  <h3>{food.name}</h3>
                  <p>{food.text}</p>
                </div>
              
              <div className="btn">
                <Button>${food.price.toFixed(2)}</Button>
              </div>
              </div>
            </FoodCard>
          )
        )}
      </FoodCards>
    </FoodCardContainer>
  );
};

export default SearchResult;

const FoodCardContainer = styled.section`
  height: 100vh;
  background-image: url("/background.png");
  background-size: cover;
  
`;

const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  row-gap: 20px;
  column-gap: 32px;
  gap: 20px;
  `;

const FoodCard = styled.div`
  width: 340px;
  height: 167px;
  flex-shrink: 0;
  border-radius: 19.447px;
  border: 0.659px solid #98f9ff;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(<path-to-image>),
    lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat,
    radial-gradient(
      151.92% 127.02% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.04) 77.08%,
      rgba(70, 144, 212, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.184196472167969px);
  display: flex;
  padding: 8px;

  .food_info{
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     align-items: flex-end;

     h1{
        margin-top: 16px;
        font-size: 16px;
        font-weight: 500;
     }
     p{
        margin-top: 4px;
        font-size: 12px;
     }
     .btn{
        font-family: 14px;
     }
  }
`;

