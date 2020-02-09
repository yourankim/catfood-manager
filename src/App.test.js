import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import ItemBox from './components/ItemBox';
import NewItemBox from './components/NewItemBox';

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

describe('<NewItemBox />', () => {
  it('has inputs and submit button', () => {
    const newItemBox = render(<NewItemBox />);
    newItemBox.getByPlaceholderText('식품명');
    newItemBox.getByPlaceholderText('맛');
    newItemBox.getByPlaceholderText('용량(g)');
    newItemBox.getByPlaceholderText('개수');
    newItemBox.getByPlaceholderText('구입일');
    newItemBox.getByText('저장하기');
  });

  it('change inputs', () => {
    const {getByPlaceholderText} = render(<NewItemBox />);
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

  it('call handleItemAdd and clear inputs', () => {
    const handleItemAdd = jest.fn();
    const {getByText, getByPlaceholderText } = render(<NewItemBox handleItemAdd={handleItemAdd}/>);
    fireEvent.change(getByPlaceholderText("식품명"), { target: { value : "알파스피릿" }});
    fireEvent.change(getByPlaceholderText("맛"), { target: { value : "흰살생선과 사과" }});
    fireEvent.change(getByPlaceholderText("용량(g)"), { target: { value : "85" }});
    fireEvent.change(getByPlaceholderText("개수"), { target: { value : "1" }});
    fireEvent.change(getByPlaceholderText("구입일"), { target: { value : "2020-02-01" }});
    fireEvent.click(getByText('저장하기'));
    expect(handleItemAdd).toBeCalledWith({
      name: "알파스피릿",
      flavor: "흰살생선과 사과",
      amount: "85",
      count: "1",
      created: "2020-02-01"
    });
    expect(getByPlaceholderText("식품명")).toHaveAttribute('value','');
    expect(getByPlaceholderText("맛")).toHaveAttribute('value','');
    expect(getByPlaceholderText("용량(g)")).toHaveAttribute('value','');
    expect(getByPlaceholderText("개수")).toHaveAttribute('value','');
    expect(getByPlaceholderText("구입일")).toHaveAttribute('value','');


  });
});


describe('<App />', () => {

  it('render item list properly', () => {
    const { getByText } = render(<App items={items} />);
    getByText(items[0].name);
    getByText(items[1].name);
    getByText(items[2].name);
    getByText("식량 추가하기");
  });
  
  it('yummy button click', () => {
    const app = render(<App items={items} />);
    const buttons = app.getAllByText('yummy!');
    const count = items[0].count;
    const countDiv = app.getByText(`${count}개 남음`);
    
    fireEvent.click(buttons[0]);
    expect(countDiv).toHaveTextContent(`${count-1}개 남음`);
  });

  it('add-button click and show NewItemBox', () => {
    const app = render(<App items={items} />);
    const button = app.getByText('식량 추가하기');
    const length = items.length;

    fireEvent.click(button);
    app.getByPlaceHolderText('식품명');
  });

});