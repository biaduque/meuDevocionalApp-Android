import React from 'react';
import {
    ButtonText,
    ButtonWrapper,
    Container,
    LeftWrapperButton,
    ProfileImage,
    TextTitle,
    Username,
    WrapperHeader,
    WrapperMenu,
    WrapperProfile
} from "./styles";
import {ScrollView} from "react-native";
import TopContent from "../../components/TopContent";
import {Activity, ArrowLeft, ArrowRight, Heart, Logout, Search, Setting, User} from "react-native-iconly";
import {useNavigation} from "@react-navigation/core";

const ProfileScreen = () => {
    const navigation = useNavigation();

    const handleBackScreen = () => {
        navigation.goBack();
    }

    return (
        <Container>
            <TopContent
                title={<WrapperHeader>
                    <ArrowLeft
                        onPress={handleBackScreen}
                        color="#000"
                        set={"curved"}
                        style={{marginRight: 10}}
                    />
                    <TextTitle>Meu perfil</TextTitle>
                </WrapperHeader>}
                showSecondLine={false}
            />

            <ScrollView>
                <WrapperProfile>
                    <ProfileImage
                        source={{
                            uri: "https://avatars.githubusercontent.com/u/40338524?v=4"
                        }}
                    />

                    <Username>
                        Abner Rodrigues
                    </Username>
                </WrapperProfile>

                <WrapperMenu>
                    <ButtonWrapper>
                        <LeftWrapperButton>
                            <User color={"#666"}/>
                            <ButtonText>
                                Meu perfil
                            </ButtonText>
                        </LeftWrapperButton>

                        <ArrowRight color={"#ddd"}/>
                    </ButtonWrapper>

                    <ButtonWrapper>
                        <LeftWrapperButton>
                            <Activity color={"#000"}/>
                            <ButtonText>
                                Meus anúncios
                            </ButtonText>
                        </LeftWrapperButton>

                        <ArrowRight color={"#ddd"}/>
                    </ButtonWrapper>

                    <ButtonWrapper>
                        <LeftWrapperButton>
                            <Search color={"#000"}/>

                            <ButtonText>
                                Minhas pesquisas
                            </ButtonText>
                        </LeftWrapperButton>

                        <ArrowRight color={"#ddd"}/>
                    </ButtonWrapper>

                    <ButtonWrapper>
                        <LeftWrapperButton>
                            <Heart color={"#000"}/>

                            <ButtonText>
                                Meus favoritos
                            </ButtonText>
                        </LeftWrapperButton>

                        <ArrowRight color={"#ddd"}/>
                    </ButtonWrapper>

                    <ButtonWrapper>
                        <LeftWrapperButton>
                            <Setting color={"#000"}/>

                            <ButtonText>
                                Configurações
                            </ButtonText>
                        </LeftWrapperButton>

                        <ArrowRight color={"#ddd"}/>
                    </ButtonWrapper>

                    <ButtonWrapper>
                        <LeftWrapperButton>
                            <Logout color={"#000"}/>

                            <ButtonText>
                                Sair
                            </ButtonText>
                        </LeftWrapperButton>

                        <ArrowRight color={"#ddd"}/>
                    </ButtonWrapper>
                </WrapperMenu>
            </ScrollView>
        </Container>
    );
};

export default ProfileScreen;
