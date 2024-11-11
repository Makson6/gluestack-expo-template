import '@/global.css';
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Button, ButtonText } from "@/components/ui/button";
import { View } from "react-native";

export default function MainLayout() {
    return (
        <GluestackUIProvider>
        <View>
            <Button>
                <ButtonText>Hello world</ButtonText>
            </Button>
            <Button size="md" variant="solid" action="primary">
  <ButtonText>Hello World!</ButtonText>
</Button>
        </View>
        </GluestackUIProvider>
    )
}