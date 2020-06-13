import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ItemBox from "./components/ItemBox";
import NewItemBox from "./components/NewItemBox";
import Profile from "./components/Profile";

export interface AppProps {
  //ownerName: string;
}
export interface Item {
  id: number;
  name: string;
  flavor: string;
  amount: number;
  created: string;
  count: number;
}
class App extends Component<AppProps, { items: Item[]; isAddItem: boolean }> {
  constructor(props: AppProps) {
    //console.log(props.ownerName);
    super(props);
    this.state = {
      items: [],
      isAddItem: false,
    };
    this.handleItemCount = this.handleItemCount.bind(this);
    this.handleItemAdd = this.handleItemAdd.bind(this);
  }

  componentDidMount() {
    this.setState({ items: this.getAllItems() || [] });
  }

  handleItemCount(itemId: number) {
    let items = this.state.items;
    const index = items.findIndex((item: Item) => item.id === itemId);
    const newCount = items[index].count - 1;
    if (newCount < 0) return;
    items[index].count = newCount;
    this.setItemToLocalStorage(items);
    this.setState({ items: items });
  }

  handleItemAdd(item: Item) {
    let items = this.state.items;
    const nextId = items.length + 2;
    item.id = nextId;
    items = [...items, item];
    this.setItemToLocalStorage(items);
    this.setState({ items: items, isAddItem: false });
  }

  setItemToLocalStorage(items: Item[]) {
    try {
      localStorage.setItem("catfood-items", JSON.stringify(items));
    } catch (e) {
      alert("데이터 저장 실패. 잠시 후 다시 시도하세요.");
    }
  }

  getAllItems() {
    let items;
    try {
      const data = localStorage.getItem("catfood-items");
      items = data ? JSON.parse(data) : [];
    } catch (e) {
      alert("데이터 불러오기 실패. 잠시 후 다시 시도하세요.");
      items = [];
    }

    return items;
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Profile />
        <div className='addItem'>
          <button
            className='addItem-button'
            onClick={() => this.setState({ isAddItem: !this.state.isAddItem })}
          >
            식량 추가하기
          </button>
          {this.state.isAddItem && (
            <NewItemBox handleItemAdd={this.handleItemAdd} />
          )}
        </div>
        <div className="item-list">
          {this.state.items &&
            this.state.items.map((item) => (
            <ItemBox
              key={item.id}
              item={item}
              handleItemCount={this.handleItemCount}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
