import styled from "styled-components"
import { useEffect } from "react"

const Map = () => {

  const REACT_APP_KAKAO_MAP_APP_KEY = "6af72bb162b060fec44d4603ee93c1c0";

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${REACT_APP_KAKAO_MAP_APP_KEY}&autoload=false`;
    document.head.appendChild(script);

    script.addEventListener("load", () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          // center: new window.kakao.maps.LatLng(latitude, longitude), // 초기 중심 좌표 (위도, 경도)
          level: 3, // 지도 확대 레벨
        };
        new window.kakao.maps.Map(container, options);
      });
    });
  }, []);

  return(
    <StyledLayout>
      <MapLayout id="map" />
    </StyledLayout>
  )
}

export const MapLayout = styled.div`
    max-width: 400px;
    width:500px;
    height:400px;
`

export const StyledLayout = styled.div`
    max-width: 400px;
    width:100%;
    height:100%;
`

export default Map;