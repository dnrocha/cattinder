import { TouchableOpacity } from 'react-native';

import { styles } from './action-button.styles';

type ActionButtonProps = {
  onTap: () => void;
  disabled?: boolean;
  icon: React.ReactNode;
};

const ActionButton = ({ onTap, disabled, icon }: ActionButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onTap}
      style={styles.button}
      disabled={disabled}
      activeOpacity={0.8}
    >
      {icon}
    </TouchableOpacity>
  );
};

export { ActionButton };
