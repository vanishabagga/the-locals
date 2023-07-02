import React from "react";
import on from './onmap.png';

function MapON() {
  return (
    <div>
      <img src={on} useMap="#image-map" alt="Map of Ontario" />

      {/* Image Map using imageimap.net*/}
      <map name="image-map">
        <area target="_self" alt="Ottawa" title="Ottawa" href="/exploreo" coords="1287,716,1573,772" shape="rect" />
        <area target="_self" alt="Toronto" title="Toronto" href="/explore" coords="1121,887,1411,951" shape="rect" />
        <area target="_self" alt="Mississauga" title="Mississauga" href="/explorem" coords="675,940,1108,992" shape="rect" />
        <area target="_self" alt="Niagara Falls" title="Niagara Falls" href="/exploren" coords="1131,969,1522,1037" shape="rect" />
      </map>
    </div>
  );
}

export default MapON;
