import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dom-practice',
  templateUrl: './dom-practice.component.html',
  styleUrls: ['./dom-practice.component.scss'],
})
export class DomPracticeComponent implements OnInit {
  colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  ngOnInit(): void {
    //! Query Selector and Query Selector ALll
    document.querySelector('p'); //first paragraph
    document.querySelector('a[title="Chicken"]'); // anchor with title=Chicken
    document.querySelectorAll('p'); //all paragraph
    document.querySelectorAll('p a'); //all anchor tags inside paragraph
    const links = document.querySelectorAll('a'); //all anchor tags

    //* Exercise
    // const h1 = document.querySelector('h1 span').textContent = 'Disgusting'
    // console.log(h1);

    //! Attributes

    const firstInput = document.querySelector('p a');
    firstInput?.setAttribute('href', '/wiki/bear'); //set the value of an attribute
    firstInput?.getAttribute('href'); //get the value of an attribute

    //* Exercise
    let image = document.querySelector('img');
    image?.setAttribute(
      'src',
      'https://images.unsplash.com/photo-1581061090142-c2cd0ec9f021?w=200'
    );

    image?.setAttribute('alt', 'chicken');

    //* exercise syntax
    //  const element = document.querySelector('#container')
    // element.style.textAlign = 'center'

    // const image = document.querySelector('img')
    // image.style.width = '150px'
    // image.style.borderRadius ='50%'

    // for (let i = 0; i < this.colors.length; i++) {
    //   console.log(i);
    //   console.log(this.colors[i]);
    // }

    const spans = document.querySelectorAll('h1 span');

    for (let i = 0; i < spans.length; i++) {
      console.log(i);
      let span = spans[i] as HTMLElement;
      span.style.color = this.colors[i];
    }

    //! Class List
    const h1 = document.querySelector('h1');
    h1?.classList.add('purple'); //add
    // h1?.classList.remove('purple'); //remove
    h1?.classList.contains('purple'); //will return true if class is in h1
    h1?.classList.toggle('purple'); //will toggle class add/remove

    const lists = document.querySelectorAll('ul li');
    for (let list of Array.from(lists)) {
      list.classList.toggle('highlight');
    }

    //! Parent Element and Siblings (navigate hierarchy tree structure)
    const par = document.querySelector('p');
    const parent = par?.parentElement; //parent of paragraph
    const childCount = par?.childElementCount; //paragraph child count
    const children = par?.children; //paragraph child count
    par?.nextElementSibling; //next element sibling
    par?.previousElementSibling; //previous element sibling

    //! Append and Append Child
    //create element
    const newImage = document.createElement('img');
    newImage.src =
      'https://images.wagwalkingweb.com/media/daily_wag/blog_articles/hero/1678934108.5188236/everything-you-need-to-know-about-siamese-cats.png';
    //append(add) on the page

    document.body.appendChild(newImage);
    newImage.classList.add('square');

    //* order
    const h3 = document.createElement('h3'); //create
    h3.innerText = 'I am H3'; //changes
    document.body.appendChild(h3); //append

    const p = document.querySelector('p');
    p?.append('new texxxtt'); //newer syntax than appendCild

    const b = document.querySelector('b');
    b?.prepend('Hi!! ');

    const h2 = document.createElement('h2');

    h2.append('Are adorable testtt');
    const hOne = document.querySelector('h1');
    // hOne?.insertAdjacentElement('afterend', h2);
    hOne?.after(h2); //like insertAdjacentElement
    hOne?.before(h2); //like insertAdjacentElement

    for (let i = 0; i < 100; i++) {
      console.log(i);
      const div = document.createElement('div');
      const btn = document.createElement('button');
      btn.innerText = 'Send';
      div.appendChild(btn);
      document.body.appendChild(div);
    }

    //! removeChild & remove
    const bOne = document.querySelector('b');
    bOne?.parentElement?.removeChild(bOne); //remove the child so need to navigate to the parent first

    const img1 = document.querySelector('img');
    img1?.remove(); //remove me no need to navigate to parent
  }
}
