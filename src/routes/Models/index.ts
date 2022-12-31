import { NativeStackNavigationProp} from "@react-navigation/native-stack";
import { CardProps } from "@myApp/screens/Home";
import { DeliveryAddress } from "@myApp/screens/Payment";

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
    Success: { data: DeliveryAddress, payment: string};
}

export type PropsStack = NativeStackNavigationProp<propsNavigationStack>