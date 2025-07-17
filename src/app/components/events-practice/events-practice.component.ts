import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-practice',
  templateUrl: './events-practice.component.html',
  styleUrls: ['./events-practice.component.scss'],
})
export class EventsPracticeComponent implements OnInit {
  twist = true;
  bgColor: string = '#ffffff';
  newColor: string = '';

  items = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'orange' },
    { id: 3, name: 'pineapple' },
  ];

  ngOnInit(): void {
    // const btn2 = document.querySelector('#v2');
    const btn3 = document.querySelector('#v3');

    //! addEventListener
    btn3?.addEventListener('click', () => {
      alert('3rd Version Clicked');
    });

    const tasBtn = document.querySelector('#tas');
    tasBtn?.addEventListener('click', this.twistFunc, { once: true }); //twist will be called only once
    tasBtn?.addEventListener('click', this.shoutFunc);

    const changeColorBtn = document.querySelector('#changeColor');
    changeColorBtn?.addEventListener('click', () => this.changeColorFunc());

    const allBtns = document.querySelectorAll('button');
    for (let button of Array.from(allBtns)) {
      button.addEventListener('click', (event) => {
        // button.style.backgroundColor = this.randomColor();
        // button.style.color = this.randomColor();
        console.log(event);
      });
    }

    const allH1s = document.querySelectorAll('h1');
    for (let h1 of Array.from(allH1s)) {
      h1.addEventListener('click', () => {
        console.log(this);
        h1.style.backgroundColor = this.randomColor();
        h1.style.color = this.randomColor();
      });
    }

    // const input = document.querySelector('input');
    // input?.addEventListener('keydown', (event) => {
    //   console.log('keydown');
    //   console.log(event);
    //   console.log('Key', event.key);
    //   console.log('Code:', event.code);
    // });
    // input?.addEventListener('keyup', (event: Event) => {
    //   // console.log('keyup');
    //   // console.log(event);
    // });

    // //window
    // window.addEventListener('keydown', (event) => {
    //   switch (event.code) {
    //     case 'ArrowUp':
    //       console.log(event);
    //       console.log('Up');
    //       break;
    //     case 'ArrowDown':
    //       console.log('Down');
    //       break;
    //     case 'ArrowLeft':
    //       console.log('Left');
    //       break;
    //     case 'ArrowRight':
    //       console.log('Right');
    //       break;
    //     default:
    //       console.log('Ignored');
    //   }
    // });

    // const form = document.querySelector('#shelterForm');
    // const inputForm = document.querySelector('#catName');

    // form?.addEventListener('submit', (event) => {
    //   event.preventDefault();
    //   console.log('Submitted the form');

    //   if (inputForm) {
    //     console.log((inputForm as HTMLInputElement).value);
    //   }
    // });

    const form = document.querySelector('form');
    const prodNameInput = document.querySelector('#product');
    const productQtyInput = document.querySelector('#qty');
    const list = document.querySelector('#list');

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const productName = (prodNameInput as HTMLInputElement).value;
        const productQty = parseInt(
          (productQtyInput as HTMLInputElement)?.value
        );

        let newLi = document.createElement('li');
        newLi.innerText = `${productQty} ${productName} `;
        list?.append(newLi);
        //clear the input
      });
    }
    const img1 = document.querySelector('img');
    img1?.remove(); //remove me no need to navigate to parent

    //* Input & Changes Event
    const p = document.querySelector('p');
    const fName = document.querySelector('#firstName');

    //change: triggerd when you leave input
    fName?.addEventListener('change', () => {
      console.log('Changed!');
    });

    //input: triggerd while giving input/s
    fName?.addEventListener('input', () => {
      console.log('Input!');
      if (p && fName) {
        p.innerText = (fName as HTMLInputElement).value;
      }
    });

    //* Exercisie
    const h1 = document.querySelector('h1');
    const userName = document.querySelector('#username');

    userName?.addEventListener('input', () => {
      if (h1 && userName) {
        h1.innerText = (userName as HTMLInputElement).value;
      }
    });
  }

  clicked() {
    alert('function "clicked()" clicked');
  }
  dblClicked() {
    alert('Double Clicked');
  }

  tas() {
    if (this.twist === true) {
      console.log('twist');
    } else {
      console.log('shout');
    }
    this.twist = !this.twist;
  }

  twistFunc() {
    console.log('TWIST!');
  }
  shoutFunc() {
    console.log('SHOUT!');
  }

  changeColorFunc() {
    // const randomColor =
    //   '#' +
    //   Math.floor(Math.random() * 16777215)
    //     .toString(16)
    //     .padStart(6, '0');
    // console.log('Color changed to:', randomColor);
    // this.bgColor = randomColor;

    let color = this.randomColor();
    this.bgColor = color;
    console.log(color);
    const colorName = document.querySelector('p');
    if (colorName) {
      colorName.innerText = `${color}`;
    }
  }

  randomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r},${g},${b})`;
    // console.log('Color changed to:', newColor);
    return newColor;
  }

  //! Event bubbling: stopPropagation() , place on a child element to stop the event bubbling to the parent
  alert1() {
    alert('Button 1');
  }
  alert2(event: MouseEvent) {
    event?.stopPropagation();
    // console.log(event);
    alert('Button 2');
  }


  //! Event Delegation: the click/event listeners is in the parent not in the list 
  onListClick(event: Event) {
    const target = event.target as HTMLElement;
    const listItem = target.closest('li');
    if (listItem) {
      const id = listItem.getAttribute('data-id');
      console.log(`Clicked on item with ID: ${id}`);
    }
  }
}
