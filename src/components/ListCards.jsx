import React from 'react';
import axios from 'axios';
import Card from './Card';

    class ListCards extends React.Component {
      constructor() {
        super();
        this.state = {
          monsters: []
        };
      }
    
      componentDidMount() {
        axios.get('https://hackathon-wild-hackoween.herokuapp.com/monsters')
        .then(res => {
          console.log(res);
          const datas = res.monsters;
          
    
          this.setState({ monsters: datas });
        });
      }
    
      render() {
        return (
          <div>
              {this.state.monsters.map(monster => {
                return <Card {...monster} key={monster.id} />;
              })}
            </div>
          
        );
      }
    }
    
    export default ListCards;
    
    