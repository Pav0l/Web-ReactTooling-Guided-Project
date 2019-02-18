import React from 'react';
import PT from 'prop-types';
import { Message } from './Container';

// export default class NeedLotsOfProps extends React.Component {
//   render() {
//     return (
//       <div>Really Need Lots of props</div>
//     );
//   }

//   static propTypes = {
//     someString: PT.string.isRequired,
//   }
// }

export default function NeedLotsOfProps() {
  return (
    <div>Really Need Lots of props</div>
  );
}

// Specifies the default values for props:
// You can set these up and then do not need to
// call them when calling for this Component
// in other files.
// So in COntainer.jsx you can delete some of those
// properties and default values will appear
// in React Dev Tools.
NeedLotsOfProps.defaultProps = {
  optionalArray: ['hey'],
  optionalBool: false,
  optionalFunc: Function.prototype,
  optionalNumber: 7,
  optionalObject: {},
  optionalString: '',
  optionalNode: '',
  optionalElement: <div>meh</div>,
  optionalMessage: new Message(),
  optionalEnum: 'News',
  optionalArrayOf: [1, 2, 3],
  optionalObjectOf: { a: 1 },
  optionalUnion: { a: new Message() },
  optionalObjectWithShape: { color: 'green', fontSize: 12 },
  customProp: 'matchme',
};

NeedLotsOfProps.propTypes = {
  // You can declare that a prop is a specific JS type. By default, these
  // are all optional.
  optionalArray: PT.array,
  optionalBool: PT.bool,
  optionalFunc: PT.func,
  optionalNumber: PT.number,
  optionalObject: PT.object,
  optionalString: PT.string,

  // Anything that can be rendered: numbers, strings, elements or an array
  // (or fragment) containing these types.
  optionalNode: PT.node,

  // A React element.
  optionalElement: PT.element,

  // You can also declare that a prop is an instance of a class. This uses
  // JS's instanceof operator.
  optionalMessage: PT.instanceOf(Message),

  // You can ensure that your prop is limited to specific values by treating
  // it as an enum.
  optionalEnum: PT.oneOf(['News', 'Photos']),

  // An object that could be one of many types
  optionalUnion: PT.oneOfType([
    PT.string,
    PT.number,
    PT.instanceOf(Message),
  ]),

  // An array of a certain type
  optionalArrayOf: PT.arrayOf(PT.number),

  // An object with property values of a certain type
  optionalObjectOf: PT.objectOf(PT.number),

  // An object taking on a particular shape
  optionalObjectWithShape: PT.shape({
    color: PT.string,
    fontSize: PT.number,
  }),

  // You can chain any of the above with `isRequired` to make sure a warning
  // is shown if the prop isn't provided.
  requiredFunc: PT.func.isRequired,

  // A value of any data type
  requiredAny: PT.any.isRequired,

  // You can also specify a custom validator. It should return an Error
  // object if the validation fails. Don't `console.warn` or throw, as this
  // won't work inside `oneOfType`.
  customProp: (props, propName, componentName) => {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.',
      );
    }
  },
};
