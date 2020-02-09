import React, { useState } from 'react';

function NewItemBox(props) {

  const [name, setName] = useState('');
  const [flavor, setFlavor] = useState('');
  const [amount, setAmount] = useState('');
  const [created, setCreated] = useState('');
  const [count, setCount] = useState('');

  const onRegister = (e) => {
    e.preventDefault(); // 이벤트를 취소할 수 있는 경우 전파를 막지 않고 이벤트를 취소
    e.stopPropagation(); // 현재 이벤트 이후의 전파를 차단

    if(!name) {
      alert("식품명을 입력하세요.");
      return;
    }
    if(!flavor) {
      alert("맛을 입력하세요.");
      return;
    }
    if(!amount) {
      alert("용량을 입력하세요.");
      return;
    }
    if(!created) {
      alert("구입일을 입력하세요.");
      return;
    }
    if(!count) {
      alert("개수를 입력하세요.");
      return;
    }

    props.handleItemAdd({
      name: name,
      flavor: flavor,
      amount: amount,
      created: created,
      count: count,
    });

    setName('');
    setFlavor('');
    setAmount('');
    setCreated('');
    setCount('');
  }

  return (
    <div className="itemBox">
      <form onSubmit={onRegister}>
        <input type="text" id="name" value={name} onChange={(v) => setName(v.target.value)} placeholder="식품명"></input>
        <input type="text" id="flavor" value={flavor} onChange={(v) => setFlavor(v.target.value)} placeholder="맛"></input>
        <input type="number" id="amount" value={amount} onChange={(v) => setAmount(v.target.value)} placeholder="용량(g)"></input>
        <input type="text" id="created" value={created} onChange={(v) => setCreated(v.target.value)} placeholder="구입일"></input>
        <input type="number" id="count" value={count} onChange={(v) => setCount(v.target.value)} placeholder="개수"></input>
        <button>저장하기</button>
      </form>
    </div>
  );
}

export default NewItemBox;