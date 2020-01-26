import React from 'react';

function ItemBox(props) {
  const item = props.item;
  const yummyOnClick = function () {
    alert("냠냠. 1개 다 먹었다.");
  }
  return (
    <div className="itemBox">
      <div className="itemBox-name">{item.name}</div>
      <div>{item.flavor}</div>
      <div>{item.amount}</div>
      <div>{item.created} 구입</div>
      <div>{item.count}개 남음</div>
      <button className="itemBox-button" onClick={yummyOnClick}>yummy!</button>
    </div>
  );
}

export default ItemBox;