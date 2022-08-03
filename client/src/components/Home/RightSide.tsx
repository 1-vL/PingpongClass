/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

interface RightSideProps {
  setTap: Function;
}

function RightSide(props: RightSideProps) {
  const { setTap } = props;

  const onClickTeacher = () => {
    setTap('teacherLogin');
  };
  return (
    <div css={totalContainer}>
      <h2>
        함께 만들어가는, <br />
        <span className="programName">&nbsp;핑퐁클래스.&nbsp;</span>
      </h2>
      <p>
        핑퐁클래스는 20년간의 노하우가 담긴
        <br />
        선생님들과 학생분들의 각종 요청들을 받아서
        <br />
        모두가 꿈꾸는 온라인 교육 세상을
        <br />
        만들기 위해 제작했어요.
      </p>
      <div className="buttons">
        <button className="teacher" onClick={onClickTeacher}>
          선생님이신가요?
        </button>
        <button className="student">학생이신가요?</button>
      </div>
    </div>
  );
}

const totalContainer = css`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: right;
  padding-right: 5rem;

  h2 {
    color: #332757;
    text-align: right;
    font-size: calc(1.5em + 2vw);
    margin: 2rem;
    span {
      color: #ffffff;
      background-color: #df5b73;
    }
  }

  p {
    color: #332757;
    text-align: right;
    font-size: calc(0.5em + 1vw);
    font-weight: 700;
  }

  .buttons {
    display: inline-block;
    flex-direction: row;
    justify-content: center;
    text-align: right;
    margin: 2rem 0;

    button {
      width: 13vw;
      height: 6vh;
      border-radius: 30px;
      border: none;
      font-weight: 700;
      font-size: calc(0.2em + 1vw);
      cursor: pointer;
      color: #ffffff;
      font-size: 1rem;
    }

    .teacher {
      background-color: #7c99c6;
    }

    .student {
      color: #ffffff;
      background-color: #dd7e8f;
    }

    .teacher {
      color: #ffffff;
      background-color: #7c99c6;
    }
    button:first-child {
      margin-right: 1rem;
    }
  }
`;

RightSide.propTypes = {
  setTap: PropTypes.func.isRequired,
};

export default RightSide;