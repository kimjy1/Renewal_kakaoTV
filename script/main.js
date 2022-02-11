// 왼쪽 섹션 - 인기 오리지널 비디오 이미지 1
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v2/search/image",
  data: { query: "런웨이2 썸네일" },
  headers: { Authorization: "KakaoAK 71d24c50e0b18ae03087bb26977587bc" }
})

  .done(function (dl) {
    $(".originalvideo").eq(0).append("<a href='#'>" + "<img src='" + dl.documents[2].image_url + "'/>" + "</a>");
  });

// 왼쪽 섹션 - 인기 오리지널 비디오 이미지 2
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v2/search/image",
  data: { query: "며느라기2", page: 1 },
  headers: { Authorization: "KakaoAK 71d24c50e0b18ae03087bb26977587bc" }
})

  .done(function (dl) {
    $(".originalvideo").eq(1).append("<a href='#'>" + "<img src='" + dl.documents[53].image_url + "'/>" + "</a>");
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
    $(".originalvideo").eq(2).append("<a href='#'>" + "<img src='" + dl.documents[0].image_url + "'/>" + "</a>");
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
    $(".originalvideo").eq(3).append("<a href='#'>" + "<img src='" + dl.documents[24].image_url + "'/>" + "</a>");
  });

// 왼쪽 섹션 - 인기 오리지널 비디오 이미지 5~7
$.ajax({
  method: "GET",
  contentType: "application/json; charset=UTF-8",
  url: "https://dapi.kakao.com/v2/search/image",
  data: { query: "멜뮤로그", page: 1 },
  headers: { Authorization: "KakaoAK 71d24c50e0b18ae03087bb26977587bc" }
})

  .done(function (dl) {
    let imageindex = 4;
    for (let i = 11; i < 13; i++) {
      $(".originalvideo").eq(imageindex).append("<a href='#'>" + "<img src='" + dl.documents[i].image_url + "'/>" + "</a>");
      imageindex++;
    }
    $(".originalvideo").eq(imageindex).append("<a href='#'>" + "<img src='" + dl.documents[14].image_url + "'/>" + "</a>");
  });

// 왼쪽 섹션 - 인기 오리지널 비디오 이미지 8
$.ajax({
  method: "GET",
  contentType: "application/json; charset=UTF-8",
  url: "https://dapi.kakao.com/v2/search/image",
  data: { query: "멜뮤로그", page: 1 },
  headers: { Authorization: "KakaoAK 71d24c50e0b18ae03087bb26977587bc" }
})

  .done(function (dl) {
    $(".originalvideo").eq(7).append("<a href='#'>" + "<img src='" + dl.documents[59].image_url + "'/>" + "</a>");
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
    $(".originalvideo").eq(8).append("<a href='#'>" + "<img src='" + dl.documents[21].image_url + "'/>" + "</a>");
  });

// // 왼쪽 섹션 - 인기 오리지널 비디오 이미지 9
// $.ajax({
//   method: "GET",
//   contentType: "application/json; charset=UTF-8",
//   url: "https://dapi.kakao.com/v2/search/image",
//   data: { query: "카카오티비 사랑과 전쟁", page: 1 },
//   headers: { Authorization: "KakaoAK 71d24c50e0b18ae03087bb26977587bc" }
// })
//   // dl.documents[0].image_url 이미지 URL
//   // dl.documents[0].display_sitename 출처
//   // dl.documents[0].width 이미지의 가로 길이
//   // dl.documents[0].height 이미지의 세로 길이

//   .done(function (dl) {
//     let imageindex = 0;
//     for (let i = 21; i < 27; i++) {
//       $(".originalvideo").eq(imageindex).append("<a href='#'>" + "<img src='" + dl.documents[i].image_url + "'/>" + "</a>");
//       $(".original-list .title > p").eq(imageindex).append(dl.documents[i].display_sitename);
//       imageindex++;
//     }
//   });


// 오른쪽 섹션 - 인기 라이브 비디오
// $.ajax({
//   method: "GET",
//   contentType: "application/json; charset=UTF-8",
//   url: "https://dapi.kakao.com/v2/search/image",
//   data: { query: "#쇼츠", page: 1 },
//   headers: { Authorization: "KakaoAK 71d24c50e0b18ae03087bb26977587bc" }
// })
//   // dl.documents[0].image_url 이미지 URL
//   // dl.documents[0].display_sitename 출처
//   // dl.documents[0].width 이미지의 가로 길이
//   // dl.documents[0].height 이미지의 세로 길이

//   .done(function (dl) {
//     let imageindex = 0;
//     for (let i = 65; i < 73; i++) {
//       $(".livevideo").eq(imageindex).append("<a href='#'>" + "<img src='" + dl.documents[i].image_url + "'/>" + "</a>");
//       $(".livebox .title").eq(imageindex).append("<p>" + dl.documents[i].display_sitename + "</p>");
//       imageindex++;
//     }
//   });