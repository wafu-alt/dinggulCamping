import { useState } from 'react';
import styled from 'styled-components';
import baseStyle from '../styles/baseStyle';
import { RoomModal } from './RoomModal';
import { BsCheckLg } from 'react-icons/bs';

const RoomsButton = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState('');

  const handleRoomDetail = (roomId) => {
    setModalShow(true);

    // TODO 객실 상세정보의 경우 객실ID를 모달창에 상태로 전달한 후 모달창에서 api를 요청
    setSelectedRoom(roomId);
  };

  // FIXME
  // 각 객실 별 정보 Db에 올려야할 듯
  const caravans = [
    { top: 10, left: 32, name: 'C-101호', id: '62d5365e88ab7290bffbdb42' },
    { top: 15.3, left: 40.6, name: 'C-102호', id: '62d58c76d04deeeeda401ff2' },
    { top: 21.3, left: 50, name: 'C-103호', id: '3' },
    { top: 27.7, left: 29, name: 'C-104호', id: '4' },
    { top: 84, left: 28, name: 'C-105호', id: '5' },
    { top: 80, left: 39.4, name: 'C-106호', id: '6' },
  ];

  const tents = [
    { top: 33.5, right: 42.5, name: 'T-201호' },
    { top: 33.3, right: 36.7, name: 'T-202호' },
    { top: 32.8, right: 30.6, name: 'T-203호' },
    { top: 32.5, right: 25, name: 'T-204호' },
    { top: 45, right: 39.5, name: 'T-205호' },
    { top: 45, right: 34, name: 'T-206호' },
    { top: 44.9, right: 27.6, name: 'T-207호' },
  ];

  const glamps = [
    { top: 55, right: 42, name: 'G-301호' },
    { top: 55.5, right: 35, name: 'G-302호' },
    { top: 56, right: 29, name: 'G-303호' },
    { top: 66.5, right: 44, name: 'G-304호' },
    { top: 66.8, right: 37.8, name: 'G-305호' },
    { top: 68.3, right: 31.3, name: 'G-306호' },
    { top: 69.4, right: 25.1, name: 'G-307호' },
  ];
  return (
    <>
      {/* 카라반 아이콘 */}
      {caravans.map((caravan) => {
        return (
          <Caravan
            key={caravan.name}
            top={caravan.top}
            left={caravan.left}
            onClick={() => handleRoomDetail(caravan.id)}
          >
            {selectedRoom === caravan.id && <CheckRoom />}
          </Caravan>
        );
      })}
      {/* 텐트 아이콘 */}
      {tents.map((tent) => {
        return (
          <Tent
            key={tent.name}
            top={tent.top}
            right={tent.right}
            onClick={() => handleRoomDetail(tent.name)}
          >
            {selectedRoom === tent.name && <CheckRoom />}
          </Tent>
        );
      })}
      {/* 글램핑 아이콘 */}
      {glamps.map((glamp) => {
        return (
          <Glamp
            key={glamp.name}
            top={glamp.top}
            right={glamp.right}
            onClick={() => handleRoomDetail(glamp.name)}
          >
            {selectedRoom === glamp.name && <CheckRoom />}
          </Glamp>
        );
      })}
      <RoomModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        roomID={selectedRoom}
      />
    </>
  );
};

export default RoomsButton;

const Caravan = styled.div`
  position: absolute;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  width: 60px;
  height: 40px;

  :hover {
    cursor: pointer;
  }
`;

const Tent = styled.div`
  position: absolute;
  top: ${(props) => props.top}%;
  right: ${(props) => props.right}%;
  width: 40px;
  height: 35px;

  :hover {
    cursor: pointer;
  }
`;

const Glamp = styled.div`
  position: absolute;
  top: ${(props) => props.top}%;
  right: ${(props) => props.right}%;
  width: 45px;
  height: 40px;

  :hover {
    cursor: pointer;
  }
`;

const CheckRoom = styled(BsCheckLg)`
  color: ${baseStyle.mainColor};
  transform: scale(3) translate(5px);
`;
