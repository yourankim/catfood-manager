import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemBox from './components/ItemBox';
import NewItemBox from './components/NewItemBox';
import Profile from './components/Profile';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      items:[],
      isAddItem: false, 
    };
    this.handleItemCount = this.handleItemCount.bind(this);
    this.handleItemAdd = this.handleItemAdd.bind(this);
  }

  componentDidMount() {
    this.setState({items: this.getAllItems()});
  }

  handleItemCount(itemId) {
    let items = this.state.items;
    
    for(let i = 0; i < items.length; i++) {
      if(items[i].id !== itemId) continue;

      let newCount = items[i].count;
      newCount = newCount - 1;
      if(newCount < 0) return;
      items[i].count = newCount;
      break;
    } 
    
    this.setState({ items: items });
  }

  handleItemAdd(item) {
    let items = this.state.items;
    const nextId = items.length + 2;
    item.id = nextId;
    items.push(item);
    this.setState( { items: items, isAddItem: false} );
  }

  getAllItems() {
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

    return items;
  }

  

  render() {
    return (
      <fragment>
        <Header/>
        <Profile/>
        {this.state.items && this.state.items.map(item => (
          <ItemBox 
            key={item.id} 
            item={item}
            className="itemBox"
            handleItemCount={this.handleItemCount}
          />
        ))}
        <button onClick={() => (this.setState({ isAddItem : !this.state.isAddItem }))}>식량 추가하기</button>
        {this.state.isAddItem && <NewItemBox handleItemAdd={this.handleItemAdd} />}
        <Footer/>
      </fragment>
      
    )
  }
  
}

export default App;
