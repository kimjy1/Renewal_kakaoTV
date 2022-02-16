// 왼쪽 섹션 - 인기 오리지널 비디오 이미지 1
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v2/search/image",
  data: { query: "런웨이2 썸네일" },
  headers: { Authorization: "KakaoAK 71d24c50e0b18ae03087bb26977587bc" }
})
  // dl.documents[0].image_url 이미지 URL
  // dl.documents[0].display_sitename 출처
  .done(function (dl) {
    $(".originalvideo").eq(0).append("<img src='" + dl.documents[2].image_url + "'/>");
  });

// 왼쪽 섹션 - 인기 오리지널 비디오 이미지 2
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v2/search/image",
  data: { query: "며느라기2", page: 1 },
  headers: { Authorization: "KakaoAK 71d24c50e0b18ae03087bb26977587bc" }
})

  .done(function (dl) {
    $(".originalvideo").eq(1).append("<img src='" + dl.documents[54].image_url + "'/>");
  });

// 왼쪽 섹션 - 인기 오리지널 비디오 이미지 3
$.ajax({
  method: "GET",
  contentType: "application/json; charset=UTF-8",
  url: "https://dapi.kakao.com/v2/search/image",
  data: { query: "카카오티비 소유기", page: 1 },
  headers: { Authorization: "KakaoAK 71d24c50e0b18ae03087bb26977587bc" }
})
  .done(function (dl) {
    $(".originalvideo").eq(2).append("<img src='" + dl.documents[0].image_url + "'/>");
  });

// 왼쪽 섹션 - 인기 오리지널 비디오 이미지 4
$.ajax({
  method: "GET",
  contentType: "application/json; charset=UTF-8",
  url: "https://dapi.kakao.com/v2/search/image",
  data: { query: "카카오tv 썸네일", page: 1 },
  headers: { Authorization: "KakaoAK 71d24c50e0b18ae03087bb26977587bc" }
})
  .done(function (dl) {
    $(".originalvideo").eq(3).append("<img src='" + dl.documents[24].image_url + "'/>");
  });

// 왼쪽 섹션 - 인기 오리지널 비디오 이미지 5
$.ajax({
  method: "GET",
  contentType: "application/json; charset=UTF-8",
  url: "https://dapi.kakao.com/v2/search/image",
  data: { query: "카카오티비 그림자 미녀", page: 4 },
  headers: { Authorization: "KakaoAK 71d24c50e0b18ae03087bb26977587bc" }
})

  .done(function (dl) {
    $(".originalvideo").eq(4).append("<img src='" + dl.documents[55].image_url + "'/>");
  });

// 왼쪽 섹션 - 인기 오리지널 비디오 이미지 6~7
$.ajax({
  method: "GET",
  contentType: "application/json; charset=UTF-8",
  url: "https://dapi.kakao.com/v2/search/image",
  data: { query: "카카오티비 파이트클럽", page: 1 },
  headers: { Authorization: "KakaoAK 71d24c50e0b18ae03087bb26977587bc" }
})
  .done(function (dl) {
    $(".originalvideo").eq(5).append("<img src='" + dl.documents[13].image_url + "'/>");
    $(".originalvideo").eq(6).append("<img src='" + dl.documents[30].image_url + "'/>");
  });

// 왼쪽 섹션 - 인기 오리지널 비디오 이미지 8
$.ajax({
  method: "GET",
  contentType: "application/json; charset=UTF-8",
  url: "https://dapi.kakao.com/v2/search/image",
  data: { query: "카카오티비 개미는 오늘도 뚠뚠", page: 1 },
  headers: { Authorization: "KakaoAK 71d24c50e0b18ae03087bb26977587bc" }
})
  .done(function (dl) {
    $(".originalvideo").eq(7).append("<img src='" + dl.documents[11].image_url + "'/>");
  });


// 왼쪽 섹션 - 인기 오리지널 비디오 이미지 9
$.ajax({
  method: "GET",
  contentType: "application/json; charset=UTF-8",
  url: "https://dapi.kakao.com/v2/search/image",
  data: { query: "카카오티비 사랑과 전쟁", page: 1 },
  headers: { Authorization: "KakaoAK 71d24c50e0b18ae03087bb26977587bc" }
})

  .done(function (dl) {
    $(".originalvideo").eq(8).append("<img src='" + dl.documents[21].image_url + "'/>");
  });

// document.querySelector("iframe").addEventListener("click", () => {

// });