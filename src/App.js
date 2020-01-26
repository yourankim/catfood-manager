import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemBox from './components/ItemBox';
import Profile from './components/Profile';

class App extends Component {

  items = [
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

  render() {
    return (
      <fragment>
        <Header/>
        <Profile/>
        {this.items.map(item => (
          <ItemBox 
            key={item.id} 
            item={item}
            className="itemBox"
          />
        ))}
        <Footer/>
      </fragment>
      
    )
  }
  
}

export default App;
