const patternUrl =
  /((http|https):\/\/(([\w\-\.])*[\w\-\.]+[a-z]{2,}(:\d+)?)(\/|\/[\w\-\/?=&+#\.]+))/gi;
let str =
  "Lorem ipsum dolor sit amet https://www.youtube.com/watch?v=9UnyQxVRfko https://fullstack-nodejs.fullstack.edu.vn/?id=ee77855a-1085-417f-9534-9362051894eb consectetur adipisicing elit. Saepe, rem. Non dicta incidunt adipisci totam neque quae modi facere deserunt, ipsam https://www.youtube.com/playlist?list=PLW-VrTgjB8QLsZ1hf7zZ2GP66L8SbJeRk quidem quisquam molestiae, pariatur repudiandae voluptate https://regex101.com/r/ac6U12/1 similique assumenda. Quibusdam sed earum cupiditate quod sapiente porro itaque nobis sint numquam enim, dignissimos omnis nemo consequatur doloremque, eaque aliquid aut. Dolorum.";

const pattern = /((https):\/\/(www\.)(youtube\.com||youtu\.be)\/+([^\s]+))/gi;
// const urlList = str.match(patternUrl);
// console.log(urlList);
// str = str.replace(patternUrl, 
//     `<a href="$1" title="Website $3" target="_blank">$1</a>`
// );

// function replaceYouTubeVideos(content) {
//   const youtubeRegex = /(https?:\/\/(www\.)?(youtube\.com|youtu\.be)\/[^\s]+)/g;
//   return content.replaceAll(youtubeRegex, function (url) {
//     if (url) {
//       let videoId = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/)[2];
//       if (videoId) {
//         videoId = videoId.split(/[^0-9a-z_-]/i)[0];
//         return `
//         <iframe
//           width='560'
//           height='315'
//           src='https://www.youtube.com/embed/${videoId}'
//           title='YouTube video player'
//           frameBorder='0'
//           allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
//           allowFullScreen></iframe>
//       `;
//       }
//       return url;
//     }
//     return url;
//   });
// }



str = str.replace(
  pattern,
  `<iframe width="560" height="315" src="https://www.youtube.com/embed/$5"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>`
);

document.body.innerHTML = str;


