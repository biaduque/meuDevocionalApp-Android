import React, {useEffect, useState} from 'react';
import {Layout, Option, WrapperColorButtons} from './styles';
import Utils from '../../common/utils';
import {useSelector} from 'react-redux';

const CustomRadioButton = ({data, selectedColor, onSelect}) => {
  const utils = new Utils();
  const $app = useSelector(state => state.app);
  const [selected, setSelected] = useState('#8BA293');

  useEffect(() => {
    const colors = utils.transformDataColor(selectedColor, $app.theme);
    setSelected(colors.background);

    return () => {
      setSelected('#8BA293');
    };
  }, [selectedColor]);

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
