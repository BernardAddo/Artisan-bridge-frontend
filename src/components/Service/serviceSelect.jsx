
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Slider from "../UI/Slider";
import FindPageComponent from "../FindArtisans/FindPageComponent";

export default function ServiceSelect() {    

    const [ServiceSelect, SetserviceSelect] = useState([]);
    const [refreshKey, setRefreshKey] = useState(0);
   
    const {service_id} = useParams();
    
    const fetchserviceSelect = () => {
    fetch(`https://artisan-bridge-data.herokuapp.com/service/${service_id}`)
      .then((response) => response.json())
      .then((data) => {
       const dataList = Object.entries(data)
        SetserviceSelect(dataList);})}
     
        useEffect(() => {
          fetchserviceSelect();
        }, [refreshKey]);

    
    

        return (
          <>
            <div>
              <Slider />
              {ServiceSelect.map((artisan) => {
                const skillList = artisan[1];
                const skill = artisan[0];
                if (skillList.length != 0) {
                  return <FindPageComponent skill={skill} data={skillList} />;
                }
              })}
            </div>
          </>
          );
}
  