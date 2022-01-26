

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
  data: { query: "#shorts", size: 30 },
  headers: { Authorization: "KakaoAK 71d24c50e0b18ae03087bb26977587bc" }
})

  .done(function (dl) {
    console.log(dl.documents[0].title);
    console.log(dl.documents[0].url);
    console.log(dl.documents[0].thumbnail);
    console.log(dl.documents[0].author);

    for (let i = 0; i < 12; i++) {
      $(".livevideo").eq(i).append("<a href='#'>" + "<img src='" + dl.documents[i].thumbnail + "'/>" + "</a>");
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

// let apikey = "AIzaSyACk-2UnGwYMn3tx0fm8ubUpKVDqu5BCfU";
// let keyword = "짱구는 못말려";

// $.ajax({
//   url: 'https://www.googleapis.com/youtube/v3/search',
//   type: 'get',
//   dataType: 'json',
//   data: { part: 'snippet', key: apikey, q: keyword, maxResults: 50, type: 'video', videoEmbeddable: 'true' },
//   success: function (data) {
//     console.log(data);
//     $.each(data.items, function (i, item) {
//       thumbnail = item.snippet.thumbnails.medium.url; // 썸네일 이미지
//       videoId = item.id.videoId; // 비디오 아이디	
//     });


//   }
// });
// function v_link(videoId) {
//   location.href = 'https://www.youtube.com/watch?v=' + videoId;
// }

// The client ID is obtained from the Google API Console
// at https://console.developers.google.com/.
// If you run this code from a server other than http://localhost,
// you need to register your own client ID.
var OAUTH2_CLIENT_ID = '__YOUR_CLIENT_ID__';
var OAUTH2_SCOPES = [
  'https://www.googleapis.com/auth/youtube'
];

// Upon loading, the Google APIs JS client automatically invokes this callback.
googleApiClientReady = function () {
  gapi.auth.init(function () {
    window.setTimeout(checkAuth, 1);
  });
}

// Attempt the immediate OAuth 2.0 client flow as soon as the page loads.
// If the currently logged-in Google Account has previously authorized
// the client specified as the OAUTH2_CLIENT_ID, then the authorization
// succeeds with no user intervention. Otherwise, it fails and the
// user interface that prompts for authorization needs to display.
function checkAuth() {
  gapi.auth.authorize({
    client_id: OAUTH2_CLIENT_ID,
    scope: OAUTH2_SCOPES,
    immediate: true
  }, handleAuthResult);
}

// Handle the result of a gapi.auth.authorize() call.
function handleAuthResult(authResult) {
  if (authResult && !authResult.error) {
    // Authorization was successful. Hide authorization prompts and show
    // content that should be visible after authorization succeeds.
    $('.pre-auth').hide();
    $('.post-auth').show();
    loadAPIClientInterfaces();
  } else {
    // Make the #login-link clickable. Attempt a non-immediate OAuth 2.0
    // client flow. The current function is called when that flow completes.
    $('#login-link').click(function () {
      gapi.auth.authorize({
        client_id: OAUTH2_CLIENT_ID,
        scope: OAUTH2_SCOPES,
        immediate: false
      }, handleAuthResult);
    });
  }
}

// Load the client interfaces for the YouTube Analytics and Data APIs, which
// are required to use the Google APIs JS client. More info is available at
// https://developers.google.com/api-client-library/javascript/dev/dev_jscript#loading-the-client-library-and-the-api
function loadAPIClientInterfaces() {
  gapi.client.load('youtube', 'v3', function () {
    handleAPILoaded();
  });
}