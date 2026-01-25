import { KeyboardAvoidingView, ModalProps, Platform, Modal as RNModal, View } from "react-native";

type PROPS = ModalProps & {
    isOpen: boolean;
    withInput: boolean;
}

export const Modal = ({ isOpen, withInput, children, ...rest }: PROPS) => {
    const content = withInput ? (
        <KeyboardAvoidingView
            className="items-center justify-center flex-1 px-3"
            behavior="padding"
            keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
            enabled={true}
        >
            {children}
        </KeyboardAvoidingView>
    ) : (
        <View className="items-center justify-center flex-1 px-3 m-2">
            {children}
        </View>
    )

    return (
        <RNModal
            visible={isOpen}
            transparent={true}
            animationType="slide"
            statusBarTranslucent={true}
            hardwareAccelerated={true}
            navigationBarTranslucent={true}
            {...rest}
        >
            {content}
        </RNModal>
    )
}
