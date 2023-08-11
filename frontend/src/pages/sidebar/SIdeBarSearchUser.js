import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";

import TextField from "@mui/material/TextField";
import searchIcon from "../../assets/searchicon.png";

import ProfileModal from "components/ProfileModal";

import { useDispatch } from "react-redux";
import axios from "axios";
import "pages/sidebar/css/SideBar.css";

const SidebarSearch = ({ setClickSearch, clickSearch }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);

  const [searchingId, setSearchingId] = useState("");
  const [searchedList, setSearchedList] = useState([]);

  const [openProfileModal, setOpenProfileModal] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  // 모달 기능
  const goUserProfile = (id) => {
    setOpenProfileModal(true);
    setSelectedId(id);
  };

  const closeUserProfile = () => {
    setOpenProfileModal(false);
  };

  // 만약 state.auth가 null이면, 사이드바를 닫는다.
  useEffect(() => {
    if (!user) {
      setIsOpen(false);
    }
  }, [user]);

  useEffect(() => {
    if (clickSearch) {
      if (user === null) {
        // alert("로그인 필요");
        // return;
      }
      setIsOpen(true);
      const currentIsOpen = isOpen;
      setIsOpen(!currentIsOpen);
    } else {
      setIsOpen(false);
    }
    setSearchedList([]);
  }, [clickSearch]);
  // ---------------------------------------------------
  const handleSearch = (e) => {
    setSearchingId(e.target.value);
  };
  const clickSearchUser = async (e) => {
    // searchingId를 검색하러 보내!!
    await axios
      .get(`api/users/findAll/${searchingId}`)
      .then(({ data }) => {
        setSearchedList(data.data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div id="mySidebar" className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* 친구 목록 섹션 */}
        <div className="sidebar-section">
          <div className="section-title">
            <h2>사용자 검색</h2>
          </div>
          <div className="underline"></div>
          <div className="search-section">
            <div className="search-input-wrap">
              <TextField
                className="search-input"
                onChange={handleSearch}
                id="standard-basic"
                variant="standard"
                placeholder="아이디로 검색하세요"
              />
              <img
                src={searchIcon}
                alt="search"
                className="search-button"
                onClick={clickSearchUser}
              />
            </div>
            <div className="result-section">
              {searchedList.map((id, index) => (
                <div className="result-wrap" key={index}>
                  <div>{id}</div>
                  <div
                    className="go-profile"
                    onClick={() => goUserProfile(`${id}`)}>
                    프로필
                  </div>
                </div>
              ))}
            </div>
          </div>
          {openProfileModal && ( // <-- 추가
            <ProfileModal
              id={selectedId}
              isOpen={openProfileModal}
              onClose={closeUserProfile}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarSearch;