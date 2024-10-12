import React from "react";
import "./ListPage.scss";
import { listData } from "../../lib/dummydata";
import Filter from "../../components/Filter/Filter";
import Card from "../../components/card/Card";

const ListPage = () => {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map(item=>(
            <Card key={item.id} item={item}/>
          ))}
        </div>
      </div>
      <div className="mapContainer">Map</div>
      
    </div>
  );
};

export default ListPage;