// import baseStyle from '../styles/baseStyle';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
// import axios from 'axios';
//TODO: 탭을 나누고 각각 서로 필요한 부분을 호출해야됨

const MyPage = () => {
  const [getUser, setGetUser] = useState({});
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const url = `../../mock/userMock.json`;

  useEffect(() => {
    console.log('useEffect');
    async function fetchUser() {
      const res = await fetch(url);
      const getUsers = await res.json();
      setGetUser(() => ({ ...getUsers[0] }));
    }
    fetchUser();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputs = {
      password: password,
      name: name,
      phone: phone,
    };
    console.log(inputs);

    console.log('회원정보를 업데이트함');
    //await axios.post(serverURL, JSON.stringify(newObj))
  };
  const handleMembershipWithdrawalSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log('회원탈퇴 클릭시 api에 요청해서 회원 삭제');
  };
  return (
    <div>
      <div>정보수정 예약조회</div>
      <Form onSubmit={handleSubmit}>
        <label>이메일</label>
        <input name="email" type="email" placeholder={getUser.email} disabled />
        <div></div>
        <label>신규비밀번호</label>
        <input
          name="password"
          type="password"
          value={password || ''}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          {password.length + 1 <= 4 && password.length > 0
            ? '비밀번호를 4자리 이상 입력해야합니다.'
            : ''}
        </div>
        <label>신규비밀번호 확인</label>
        <input
          name="confirmPassword"
          type="password"
          value={confirmPassword || ''}
          onChange={(e) => setConfirmPassword(e.target.value)}
          disabled={password.length + 1 <= 4}
        ></input>
        <div>
          {password === confirmPassword ? '' : '비밀번호가 일치해야합니다'}
        </div>
        <label>이름</label>
        <input
          name="name"
          type="text"
          placeholder={getUser.name}
          value={name || ''}
          onChange={(e) => setName(e.target.value)}
        />
        <label>전화번호</label>
        <input
          name="phone"
          type="text"
          placeholder={getUser.phone}
          value={phone || ''}
          onChange={(e) => setPhone(e.target.value)}
        />

        <WithdrawalButton onClick={handleMembershipWithdrawalSubmit}>
          회원탈퇴
        </WithdrawalButton>
        <SubmitButton type="submit" disabled={password !== confirmPassword}>
          확인
        </SubmitButton>
      </Form>
    </div>
  );
};

export default MyPage;

const Form = styled.form`
  margin: 90px auto;
  width: 540px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  & label {
    display: inline-block;
    width: 140px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-top: 30px;
  }

  & input {
    width: 400px;
    height: 30px;
    border: 1px solid #000000;
    border-radius: 7px;
    margin-top: 30px;

    &: disabled {
      background: rgba(217, 217, 217, 0.7);
    }
  }
  & div {
    visibility: visible;
    width: 100%;
    color: red;
    padding-left: 140px;
    vertical-align: center;
  }
  & button {
    margin-top: 160px;
  }
`;

const WithdrawalButton = styled.button`
  width: 142px;
  height: 36px;
  background: transparent;
  border: 3px solid #ff0000;
  border-radius: 50px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #524fa1;
`;

const SubmitButton = styled.button`
  width: 142px;
  height: 36px;
  background: #524fa1;
  border: 1px solid #524fa1;
  border-radius: 50px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;

  &:disabled {
    background: #777;
    border: 1px solid #000000;
  }
`;
