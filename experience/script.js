$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if(window.scrollY>60){
            document.querySelector('#scroll-top').classList.add('active');
        }else{
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline',{delay: 400});
srtop.reveal('.experience .timeline .container',{interval: 400}); 


// Start of Tawk.to Live Chat
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();

// Add CSS to position Tawk on the left
var tawkStyle = document.createElement('style');
tawkStyle.innerHTML = `
    .tawk-min-z-index { 
        left: 20px !important; 
        right: auto !important; 
        bottom: 20px !important;
    }
    .tawk-button-z-index { 
        left: 20px !important; 
        right: auto !important; 
        bottom: 20px !important;
    }
    .tawk-frame { 
        left: 20px !important; 
        right: auto !important; 
    }
`;
document.head.appendChild(tawkStyle);

Tawk_API.onLoad = function(){
    // Use MutationObserver to continuously reposition Tawk
    var observer = new MutationObserver(function() {
        var tawkBtn = document.querySelector('.tawk-button-z-index');
        var tawkMin = document.querySelector('.tawk-min-z-index');
        
        if(tawkBtn) {
            tawkBtn.style.left = '20px';
            tawkBtn.style.right = 'auto';
            tawkBtn.style.bottom = '20px';
        }
        if(tawkMin) {
            tawkMin.style.left = '20px';
            tawkMin.style.right = 'auto';
            tawkMin.style.bottom = '20px';
        }
    });
    
    observer.observe(document.body, { 
        childList: true, 
        subtree: true,
        attributes: true,
        attributeFilter: ['style']
    });
};

(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6976bb6196601c197de26884/1jfrsntrr';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
// End of Tawk.to Live Chat


// disable developer mode
document.onkeydown = function(e) {
  if(e.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}

document.addEventListener('visibilitychange',
function(){
    if(document.visibilityState === "visible"){
        document.title = "Experience | Portfolio Jigar Sable";
        $("#favicon").attr("href","/assets/images/favicon.png");
    }
    else {
        document.title = "Come Back To Portfolio";
        $("#favicon").attr("href","/assets/images/favhand.png");
    }
});