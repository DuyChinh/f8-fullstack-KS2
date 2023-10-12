//handle scroll
import { client } from "./clients.js";


window.onload = () => {
  document.querySelector(".loader").style.display = "block";
  
    const viewportHeight = document.documentElement.clientHeight;
    // console.log(viewportHeight);
    window.addEventListener("scroll", (e) => {
      // console.log(e);
      const scrolledY = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      // console.log(pageHeight);
      if (scrolledY + viewportHeight >= pageHeight - 100) {
        getPosts();
      }
     
    });

    // const getRandom = (posts) => {
    //   return Math.floor(Math.random() * posts.length);
    // };

    const getPosts = async () => {
      const { data: posts } = await client.get(`/posts`);
      // console.log(posts);
      // let number = getRandom(posts);
      posts.forEach((post, i) => {
        render(
          posts[i].imgSrc,
          posts[i].avatarSrc,
          posts[i].title,
          posts[i].author
        );
      });
    };

    getPosts();
    //Render
    const wrapper = document.querySelector(".wrapper");
    function render(imgSrc, avatarSrc, title, author) {
      const html = `
        <div class="item">
                    <div class="header">
                        <img src="${avatarSrc}"
                            alt="" class="avatar">
                        <p class="name">${author}</p>
                    </div>
                    <div class="wrapper__content">
                        <p class="wrapper__content__title">${title}</p>
                        <img src="${imgSrc}"
                            alt="" class="wrapper__content__img">
                    </div>
                    
                </div>
    `;
      wrapper.innerHTML += html;
    }
}

///loader === item về kích thước 