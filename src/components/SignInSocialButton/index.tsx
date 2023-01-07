
import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";
import { Button, ImageContainer, Text} from './styles'
import { RFValue } from "react-native-responsive-fontsize";

interface Props extends RectButtonProps{
    title: string;
    svg: React.FC<SvgProps>
}

export function SignInSocialButton({ title, svg: Svg, ...rest } : Props){

    return(
        <Button {...rest}>
            <ImageContainer>
                <Svg width={RFValue(24)} height={RFValue(24)}/>
            </ImageContainer>
            <Text>
                {title}
            </Text>
        </Button>
    );

}