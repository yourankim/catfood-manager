import React from 'react';

function ItemBox(props) {
  const item = props.item;
  
  const onClickYummy = function() {
    if(item.count < 1) {
      alert("다 먹었어. 꼬르륵...");
      return;
    } 
    alert("잘 먹을게. 냠냠!");
    props.handleItemCount(props.item.id);
  }

  return (
    <div className="itemBox">
      <div className="itemBox-name">{item.name}</div>
      <div>{item.flavor}</div>
      <div>{item.amount}g</div>
      <div>{item.created} 구입</div>
      <div>{item.count}개 남음</div>
      <button className="itemBox-button" onClick={onClickYummy}>yummy!</button>
    </div>
  );
}

export default ItemBox;