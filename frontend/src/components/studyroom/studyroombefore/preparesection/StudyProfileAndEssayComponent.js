import { useState } from "react";

import * as S from "../../StudyRoomStyledComponents";
import StudyProfileDetail from "./studypreparedetail/StudyProfileDetailComponent";
import StudyEssayDetail from "./studypreparedetail/StudyEssayDetailComponent";


const StudyProfileAndEssay = ({ peopleList }) => {
    const [tap, setTap] = useState(null);
    const [checkProfile, setCheckProfile] = useState(null);
    const [checkEssay, setCheckEssay] = useState(null);

    const handleProfileTap = () => {
        setTap("profile");
    };

    const handleEssayTap = () => {
        setTap("essay");
    };

    const handleCheckWho = (index) => {
        const target = peopleList[index];
        console.log(target);
        setCheckProfile(target);
        setCheckEssay(target.essays[0]); // 임시로 0번 넣기 나중엔 대표 값으로 변경
        setTap("profile");
    };

    return (
        <div>
            <S.profileAndEssayWrap>
                <S.peopleTapWrap>
                    <S.peopleTap>
                        <S.peopleTitle>참여자</S.peopleTitle>
                        <hr />
                        <div>
                            {peopleList.map((people, index) => (
                                <S.peopleName
                                    onClick={() => handleCheckWho(index)}
                                >
                                    {people.nickname}
                                </S.peopleName>
                            ))}
                        </div>
                    </S.peopleTap>
                </S.peopleTapWrap>
                <S.contentTapWrap>
                    <S.contentTapList>
                        <S.contentTap onClick={handleProfileTap}>
                            프로필
                        </S.contentTap>
                        <S.contentTap onClick={handleEssayTap}>
                            자기소개서
                        </S.contentTap>
                    </S.contentTapList>
                    <S.contentDetail>
                        {!checkProfile ? (
                            <S.profileContent>
                                참여자를 클릭해 정보를 확인하세요!
                            </S.profileContent>
                        ) : tap === "profile" ? (
                            <StudyProfileDetail profile={checkProfile} />
                        ) : (
                            tap === "essay" && (
                                <StudyEssayDetail essay={checkEssay} />
                            )
                        )}
                    </S.contentDetail>
                </S.contentTapWrap>
            </S.profileAndEssayWrap>
        </div>
    );
};

export default StudyProfileAndEssay;