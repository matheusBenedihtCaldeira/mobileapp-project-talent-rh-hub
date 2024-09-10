import {React, useState} from "react";
import { View, Text } from "react-native";
import { Background, Container, AreaInput, Input } from "./styles";
import { TextInput } from "react-native-paper";

export default function SignIn(){
    
    const [text, setText] = useState('')

    return(
        <Background>
            <Container>
                <AreaInput>
                <TextInput 
                        label="E-mail"
                        value={text}
                        mode={'outlined'}
                        onChangeText={text => setText(text)}
                        outlineColor="#1e40af"
                        activeOutlineColor="#1e40af"
                        style={{
                          
                        }}
                    />
                <TextInput 
                        label="Password"
                        secureTextEntry
                        mode={'outlined'}
                        onChangeText={text => setText(text)}
                        outlineColor="#1e40af"
                        activeOutlineColor="#1e40af"
                        style={{

                        }}
                    />
                </AreaInput>
            </Container>
        </Background>
    )
}