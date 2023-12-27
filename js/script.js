// script.js

// ad_banner: 화살표 클릭
const btnPrev = document.querySelector(".slide_arrow_l")
const btnNext = document.querySelector(".slide_arrow_r")
const adFrame= document.querySelector(".ad_txt>ul")
const adLists= document.querySelectorAll(".ad_txt>ul>li") 

let bnnN = 0; 
let lastN = adLists.length-2;
let adW = 590

btnNext.addEventListener("click",e=>{
  e.preventDefault();
  bnnN++;
  if(bnnN>lastN) bnnN=0;
  adFrame.style.marginLeft=`${-bnnN*adW}px`
});

btnPrev.addEventListener("click",e=>{
  e.preventDefault();
  bnnN--;
  if(bnnN<0) bnnN=lastN;
  adFrame.style.marginLeft=`${-bnnN*adW}px`
});

// ad_banner: 좌->우로 넘어가는 슬라이드 
$(function(){
  var slides = $(".ad_txt>ul");
  var slide = $(".ad_txt>ul>li")
  var slideWidth = slide.width();
  var animationTime = 1000; 
  var setIntervalDelay = 4000; 
  var i = 0;
  
  var clone = $(".ad_txt li:lt(1)").clone(); //slide의 첫번째 요소(index번호 0번 ; li의 lessthan 1보다) 복제한다

  slides.append(clone); //복제한슬라이드를 sildes배열의 마지막에 붙인다는얘기 
  
  setInterval(function(){
      if(i>2){
          i=0; 
          slides.css("margin-left",0);
      }
      i++;
      slides.stop().animate({
          marginLeft: -(slideWidth * i)
      }, animationTime);
  },setIntervalDelay);
});

// ad_banner: 창닫기 
const adBanner = document.querySelector(".ad_banner");
const adClose = document.querySelector(".ad_close");
const header = document.querySelector("#header")

adClose.addEventListener("click",e=>{
  e.preventDefault();
  adBanner.classList.add("on");
  header.style.height = '118px';
});

// 주메뉴
const gnbMenu = document.querySelectorAll('.gnb_bottom>ul>li'); //li 10개
const gnbBottom = document.querySelector('.gnb_bottom')
for(var i=0; i<gnbMenu.length; i++){
  //mouseover
  gnbMenu[i].addEventListener("mouseover",e=>{
    e.currentTarget.classList.add("on");

  });

  //mouseout 
  gnbMenu[i].addEventListener("mouseout",e=>{
    e.currentTarget.classList.remove("on");
  })
};

// 휠이벤트 발생시 주메뉴 없어지기 
window.addEventListener("wheel",e=>{
  if(e.deltaY>0){
    gnbBottom.style.display = "none";
  }
  else{
    gnbBottom.style.display = "block";
  }
});


// 검색창
const btnSrchOpen = document.querySelector(".btn_srch_open");
const btnSrchClose = document.querySelector(".btn_srch_close");
const srchWrap = document.querySelector(".srch_wrap");

btnSrchOpen.addEventListener("click",e=>{
  e.preventDefault();
  if(adBanner.classList.contains("on")){
    srchWrap.children[0].style.top = '78px';
    srchWrap.classList.add("on");
    btnSrchClose.style.top='88px'
  }
  else{
    srchWrap.children[0].style.top = '111px';
    srchWrap.classList.add("on");
    btnSrchClose.style.top='88px'
    btnSrchClose.style.top='121px'
  }
});

btnSrchClose.addEventListener("click",e=>{
  e.preventDefault();
  srchWrap.classList.remove("on");
});

//제품 선택시 테두리와 가격
const itemDetailSize = document.querySelectorAll(".product_info>.item_detail_size>ul>li>a") //3개
const itemDetailPrice = document.querySelectorAll(".product_info>.item_detail_size>ul>li>a>dl>dd") //3개
const itemPrice = document.querySelector(".item_price");

for(let i = 0; i<itemDetailSize.length; i++){
  itemDetailSize[i].addEventListener("click",e =>{
    e.preventDefault();
    itemDetailSize.forEach(item =>{
      item.classList.remove("on");
    });
    itemDetailSize[i].classList.add("on");

    if(itemDetailSize[i].classList.contains("on")){
    
      let itemDetailPriced = ['111,000원','165,000원','199,000원'];
      console.log(itemDetailPriced)
      itemPrice.innerHTML = itemDetailPriced[i]
    }
    
  });

};







