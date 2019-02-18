import React from 'react';
import PropTypes from 'prop-types';
import NeedLotsOfProps from './NeedLotsOfProps';
import './Container.less';


const element = <div>me is element</div>;

export function Message() { }
const messageInstance = new Message();

export default function Container() {
  return (
    <NeedLotsOfProps
      optionalArray={[]}
      optionalBool={false}
      optionalFunc={Function.prototype}
      optionalNumber={7}
      optionalObject={{}}
      optionalString=''

      optionalNode=''

      optionalElement={element}

      optionalMessage={messageInstance}

      optionalEnum='News'

      optionalUnion={Number(7)}

      optionalArrayOf={[1, 2, 3]}

      optionalObjectOf={{ a: 1, b: 2 }}

      optionalObjectWithShape={{
        color: 'red',
        fontSize: 5,
      }}

      requiredFunc={Function.prototype}

      requiredAny={new Map()}

      customProp='matchme'
    />
  );
}

// Create propTypes for someString and someNumber
// called in App.jsx

// If you do not make these props required,
// its a good idea to set default values
// these will show if you do not set them when
// invoking the component in App.jsx

// Container.defaultProps = {
//   someString: 'hello default',
//   someNumber: 4,
// };

// .isRequired sets those props to be required
Container.propTypes = {
  someString: PropTypes.string.isRequired,
  someNumber: PropTypes.number.isRequired,
};
