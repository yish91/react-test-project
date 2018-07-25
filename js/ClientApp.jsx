import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;

const myTitle = function myTitle(props) {
  return ce('div', null, ce('h1', null, props.title));
};

const MyFirstComponent = function myFirstComponent() {
  return ce(
    'div',
    null,
    ce(myTitle, { title: 'lala' }),
    ce(myTitle, { title: 'lala2' }),
    ce(myTitle, { title: 'lala3' }),
    ce(myTitle, { title: 'test' })
  );
};

render(ce(MyFirstComponent), document.getElementById('app'));
