import { css } from '@emotion/react';
import ColorChangeJandi from '../../../../assets/images/colorChange_Jandi.png';
import ColorChangeBorder from '../../../../assets/images/colorChange_Border.png';
import DoublePong from '../../../../assets/images/doublePong.png';
import FreePassTicket from '../../../../assets/images/freepassTicket.png';
import ReactTooltip from 'react-tooltip';

const ItemList = () => {
  return (
    <div css={totalContainer}>
      <div className="item-div">
        <img src={ColorChangeJandi} className="itemImg" data-tip data-for="1" />
        <p>색변경권[잔디]</p>
      </div>
      <ReactTooltip
        id="1"
        effect="solid"
        place="top"
        type="light"
        textColor="#191919"
        border
        borderColor="gray"
      >
        <div
          css={css`
            text-align: center;
            padding: 5px;
          `}
        >
          내 화면의 테두리 색상을 랜덤으로 12가지의 색상으로 바꿔주는
          색상권입니다.
          <br />
          사용하는 순간 테두리 색상이 바뀌며 영구적으로 적용되고, 현재 색상은
          사라집니다.
        </div>
      </ReactTooltip>
      <div className="item-div">
        <img
          src={ColorChangeBorder}
          className="itemImg"
          data-tip
          data-for="2"
        />
        <p>색변경권[테두리]</p>
      </div>
      <ReactTooltip
        id="2"
        effect="solid"
        place="top"
        type="light"
        textColor="#191919"
        border
        borderColor="gray"
      >
        <div
          css={css`
            text-align: center;
            padding: 5px;
          `}
        >
          나의 퐁퐁이 현황점수표 색상을 랜덤으로 12가지의 색상으로 바꿔주는
          색상권입니다.
          <br />
          사용하는 순간 점수표 색상이 바뀌며 영구적으로 적용되고, 현재 색상은
          사라집니다.
        </div>
      </ReactTooltip>
      <div className="item-div">
        <img src={DoublePong} className="itemImg" data-tip data-for="3" />
        <p>더블퐁퐁권</p>
      </div>
      <ReactTooltip
        id="3"
        effect="solid"
        place="top"
        type="light"
        textColor="#191919"
        border
        borderColor="gray"
      >
        <div
          css={css`
            text-align: center;
            padding: 5px;
          `}
        >
          랜덤 발표자로 선정되었을 경우, 발표 프리패스권을 사용해 발표를
          면제받을 수 있습니다.
          <br />
          1회 사용시, 해당 아이템은 사라집니다.
        </div>
      </ReactTooltip>
      <div className="item-div">
        <img src={FreePassTicket} className="itemImg" data-tip data-for="4" />
        <p>발표프리패스권</p>
      </div>
      <ReactTooltip
        id="4"
        effect="solid"
        place="top"
        type="light"
        textColor="#191919"
        border
        borderColor="gray"
      >
        <div
          css={css`
            text-align: center;
            padding: 5px;
          `}
        >
          해당 수업에서 획득한 퐁퐁이를 2배로 받을 수 있습니다. <br />
          수업 참여 중 사용이 가능하며 해당 수업이 끝나면, 해당 아이템과 효과는
          사라집니다.
        </div>
      </ReactTooltip>
    </div>
  );
};

const totalContainer = () => css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: calc(100% - 2rem);

  .item-div {
    width: 25%;
    height: 50%;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    box-shadow: 2px 2px 8px -5px;
    transition: all 0.1s ease-in-out;
    margin: 1rem;
    border: 1px solid lightgray;

    :hover {
      transform: scale(1.05);
      cursor: pointer;
    }
  }

  p {
    font-size: calc(0.6vw);
  }

  .itemImg {
    height: 70%;
    width: auto;
  }
`;

export default ItemList;
