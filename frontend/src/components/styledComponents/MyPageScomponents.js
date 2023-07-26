import { styled } from "styled-components";

import pfImage from "../../assets/sidebar/🦆 icon _person outline_.png";
import pcImage from "../../assets/sidebar/🦆 icon _people outline_.png";
import fbImage from "../../assets/sidebar/🦆 icon _book open outline_.png";
import essayImage from "../../assets/sidebar/🦆 icon _file text outline_.png";
import defaultImage from "../../assets/defaultimage.png";

// 사이드바

export const sidebarWrap = styled.div`
    background-image: url(${process.env.PUBLIC_URL}/sidebar-background.png);
    width: 280px;
    height: 855px;
    flex: 1;
`;

export const sideMenuWrap = styled.div`
    padding: 30px 0 0 20px;
`;

export const sideMenu = styled.div`
    height: 27px;
    display: flex;
    // align-items: left;
    justify-content: left;
    font-size: 15px;
    padding: 15px 5px;
    display: flex;
    align-items: center;
    border-radius: 30px 0 0 30px;
    font-family: "Nanum Gothic";
    cursor: pointer;
    &:hover {
        background-color: rgba(255, 255, 255, 0.3);
    }
`;

export const sideMenuNow = styled.div`
    height: 27px;
    display: flex;
    // align-items: left;
    justify-content: left;
    font-size: 15px;
    padding: 15px 5px;
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 30px 0 0 30px;
    font-family: "Nanum Gothic";
    cursor: pointer;
`;

export const icons = styled.div`
    width: 20px;
    height: 20px;
    margin: 0 10px 0 10px;
`;

export const pf_icon = styled.div`
    width: 20px;
    height: 20px;
    margin: 0 10px 0 10px;
    background-image: url(${pfImage});
    background-size: cover;
`;

export const pc_icon = styled.div`
    width: 20px;
    height: 20px;
    margin: 0 10px 0 10px;
    background-image: url(${pcImage});
    background-size: cover;
`;

export const fb_icon = styled.div`
    width: 20px;
    height: 20px;
    margin: 0 10px 0 10px;
    background-image: url(${fbImage});
    background-size: cover;
`;

export const es_icon = styled.div`
    width: 20px;
    height: 20px;
    margin: 0 10px 0 10px;
    background-image: url(${essayImage});
    background-size: cover;
`;

// 마이페이지 내부

export const page = styled.div`
    display: flex;
    justify-content: center;
    font-family: "HakgyoansimWoojuR";
`;

export const wrap = styled.div`
    flex: 4;
    margin: 10px 50px;
`;

// 마이페이지 - 회원 정보 조회

export const profilePage = styled.div`
    display: flex;
    justify-content: center;
    font-family: "HakgyoansimWoojuR";
`;

export const profileWrap = styled.div`
    flex: 4;
    margin: 10px 50px;
`;

export const profileImage = styled.div`
    width: 160px;
    height: 160px;
    background-size: cover;
    background-image: url(${defaultImage});
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.4));
`;

export const profileInfo = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: 50px;
`;

export const profileKey = styled.div`
    margin: 20px 20px 20px 50px;
    flex: 1;
`;

export const profileDetail = styled.div`
    margin: 20px;
    flex: 3;
`;

export const profileContent = styled.div`
    font-size: 20px;
    padding: 10px;
`;

export const profileUpdate = styled.div`
    margin: 20px;
    flex: 3;
`;
export const profileBox = styled.div``;

export const gradeGroup = styled.div`
    display: flex;
    justify-content: left;
`;

export const grade = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 60px;
    line-height: 70px;

    color: #000000;

    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.71);
`;

export const gradeStar = styled.div``;

// 마이페이지 - 피드백 아카이브

export const modalContainer = styled.div`
    /* 모달창 크기 */
    width: 300px;
    height: 200px;

    /* 최상단 위치 */
    z-index: 999;

    /* 중앙 배치 */
    /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
    /* translate는 본인의 크기 기준으로 작동한다. */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    /* 모달창 디자인 */
    background-color: rgb(244, 242, 250);
    // border: 5px solid rgb(83, 78, 156);
    border-radius: 8px;
`;

export const modalButton = styled.button`
    position: absolute;
    right: 10px;
    top: 10px;
`;

// 마이페이지 - 비밀번호 변경
export const formComponent = styled.div`
    // display: flex;
    justify-content: center;
    // align-items: center;
    margin-top: 30px;
`;

export const changePwForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const changePwFormEach = styled.div`
    margin-bottom: 15px;
`;

export const changeBtn = styled.button`
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 0;

    position: relative;
    width: 80px;
    height: 35px;

    background: #a1b6ff;
    box-shadow: 0px 0px 15px #bdbdbd;
    border-radius: 19px;
    cursor: pointer;
    &:hover {
        background-color: #e9e4ff;
    }
`;

export const changeInput = styled.input`
    margin: 5px 0 5px 0;
    width: 400px;
    height: 40px;
    background: #e6e6e6;
    border: 0;
    border-radius: 10px;
`;

export const errorMessageWrap = styled.div`
    margin-bottom: 20px;
`;
