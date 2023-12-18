
        //------------- nav bar script ---------------
        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

        var sidemenu = document.getElementById("sidemenu");

        function openmenu(){
            sidemenu.style.right = "0";
        }
        function closemenu(){
            sidemenu.style.right = "-200px";
        }

        //------------- scroll reveal script ---------------
        ScrollReveal({
            reset: true,
            distance: '80px',
            duration: 2000,
            delay: 200
        });

        ScrollReveal().reveal('.myheader-text, .sub-title', { origin: 'top'});
        ScrollReveal().reveal('.about-col1, .myheader-text h1, .btn', { origin: 'left'});
        ScrollReveal().reveal('.input-right-animation',{ origin: 'right'});
        ScrollReveal().reveal('.portfolio-container, .certificate-gallery, .hobbies-container', { origin: 'bottom'});

        
        //--------------------- typed script ---------------
        const typed = new Typed('.multiple-text', {
            strings: ['Software Engineer','Software Developer', 'Full-stack Developer', 'Java Developer', 'Frontend Developer'],
            typeSpeed: 80,
            backSpeed: 80,
            backDelay: 800,
            loop: true
        });





        //----------- Google sheet form script -------------
        const scriptURL = 'https://docs.google.com/spreadsheets/d/1TeeEtOYdv8zzcMrbAf0Y9mbLqCRUfOa8B-0y-GUlhU4/edit?resourcekey#gid=704346990'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")


        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message sent successfully !"
                setTimeout(function(){
                    msg.innerHTML = ""
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })


