import React, { Component } from 'react';

class Label extends Component {
  render() {
    return (
        <div>Hello,<label>work</label>!</div>
    )
  }
}

class Hello1 extends Component {
    render() {
        return (
            <ul id="checjlist">
               {/* <li> 
                    product1 <input type="checkbox"></input> <a href= "">x</a>
                </li>
                <li>
                    product2 <input type="checkbox"></input> <a href= "">x</a>
                </li>
                <li>
                    product3 <input type="checkbox"></input> <a href= "">x</a>
                </li>
                <li>
                    product4 <input type="checkbox"></input> <a href= "">x</a>
               </li> */}
            </ul>
            <input id='add'></input>

            let checklist = document.quereSelector('#checklist');
            let add = document.querySelector('#add');
           
                add.addEventListener('blur', function() {
                let li = document.createElement('li');
                li.innerHTML = this.value;
                thiz.value = '';
                checklist.appendChild(li);
            
                let checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                li.appendChild(checkbox);
            
                let remove = document.createElement('a');
                remove.innerHTML = 'x';
                removw.href = '';
                li.appendChild(remove);
                remove.addElementListiner('click', function(event) {
                li.parentElement.removeChild(li);

                event.preventDefault();
                });
            
            });
        
    }
}

export default Hello1;