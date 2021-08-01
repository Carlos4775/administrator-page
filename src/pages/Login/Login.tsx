import 'twin.macro';
import * as S from './styles';
import { useState } from 'react';
import { LockClosedIcon, MailIcon } from '@heroicons/react/solid';
import mainLogo from '../../img/logo-helx.svg';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import CheckBox from '../../components/CheckBox';
import Link from '../../components/Link';

async function loginUser(credentials: { username: string; password: string }) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const token = await loginUser({
      username,
      password,
    });
  };

  return (
    <S.Wrapper>
      <S.LoginContent>
        <S.LogoContainer tw=" mr-14 hidden lg:block lg:w-1/4 ">
          <S.Logo tw="h-36" src={mainLogo} alt="Workflow" />
        </S.LogoContainer>

        <S.FormContainer>
          <S.LogoContainer tw="lg:hidden block">
            <S.Logo tw="h-32 w-auto sm:w-auto " src={mainLogo} alt="Workflow" />
          </S.LogoContainer>

          <S.Form action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />

            <S.FormFields>
              <S.FormField>
                <S.FieldIcon>
                  <MailIcon aria-hidden="true" />
                </S.FieldIcon>
                <TextInput
                  tw="text-sm text-black w-full border-0 bg-gray-200 rounded-md placeholder-gray-500"
                  id="email-address"
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  placeholder="Email Address"
                />
              </S.FormField>
              <br></br>
              <S.FormField>
                <S.FieldIcon>
                  <LockClosedIcon aria-hidden="true" />
                </S.FieldIcon>
                <TextInput
                  tw="text-sm text-black w-full border-0 bg-gray-200 rounded-md placeholder-gray-500"
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="Password"
                />
              </S.FormField>
            </S.FormFields>

            <S.RemembermeContainer tw="justify-between">
              <S.RemembermeContainer>
                <CheckBox
                  tw="h-4 w-4 text-indigo-600 border-transparent rounded"
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                />
                <S.RemembermeLabel htmlFor="remember_me">
                  Remember me
                </S.RemembermeLabel>
              </S.RemembermeContainer>
            </S.RemembermeContainer>

            <S.FormButtonContainer>
              <Link
                tw="bg-transparent text-center text-gray-400 w-screen pb-4 sm:pb-0 sm:w-auto font-medium hover:text-gray-600"
                to="#"
              >
                Forgot my password
              </Link>

              <div tw="w-1/5"></div>
              <Button
                tw="bg-blue-400 text-white w-screen sm:w-auto font-medium hover:bg-blue-500 "
                type="submit"
              >
                Sign in
              </Button>
            </S.FormButtonContainer>
          </S.Form>
        </S.FormContainer>
      </S.LoginContent>
    </S.Wrapper>
  );
}
