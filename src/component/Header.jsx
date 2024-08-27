import React, { useState, useEffect } from "react";
import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { HiOutlineViewList } from "react-icons/hi";

const handleClick = (item) => {
  console.log(`${item} 클릭됨`);
  // 여기에 클릭 이벤트 처리 로직 추가
};

export default function Header() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 870);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 870);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleList = () => {
    setShowList(!showList); // 버튼 클릭 시 리스트의 표시 상태를 토글
  };

  return (
    <div
      style={{
        width: "100%",
        height: 60,
        backgroundColor: "gray",
        position: "fixed",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          //   maxWidth: 1200,
          paddingLeft: 20,
          paddingRight: 20,
          width: "100%",
          height: "100%",
          color: "lightgray",
          fontSize: "14px",
          overflowX: "auto",
          justifyContent: isSmallScreen ? "space-between" : "center",
          gap: isSmallScreen ? "10px" : "0", // Adjust gap for small screens
        }}
      >
        {isSmallScreen ? (
          <>
            <button style={buttonStyle} onClick={() => handleClick("Apple")}>
              <FaApple size={25} />
            </button>
            <div style={{ display: "flex", gap: "10px", marginRight: 40 }}>
              <button style={buttonStyle} onClick={() => handleClick("Search")}>
                <IoIosSearch size={25} />
              </button>
              <button
                style={buttonStyle}
                onClick={() => handleClick("Shopping Bag")}
              >
                <LiaShoppingBagSolid size={25} />
              </button>
              <button style={buttonStyle} onClick={toggleList}>
                <HiOutlineViewList size={25} />
              </button>
              {showList && (
                <div style={listStyle}>
                  <button
                    style={listButtonStyle}
                    onClick={() => handleClick("스토어")}
                  >
                    스토어
                  </button>
                  <button
                    style={listButtonStyle}
                    onClick={() => handleClick("Mac")}
                  >
                    Mac
                  </button>
                  <button
                    style={listButtonStyle}
                    onClick={() => handleClick("iPad")}
                  >
                    iPad
                  </button>
                  <button
                    style={listButtonStyle}
                    onClick={() => handleClick("iPhone")}
                  >
                    iPhone
                  </button>
                  <button
                    style={listButtonStyle}
                    onClick={() => handleClick("Watch")}
                  >
                    Watch
                  </button>
                  <button
                    style={listButtonStyle}
                    onClick={() => handleClick("AirPods")}
                  >
                    AirPods
                  </button>
                  <button
                    style={listButtonStyle}
                    onClick={() => handleClick("TV 및 홈")}
                  >
                    TV 및 홈
                  </button>
                  <button
                    style={listButtonStyle}
                    onClick={() => handleClick("엔터테인먼트")}
                  >
                    엔터테인먼트
                  </button>
                  <button
                    style={listButtonStyle}
                    onClick={() => handleClick("액세서리")}
                  >
                    액세서리
                  </button>
                  <button
                    style={listButtonStyle}
                    onClick={() => handleClick("고객지원")}
                  >
                    고객지원
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <button style={buttonStyle} onClick={() => handleClick("Apple")}>
              <FaApple size={25} />
            </button>
            <button style={buttonStyle} onClick={() => handleClick("스토어")}>
              스토어
            </button>
            <button style={buttonStyle} onClick={() => handleClick("Mac")}>
              Mac
            </button>
            <button style={buttonStyle} onClick={() => handleClick("iPad")}>
              iPad
            </button>
            <button style={buttonStyle} onClick={() => handleClick("iPhone")}>
              iPhone
            </button>
            <button style={buttonStyle} onClick={() => handleClick("Watch")}>
              Watch
            </button>
            <button style={buttonStyle} onClick={() => handleClick("AirPods")}>
              AirPods
            </button>
            <button style={buttonStyle} onClick={() => handleClick("TV 및 홈")}>
              TV 및 홈
            </button>
            <button
              style={buttonStyle}
              onClick={() => handleClick("엔터테인먼트")}
            >
              엔터테인먼트
            </button>
            <button style={buttonStyle} onClick={() => handleClick("액세서리")}>
              액세서리
            </button>
            <button style={buttonStyle} onClick={() => handleClick("고객지원")}>
              고객지원
            </button>
            <button style={buttonStyle} onClick={() => handleClick("Search")}>
              <IoIosSearch size={25} />
            </button>
            <button
              style={buttonStyle}
              onClick={() => handleClick("Shopping Bag")}
            >
              <LiaShoppingBagSolid size={25} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// 버튼 스타일
const buttonStyle = {
  background: "none",
  border: "none",
  color: "lightgray",
  fontSize: "inherit",
  cursor: "pointer",
  padding: "0",
  margin: "0 10px", // Added margin for spacing between buttons
};

// 리스트 스타일
const listStyle = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "100%", // 위치를 버튼 아래로 설정
  right: "0",
  width: "25%",
  backgroundColor: "gray",
  padding: "10px 10px",
  fontSize: 20,
};

const listButtonStyle = {
  background: "none",
  border: "none",
  color: "lightgray",
  fontSize: "inherit",
  cursor: "pointer",
  padding: "5px 10px",
  margin: "0 0 5px 0",
};
