import { NativeStackNavigationProp} from "@react-navigation/native-stack";
import { CardProps } from "@myApp/screens/Home";

export type propsNavigationStack = {
    SideMenu: undefined;
    Home: undefined;
    Checkout: {
        data: CardProps[],
        totalCartPrice: number,

    };
    Payment: {
        data: CardProps[],
        totalCartPrice: string,
    };
    Success: undefined;
}

export type PropsStack = NativeStackNavigationProp<propsNavigationStack>