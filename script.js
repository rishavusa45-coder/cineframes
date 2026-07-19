// =========================
// CINEFRAMES MAIN SCRIPT
// =========================

document.addEventListener("DOMContentLoaded", () => {

    // =====================
    // LOADER
    // =====================

    const loader = document.querySelector(".loader");

    window.addEventListener("load", () => {
        if(loader){
            loader.classList.add("loader-hidden");

            setTimeout(() => {
                loader.remove();
            },600);
        }
    });

    // =====================
    // MOBILE MENU
    // =====================

    const menuBtn = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-links");

    if(menuBtn && navMenu){

        menuBtn.addEventListener("click",()=>{

            navMenu.classList.toggle("active");
            menuBtn.classList.toggle("active");

        });

    }

    // =====================
    // STICKY NAVBAR
    // =====================

    const navbar=document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>80){

            navbar.classList.add("sticky");

        }else{

            navbar.classList.remove("sticky");

        }

    });

    // =====================
    // SMOOTH SCROLL
    // =====================

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    // =====================
    // ACTIVE NAV LINK
    // =====================

    const sections=document.querySelectorAll("section");
    const navLinks=document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const sectionTop=section.offsetTop-150;

            if(pageYOffset>=sectionTop){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#"+current){

                link.classList.add("active");

            }

        });

    });

    // =====================
    // SCROLL PROGRESS BAR
    // =====================

    const progress=document.querySelector(".progress-bar");

    window.addEventListener("scroll",()=>{

        const totalHeight=document.body.scrollHeight-window.innerHeight;

        const progressHeight=(window.pageYOffset/totalHeight)*100;

        if(progress){

            progress.style.width=progressHeight+"%";

        }

    });

    // =====================
    // BACK TO TOP
    // =====================

    const back=document.querySelector(".back-to-top");

    window.addEventListener("scroll",()=>{

        if(!back) return;

        if(window.scrollY>500){

            back.classList.add("show");

        }else{

            back.classList.remove("show");

        }

    });

    if(back){

        back.addEventListener("click",()=>{

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        });

    }

    // =====================
    // SCROLL REVEAL
    // =====================

    const reveals=document.querySelectorAll(".reveal");

    function reveal(){

        reveals.forEach(el=>{

            const top=el.getBoundingClientRect().top;

            const visible=150;

            if(top<window.innerHeight-visible){

                el.classList.add("active");

            }

        });

    }

    reveal();

    window.addEventListener("scroll",reveal);

    // =====================
    // COUNTER
    // =====================

    const counters=document.querySelectorAll(".counter");

    counters.forEach(counter=>{

        const update=()=>{

            const target=+counter.dataset.target;

            const count=+counter.innerText;

            const increment=target/150;

            if(count<target){

                counter.innerText=Math.ceil(count+increment);

                requestAnimationFrame(update);

            }else{

                counter.innerText=target;

            }

        };

        update();

    });

    // =====================
    // VIDEO HOVER
    // =====================

    const videos=document.querySelectorAll("video");

    videos.forEach(video=>{

        video.addEventListener("mouseenter",()=>{

            video.play();

        });

        video.addEventListener("mouseleave",()=>{

            video.pause();

            video.currentTime=0;

        });

    });

    // =====================
    // PARALLAX HERO
    // =====================

    const hero=document.querySelector(".hero");

    window.addEventListener("scroll",()=>{

        if(hero){

            hero.style.backgroundPositionY=window.pageYOffset*0.5+"px";

        }

    });

    // =====================
    // FOOTER YEAR
    // =====================

    const year=document.querySelector("#year");

    if(year){

        year.textContent=new Date().getFullYear();

    }

});