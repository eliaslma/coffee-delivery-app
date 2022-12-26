import { NativeStackNavigationProp} from "@react-navigation/native-stack";
import { CardProps } from "@myApp/screens/Home";

export type propsNavigationStack = {
    Root: undefined;
    Home: undefined;
    Checkout: {
        data: CardProps[],
        totalCartPrice: number,

    };
}

export type PropsStack = NativeStackNavigationProp<propsNavigationStack>