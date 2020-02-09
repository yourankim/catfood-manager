import React, { useState } from 'react';

function NewItemBox(props) {

  const [name, setName] = useState('');
  const [flavor, setFlavor] = useState('');
  const [amount, setAmount] = useState('');
  const [created, setCreated] = useState('');
  const [count, setCount] = useState('');

  return (
    <div className="itemBox">
      <form>
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