import { AuthService } from '@api/AuthService';

export const authentication = async (jwtToken: string) => {
  const userInfo = await AuthService.authenticationUsingPost({
    headers: { Authorization: `Bearer ${jwtToken}` },
  });
  return userInfo;
};

export const signInWithGoogle = async (googleOAuthToken: string) => {
  const jwtToken = await AuthService.signInWithGoogleUsingPost({
    body: { token: googleOAuthToken },
  });
  return jwtToken;
};
