import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ItemBox from "./components/ItemBox";
import NewItemBox from "./components/NewItemBox";
import Profile from "./components/Profile";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isAddItem: false
    };
    this.handleItemCount = this.handleItemCount.bind(this);
    this.handleItemAdd = this.handleItemAdd.bind(this);
  }

  componentDidMount() {
    this.setState({ items: this.getAllItems() || [] });
  }

  handleItemCount(itemId) {
    let items = this.state.items;

    for (let i = 0; i < items.length; i++) {
      if (items[i].id !== itemId) continue;

      let newCount = items[i].count;
      newCount = newCount - 1;
      if (newCount < 0) return;
      items[i].count = newCount;
      break;
    }

    this.setState({ items: items });
  }

  handleItemAdd(item) {
    let items = this.state.items;
    const nextId = items.length + 2;
    item.id = nextId;
    items = [...items, item];
    this.setItemToLocalStorage(items);
    this.setState({ items: items, isAddItem: false });
  }

  setItemToLocalStorage(items) {
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
      <fragment>
        <Header />
        <Profile />
        {this.state.items &&
          this.state.items.map(item => (
            <ItemBox
              key={item.id}
              item={item}
              className='itemBox'
              handleItemCount={this.handleItemCount}
            />
          ))}
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
        <Footer />
      </fragment>
    );
  }
}

export default App;
