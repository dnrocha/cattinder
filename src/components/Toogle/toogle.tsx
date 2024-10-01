import { Alert, TouchableOpacity } from 'react-native';

import { ToogleSvg } from '../../assets/svg';
import englishLocale from '../../constants/en.json';
import { styles } from './toogle.styles';

const Toogle = () => {
  const {not_available_yet} = englishLocale;

  return (
    <TouchableOpacity
      onPress={() => Alert.alert('Wait!', not_available_yet)}
      testID="toogle-button">
      <ToogleSvg width={100} height={20} style={styles.toogleSvg} />
    </TouchableOpacity>
  );
};

export default Toogle;
