import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ResMenu = () => {
  const [resMenu, setResMenu] = useState([]);
 
  let params = useParams();
  let id = params.id;
  useEffect(() => {
    const fetchData = async () => {
      const resMenudata = await fetch(
        "https://namastedev.com/api/v1/listRestaurantMenu/" + id,
      );
      const resMenuJson = await resMenudata.json();
      console.log(
        resMenuJson.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards,
      );
      setResMenu(
        resMenuJson.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards,
      );
    };

    fetchData();
  }, []);
  return (
    <div className="menu">
      <h2>Menu</h2>
      {resMenu.map((card) => {
       let items = card?.card?.card?.itemCards;
      let  title = card?.card?.card?.title;
        if (!items) return null;
        return (
          <div key={title}>
            <h1>{title}</h1>
            {items.map((item) => {
              return (
                <div key={item.card.info.id}>
                  <p className="item-title">{item.card.info.name}</p>
                  <p className="item-des-price">{item.card.info.description}</p>
                  <p className="item-des-price">{item.card.info.price / 100}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ResMenu;
