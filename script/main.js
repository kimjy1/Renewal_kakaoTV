$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v2/search/vclip",
  data: { query: "카카오 tv", size: 30 },
  headers: { Authorization: "KakaoAK 71d24c50e0b18ae03087bb26977587bc" }
})

  .done(function (dl) {
    alert("데이터 받아오기 완료");
    console.log(dl.documents[0].title);
    console.log(dl.documents[0].url);
    console.log(dl.documents[0].thumbnail);
    console.log(dl.documents[0].author);

    for (let i = 0; i < 12; i++) {
      $(".originalvideo").eq(i).append("<a href='#'>" + "<img src='" + dl.documents[i].thumbnail + "'/>" + "</a>");
    }
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v2/search/vclip",
    data: { query: "연합뉴스", size: 30 },
    headers: { Authorization: "KakaoAK 71d24c50e0b18ae03087bb26977587bc" }
  })
  
    .done(function (dl) {
      alert("라이브 데이터 받아오기 완료");
      console.log(dl.documents[0].title);
      console.log(dl.documents[0].url);
      console.log(dl.documents[0].thumbnail);
      console.log(dl.documents[0].author);
  
      for (let i = 0; i < 12; i++) {
        $(".livevideo").eq(i).append("<a href='#'>" + "<img src='" + dl.documents[i].thumbnail + "'/>" + "</a>");
      }
    });