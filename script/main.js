// 왼쪽 섹션 - 인기 오리지널 비디오 이미지
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v2/search/image",
  data: { query: "킬링벌스 '킬링보이스' " },
  headers: { Authorization: "KakaoAK 71d24c50e0b18ae03087bb26977587bc" }
})

  .done(function (dl) {
    for (let i = 0; i < 4; i++) {
      $(".originalvideo").eq(i).append("<a href='#'>" + "<img src='" + dl.documents[i].image_url + "'/>" + "</a>");
    }

    $(".originalvideo").eq(4).append("<a href='#'>" + "<img src='" + dl.documents[8].image_url + "'/>" + "</a>");

    $(".originalvideo").eq(5).append("<a href='#'>" + "<img src='" + dl.documents[15].image_url + "'/>" + "</a>");

    for (let i = 6; i < 7; i++) {
      $(".originalvideo").eq(i).append("<a href='#'>" + "<img src='" + dl.documents[i].image_url + "'/>" + "</a>");
    }

    $(".originalvideo").eq(7).append("<a href='#'>" + "<img src='" + dl.documents[21].image_url + "'/>" + "</a>");

    $(".originalvideo").eq(8).append("<a href='#'>" + "<img src='" + dl.documents[29].image_url + "'/>" + "</a>");
  });

// 왼쪽 섹션 - 인기 오리지널 텍스트
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v2/search/web",
  data: { query: "킬링 벌스" },
  headers: { Authorization: "KakaoAK 71d24c50e0b18ae03087bb26977587bc" }
})

  .done(function (dl) {
    console.log(dl.documents[2].title);
    console.log(dl.documents[2].contents);
    // for (let i = 0; i < 12; i++) {
    //   $("").eq(i).append("<a href='#'>" + "<img src='" + dl.documents[i].thumbnail + "'/>" + "</a>");
    // }
  });


// 오른쪽 섹션 - 인기 라이브 비디오1
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v2/search/image",
  data: { query: "유튜브 shorts", page: 1 },
  headers: { Authorization: "KakaoAK 71d24c50e0b18ae03087bb26977587bc" }
})
  // dl.documents[0].image_url 이미지 URL
  // dl.documents[0].width 이미지의 가로 길이
  // dl.documents[0].height 이미지의 세로 길이

  .done(function (dl) {
    $(".livevideo").eq(0).append("<a href='#'>" + "<img src='" + dl.documents[38].image_url + "'/>" + "</a>");

    $(".livevideo").eq(1).append("<a href='#'>" + "<img src='" + dl.documents[71].image_url + "'/>" + "</a>");

    for (let i = 0; i < 12; i++) {
      $(".livevideo .title").eq(i).append("<p>" + dl.documents[i].title + "</p>");
    }
  });

// 오른쪽 섹션 - 인기 라이브 비디오2
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v2/search/image",
  data: { query: "일소라", page: 1 },
  headers: { Authorization: "KakaoAK 71d24c50e0b18ae03087bb26977587bc" }
})
  // dl.documents[0].image_url 이미지 URL
  // dl.documents[0].width 이미지의 가로 길이
  // dl.documents[0].height 이미지의 세로 길이

  .done(function (dl) {
    $(".livevideo").eq(2).append("<a href='#'>" + "<img src='" + dl.documents[67].image_url + "'/>" + "</a>");

    $(".livevideo").eq(3).append("<a href='#'>" + "<img src='" + dl.documents[75].image_url + "'/>" + "</a>");
  });

// 오른쪽 섹션 - 인기 라이브 비디오3
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v2/search/image",
  data: { query: "세로 비디오", page: 1 },
  headers: { Authorization: "KakaoAK 71d24c50e0b18ae03087bb26977587bc" }
})
  // dl.documents[0].image_url 이미지 URL
  // dl.documents[0].width 이미지의 가로 길이
  // dl.documents[0].height 이미지의 세로 길이

  .done(function (dl) {
    $(".livevideo").eq(4).append("<a href='#'>" + "<img src='" + dl.documents[21].image_url + "'/>" + "</a>");
  });