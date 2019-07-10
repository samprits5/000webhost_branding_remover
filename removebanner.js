//There are two versions of this code. Version 1 is slightly better as per the performance tested but jquery dependent.
//Version 2 is pure javascript code, no dependency at all.
//Give full credit to 000webhost for providing us this service for free.

//author : Sam

//Version-1 (Dependency : jQuery)

$(function(){
    $("img[src|='https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png").closest("div").remove();
    $("script").last().remove()
})

//Version-2 (Pure JS, no dependency)

// window.onload = () => {
//     let bannerNode = document.querySelector('[alt="www.000webhost.com"]').parentNode.parentNode;
//     bannerNode.parentNode.removeChild(bannerNode);

//     let s=document.getElementsByTagName('script');
//     s[s.length - 1].parentNode.removeChild(s[s.length - 1]);
// }