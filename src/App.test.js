import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import ItemBox from './components/ItemBox';

/*
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/
let items = [
  { id: 1,
    name: "카루 클래식",
    flavor: "치킨과 크랩",
    amount: "150g",
    count: 3,
    created: "2020-01-14",
  },
  { id: 2,
    name: "캣츠파인푸드 파우치",
    flavor: "캥거루",
    amount: "85g",
    count: 10,
    created: "2020-01-14",
  },
  { id: 3,
    name: "알모네이쳐",
    flavor: "치킨과 호박",
    amount: "80g",
    count: 5,
    created: "2020-01-14",
  }
];

describe('<ItemBox />', () => {
  it('render item properly', () => {
    const item = render(<ItemBox item={items[0]} />);
    item.getByText(items[0].name);
  });
});


describe('<App />', () => {

  it('render item list properly', () => {
    const { getByText } = render(<App items={items} />);
    getByText(items[0].name);
    getByText(items[1].name);
    getByText(items[2].name);
  });
  
  it('yummy button click', () => {
    const app = render(<App items={items} />);
    const buttons = app.getAllByText('yummy!');
    const count = items[0].count;
    const countDiv = app.getByText(`${count}개 남음`);
    
    fireEvent.click(buttons[0]);
    expect(countDiv).toHaveTextContent(`${count-1}개 남음`);
  })
});