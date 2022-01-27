// 왼쪽 섹션 - 인기 오리지널 비디오&텍스트
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v2/search/vclip",
  data: { query: "카카오 tv", size: 30 },
  headers: { Authorization: "KakaoAK 71d24c50e0b18ae03087bb26977587bc" }
})

  .done(function (dl) {
    for (let i = 0; i < 12; i++) {
      $(".originalvideo").eq(i).append("<a href='#'>" + "<img src='" + dl.documents[i].thumbnail + "'/>" + "</a>");
    }
  });

// 오른쪽 섹션 - 인기 라이브 비디오&텍스트
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v2/search/image",
  data: { query: "킬링벌스 이미지" },
  headers: { Authorization: "KakaoAK 71d24c50e0b18ae03087bb26977587bc" }
})

  .done(function (dl) {
    console.log(dl.documents[0].image_url); // 이미지 URL
    console.log(dl.documents[0].width); // 이미지의 가로 길이
    console.log(dl.documents[0].height); // 이미지의 세로 길이

    for (let i = 0; i < 8; i++) {
      $(".livevideo").eq(i).append("<a href='#'>" + "<img src='" + dl.documents[i].image_url + "'/>" + "</a>");
    }
  });

// 왼쪽 섹션 - 셀럽들의 라이프스타일 비디오&텍스트
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v2/search/vclip",
  data: { query: "셀럽들의 라이프스타일", size: 30 },
  headers: { Authorization: "KakaoAK 71d24c50e0b18ae03087bb26977587bc" }
})

  .done(function (dl) {
    for (let i = 0; i < 12; i++) {
      $(".popularvideo").eq(i).append("<a href='#'>" + "<img src='" + dl.documents[i].thumbnail + "'/>" + "</a>");
    }
  });