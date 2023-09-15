import React, { useContext, useState } from "react";
import { Text } from "../../../components/typography/text.component";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Title } from "../components/account.styles";

import { ActivityIndicator } from "react-native-paper";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);
  return (
    <AccountBackground>
      <AccountCover>
        <Title>Meals To Go</Title>
        <AccountContainer>
          <AuthInput
            label="E-mail"
            value={email}
            textContentType={"emailAddress"}
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(u) => setEmail(u)}
          />
          <Spacer size="large">
            <AuthInput
              label="Password"
              value={password}
              textContentType={"password"}
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(p) => setPassword(p)}
            />
          </Spacer>
          {error && (
            <ErrorContainer>
              <Text variant="error">{error}</Text>
            </ErrorContainer>
          )}
          <Spacer size="large">
            {!isLoading ? (
              <AuthButton
                onPress={() => onLogin(email, password)}
                icon="lock-open-outline"
                mode="contained"
              >
                Login
              </AuthButton>
            ) : (
              <ActivityIndicator animating={true} color="#2182BD" />
            )}
          </Spacer>
        </AccountContainer>
        <Spacer size="large">
          <AuthButton onPress={() => navigation.goBack()} mode="contained">
            Back
          </AuthButton>
        </Spacer>
      </AccountCover>
    </AccountBackground>
  );
};
