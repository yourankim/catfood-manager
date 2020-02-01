import React from 'react';

function ItemBox(props) {
  const item = props.item;
  
  const onClickYummy = function() {
   alert("잘 먹을게. 냠냠!");
   props.handleItemCount(props.item.id);
  }

  return (
    <div className="itemBox">
      <div className="itemBox-name">{item.name}</div>
      <div>{item.flavor}</div>
      <div>{item.amount}</div>
      <div>{item.created} 구입</div>
      <div>{item.count}개 남음</div>
      <button className="itemBox-button" onClick={onClickYummy}>yummy!</button>
    </div>
  );
}

export default ItemBox;