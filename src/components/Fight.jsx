import React from 'react'
import { sleep, random } from "./Utilities";
import Axios from 'axios'
import CardFighter from './CardFighter'
import Fighter from './Fighter'
import './Fight.css'
import Reset from './Reset'

class Fight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fighter1: {},
            fighter2: {},
            fighters: [],
            displayLoser: '',
            feed: []
        };
        this.selectFighter1 = this.selectFighter1.bind(this)
        this.selectFighter2 = this.selectFighter2.bind(this)
        this.fight = this.fight.bind(this)
    }
    componentDidMount() {
        Axios.get('https://hackathon-wild-hackoween.herokuapp.com/monsters')
        .then(res => {
        const datas = res.data.monsters;
        this.setState({ names: datas });
    });
    }
    selectFighter1(){
        this.setState({fighter1: this.props})
    }
    selectFighter2(){
        this.setState({fighter2: this.props})
    }
    fight(){
        this.state.fighters.push( this.state.fighter1 , this.state.fighter2)
        this.state.fighters = this.state.fighters.map(({ name, defense , attack }) => {
            return new Fighter(name, defense, attack)
        })

        const newFeed = [...this.state.feed];
        while (true) {
            const striker = random(this.state.fighters.length)
            const receiver = random(this.state.fighters.length)
            const att = this.state.fighters[striker]
            const def = this.state.fighters[receiver]
            const actions = random(3)
            
            let damage;
            switch (true) {
                case actions === 0:
                    damage = att.giveAcidSpray(def.name).attack
                    const tookDamage0 = def.takeDamage(damage).message
                    newFeed.push(att.giveAcidSpray(def.name).message, tookDamage0)
                    this.setState({feed: newFeed})
                    if (def.defense <= 0) {
                        this.setState({displayLoser:`${def.name.toUpperCase()} LOSE !`});
                        return false
                    }
                    break;
                case actions === 1:
                    damage = att.giveASlash(def.name).attack
                    const tookDamage1 = def.takeDamage(damage).message
                    newFeed.push(att.giveASlash(def.name).message, tookDamage1)
                    this.setState({feed: newFeed})
                    if (def.defense <= 0) {
                        this.setState({displayLoser:`${def.name.toUpperCase()} LOSE !`});
                        return false
                    }
                    break;
                case actions === 2:
                    damage = att.Bite(def.name).attack
                    const tookDamage2 = def.takeDamage(damage).message
                    newFeed.push(att.Bite(def.name).message, tookDamage2)
                    this.setState({feed: newFeed})
                    if (def.defense <= 0) {
                        this.setState({displayLoser:`${def.name.toUpperCase()} LOSE !`});
                        return false
                    }
                    break;
                case actions === 3:
                    damage = att.RipOfHisFlesh(def.name).attack
                    const tookDamage3 = def.takeDamage(damage).message
                    newFeed.push(att.RipOfHisFlesh(def.name).message, tookDamage3)
                    this.setState({feed: newFeed})
                    if (def.defense <= 0) {
                        this.setState({displayLoser:`${def.name.toUpperCase()} LOSE !`});
                        return false
                    }
                    break;
                default:
                    break;
            }
        }
    }
    render(){  
        console.log(this.state.feed);
        return(
            <div className="row justify-content-around w-100">
                <div className="col-3 d-flex flex-column justify-content-center">
                    <CardFighter {...this.state.fighter1} />
                    <button type="button" className="btn btn-warning btn-lg" onClick={this.selectFighter1}>Send your monster</button>
                </div>
                <div className="col-6">
                    <button type="button" className="btn btn-danger btn-lg btn-block" onClick={this.fight}>FIGHT!!!</button>
                    <h1 className="text-center m-2">{this.state.displayLoser}</h1>
                    <div className="scroller">
                        {
                            this.state.feed.map(el => {
                                return <div className="alert alert-danger">{el}</div>
                            })
                        }
                    </div>
                    <Reset/>
                </div>
                <div className="col-3 d-flex flex-column justify-content-center">
                    <CardFighter {...this.state.fighter2} />
                    <button type="button" className="btn btn-warning btn-lg" onClick={this.selectFighter2}>Send your monster</button>
                </div>
            </div>
        )
    }
}
export default Fight

