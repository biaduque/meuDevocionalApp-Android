import React, {useState} from 'react';
import {Layout, Option, WrapperColorButtons} from './styles';

const CustomRadioButton = ({data, onSelect}) => {
  const [selected, setSelected] = useState('#8BA293');

  const onSelectHandler = value => {
    onSelect(value.label);
    setSelected(value.value);
  };

  return (
    <Layout>
      <WrapperColorButtons>
        {data.map((item, index) => {
          return (
            <Option
              key={index}
              background={item.value}
              active={selected === item.value}
              onPress={() => onSelectHandler(item)}
            />
          );
        })}
      </WrapperColorButtons>
    </Layout>
  );
};

export default CustomRadioButton;
