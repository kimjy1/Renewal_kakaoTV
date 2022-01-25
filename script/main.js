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
  data: { query: "카카오쇼핑" },
  headers: { Authorization: "KakaoAK 71d24c50e0b18ae03087bb26977587bc" }
})

  .done(function (dl) {
    console.log(dl.documents[0].collection);
    console.log(dl.documents[0].thumbnail_url);
    console.log(dl.documents[0].image_url);
    console.log(dl.documents[0].display_sitename);

    for (let i = 0; i < 12; i++) {
      $(".livevideo").eq(i).append("<a href='#'>" + "<img src='" + dl.documents[i].thumbnail_url + "'/>" + "</a>");
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

let apikey = "AIzaSyACk-2UnGwYMn3tx0fm8ubUpKVDqu5BCfU";
let keyword = "짱구는 못말려";

$.ajax({
  url: 'https://www.googleapis.com/youtube/v3/search',
  type: 'get',
  dataType: 'json',
  data: { part: 'snippet', key: apikey, q: keyword, maxResults: 50, type: 'video', videoEmbeddable: 'true' },
  success: function (data) {
    console.log(data);
    $.each(data.items, function (i, item) {
      thumbnail = item.snippet.thumbnails.medium.url; // 썸네일 이미지
      videoId = item.id.videoId; // 비디오 아이디	
    });
  }
});
function v_link(videoId) {
  location.href = 'https://www.youtube.com/watch?v=' + videoId;
}