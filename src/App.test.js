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
    amount: "150",
    count: 3,
    created: "2020-01-14",
  },
  { id: 2,
    name: "캣츠파인푸드 파우치",
    flavor: "캥거루",
    amount: "85",
    count: 10,
    created: "2020-01-14",
  },
  { id: 3,
    name: "알모네이쳐",
    flavor: "치킨과 호박",
    amount: "80",
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
  });

  it('<NewItemBox/>', () => {
    const newItemBox = render(<NewItemBox/>);
    newItemBox.getByPlaceholderText('식품명');
    newItemBox.getByPlaceholderText('맛');
    newItemBox.getByPlaceholderText('용량(g)');
    newItemBox.getByPlaceholderText('개수');
    newItemBox.getByPlaceholderText('구입일');
    newItemBox.getByText('저장하기');
  });

  it('change inputs', () => {
    const {getByPlaceholderText} = render(<App items={items} />);
    fireEvent.change(getByPlaceholderText("식품명"), { target: { value : "알파스피릿" }});
    fireEvent.change(getByPlaceholderText("맛"), { target: { value : "흰살생선과 사과" }});
    fireEvent.change(getByPlaceholderText("용량(g)"), { target: { value : "85" }});
    fireEvent.change(getByPlaceholderText("개수"), { target: { value : "1" }});
    fireEvent.change(getByPlaceholderText("구입일"), { target: { value : "2020-02-01" }});

    expect(getByPlaceholderText("식품명")).toHaveAttribute('value', '알파스피릿');
    expect(getByPlaceholderText("맛")).toHaveAttribute('value', '흰살생선과 사과');
    expect(getByPlaceholderText("용량(g)")).toHaveAttribute('value', '85');
    expect(getByPlaceholderText("개수")).toHaveAttribute('value', '1');
    expect(getByPlaceholderText("구입일")).toHaveAttribute('value', '2020-02-01');
  });

});