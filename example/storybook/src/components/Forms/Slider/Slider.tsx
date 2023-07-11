import React from 'react';
import {
  Text,
  Slider,
  VStack,
  HStack,
  Box,
  Icon,
  Heading,
  Tooltip,
  Button,
  Center,
} from '../../../ui-components';

import { Volume, Volume2Icon, LightbulbIcon } from 'lucide-react-native';

export const SliderStory = ({
  value: valueProp = 60,
  ...props
}: {
  value: number;
  props: any;
}) => {
  const [sliderValue, setSliderValue] = React.useState(0);
  const handleChange = (value: any) => {
    setSliderValue(value);
  };

  React.useEffect(() => {
    handleChange(valueProp);
  }, [valueProp]);

  return (
    <Center>
      <Slider
        w="50%"
        h="50%"
        mt="$4"
        value={sliderValue}
        onChange={(value: any) => {
          handleChange(value);
        }}
        {...props}
      >
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
      <Text mt="$4">Slider Value {sliderValue}</Text>
    </Center>
  );
};

export {
  Slider,
  VStack,
  Volume,
  HStack,
  Volume2Icon,
  Text,
  Box,
  LightbulbIcon,
  Icon,
  Heading,
  Tooltip,
  Button,
};
