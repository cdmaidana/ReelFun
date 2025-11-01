import React from "react"; 

const ItemListContainer = ({ itemListTit,itemListDet }) => {
  return (
    <div className="text-center d-flex flex-column justify-content-center align-items-center">
      <h1 className="display-2 fw-bold">{itemListTit}</h1> 
      <h3 className="display-2 fw-bold">{itemListDet}</h3>  
    </div>
  );
};

export default ItemListContainer;