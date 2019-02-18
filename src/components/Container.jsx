import React from 'react';
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
