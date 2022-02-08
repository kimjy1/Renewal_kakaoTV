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


// 오른쪽 섹션 - 인기 라이브 비디오
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v2/search/image",
  data: { query: "#쇼츠", page: 1 },
  headers: { Authorization: "KakaoAK 71d24c50e0b18ae03087bb26977587bc" }
})
  // dl.documents[0].image_url 이미지 URL
  // dl.documents[0].display_sitename 출처
  // dl.documents[0].width 이미지의 가로 길이
  // dl.documents[0].height 이미지의 세로 길이

  .done(function (dl) {
    let imageindex = 0;
    for (let i = 65; i < 73; i++) {
      $(".livevideo").eq(imageindex).append("<a href='#'>" + "<img src='" + dl.documents[i].image_url + "'/>" + "</a>");
      $(".livebox .title").eq(imageindex).append("<p>" + dl.documents[i].display_sitename + "</p>");
      imageindex++;
    }
  });

// 오른쪽 섹션 - 인기 라이브 비디오
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v2/search/image",
  data: { query: "유튜브 쇼츠", page: 1 },
  headers: { Authorization: "KakaoAK 71d24c50e0b18ae03087bb26977587bc" }
})
  // dl.documents[0].image_url 이미지 URL
  // dl.documents[0].display_sitename 출처
  // dl.documents[0].width 이미지의 가로 길이
  // dl.documents[0].height 이미지의 세로 길이

  .done(function (dl) {
    let mainimg = 7;
    $(".portrait-title").eq(0).append("<a href='#'>" + "<img src='" + dl.documents[mainimg].image_url + "'/>" + "</a>");
  });