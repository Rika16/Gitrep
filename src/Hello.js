import React, { Component } from 'react';

/*class Check extends Component {
    render() {
        console.log(this.props.user.name);
        return <div>
            Check: 
            pomodori - 10
            kapusta - 20
        </div>
    }
}
*/


class check  extends Component {
  render() {
    function Product () {
      function add (){
        check.add({Product: 'lapte', price: 6});
        check.add({Product: 'piine', price: 5});
        check.add({Product: 'vin', price: 58});
        check.add({Product: 'salam', price: 108});
      }
      function remote (){
        check.remote({Product: 'lapte', price: 6});
      }
    };
    function print() {
            check.print(); 
            console.log(check.Product)
              [
                (sumTotal(Product))
              ];
    }
  }
}
let check = new check()


















/*class Hello extends Component {
    
    render() {
    
        const a = 1;
        const user = {
            name: 'dima',
            age: 27
        };

        console.log(b.name);

        return (
            <div>Hello,<Label>World</Label><Check user={user} /></div>
        )
    }
}*/

export default check;