import './App.css';
import React from "react";




  class AppOne extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              squares: Array(9).fill(null),
              count : 0
          }


            this.total1 = 0
            this.total2 = 0

          this.winnerLine = [
                  [0,1,2],
                  [3,4,5],
                  [6,7,8],
                  [0,3,6],
                  [1,4,7],
                  [2,5,8],
                  [0,4,8],
                  [2,4,6]
          ]

      }




       isWinner = () => {
              let s = (this.state.count % 2 === 0) ? 'X' : 'O'
               for (let i = 0; i < 8; i++){
               let line = this.winnerLine[i];
               if  (this.state.squares[line[0]] === s
                       && this.state.squares[line[1]] === s
                       && this.state.squares[line[2]] === s) {
                   alert( 'PLAYER - ' +s+ ' wins!!!')
                     if (s === 'X') {
                         return this.total1++
                     }
                     if ( s === 'O'){
                         return  this.total2++
                     }
               }
                   if (this.total1 > 2){
                       return (
                       this.total1 = 0,
                       this.total2 = 0
                       )

                   }
                   if (this.total2 > 2){
                       return (
                           this.total1 = 0,
                               this.total2 = 0
                       )
                   }

               }
       }





      clickHandler = event => {
          //data number of square which choosed
             let data = event.target.getAttribute('data')
             let currentSquare = this.state.squares

               if(currentSquare[data] === null){

             currentSquare[data] = (this.state.count % 2 === 0) ? 'X' : 'O'
          this.setState({count: this.state.count + 1})
          this.setState({squares:currentSquare})
               }
               else{
                   alert('INCORRECT')
               }
            this.isWinner()

      }


      render() {
          let newGame = () => {
              this.setState({count:0})
              this.setState({squares: Array(9).fill(null)})
          }






          return (
              <>

                   <div> TOTAL :
                       <br/>
                      X - {this.total1} <br/>
                       O - {this.total2}
                   </div>


              <div className="tik-tak">
                  <div className={'tt_grid'} onClick={this.clickHandler} data={'0'}><p> {this.state.squares[0]}</p> </div>
                  <div className={'tt_grid'} onClick={this.clickHandler} data={'1'}><p> {this.state.squares[1]}</p> </div>
                  <div className={'tt_grid'} onClick={this.clickHandler} data={'2'}><p> {this.state.squares[2]}</p></div>
                  <div className={'tt_grid'} onClick={this.clickHandler} data={'3'}><p> {this.state.squares[3]}</p></div>
                  <div className={'tt_grid'} onClick={this.clickHandler} data={'4'}><p> {this.state.squares[4]}</p></div>
                  <div className={'tt_grid'} onClick={this.clickHandler} data={'5'}><p> {this.state.squares[5]}</p></div>
                  <div className={'tt_grid'} onClick={this.clickHandler} data={'6'}><p> {this.state.squares[6]}</p></div>
                  <div className={'tt_grid'} onClick={this.clickHandler} data={'7'}><p> {this.state.squares[7]}</p></div>
                  <div className={'tt_grid'} onClick={this.clickHandler} data={'8'}><p> {this.state.squares[8]}</p></div>
              </div>
                     <button className={'btn'} onClick={newGame}> New game </button>
              </>
          )
      }
  }

export default AppOne





