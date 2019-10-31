import React from 'react';
import axios from 'axios';
import Card from './Card';
import Fight from './Fight'

class ListCards extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      fighter: {},
    };
    this.selectFighter = this.selectFighter.bind(this)
    
  }

  componentDidMount() {
    axios.get('https://hackathon-wild-hackoween.herokuapp.com/monsters')
    .then(res => {
      const datas = res.data.monsters;
      this.setState({ monsters: datas });
    });
  }

  selectFighter(monster){
    this.setState({fighter: monster})
  }

  render() {
    return (
      <div>
        <Fight {...this.state.fighter}/>
        <hr/>
        <div className="row justify-content-center w-100 repolistContainer">
            {this.state.monsters.map(monster => {
              return <Card {...monster} key={monster.id} onClick={() => this.selectFighter(monster)} />;
            })}
        </div>
      </div>
    );
  }
}

export default ListCards;

