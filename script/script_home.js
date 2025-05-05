const home_h1 = document.getElementById("home_h1");

const btn_feature = document.getElementById("btn_feature");
const btn_home = document.getElementById("btn_home");
const btn_testimonial = document.getElementById("btn_testimonial");
const btn_team = document.getElementById("btn_team");
const btn_contact = document.getElementById("btn_contact");
const btnHome = document.getElementById("btnHome");
const btnFeatures = document.getElementById("btnFeatures");
const btnTeam = document.getElementById("btnTeam");
const btnUpMenu = document.getElementById("roll_upMenu");
const rollUp = document.getElementById("rollUp");
const HomeMin = document.getElementById("HomeMin");
const FeaturesMin = document.getElementById("FeaturesMin");
const TestimonialMin = document.getElementById("TestimonialMin");
const TeamMin = document.getElementById("TeamMin");
const ContactMin = document.getElementById("ContactMin");
const topic = document.getElementById("topic");

const miniMenu = document.getElementById("miniMenu");
const main_box_team = document.getElementById("main_box_team");
const main_box_home = document.getElementById("main_box_home");
const main_box_feature = document.getElementById("main_box_feature");
const main_box_testimonial = document.getElementById("main_box_testimonial");
const main_box_contact = document.getElementById("main_box_contact");
const footer_home = document.getElementById("footer_home");
const footer_feature = document.getElementById("footer_feature");
const footer_team = document.getElementById("footer_team");
const footer_contact = document.getElementById("footer_contact");

const teamProfile = document.querySelectorAll('.teamProfile');

const header = document.getElementById("header");
const topicBox = document.getElementById("topicBox");

const body = document.getElementById("body");
//home
const home_p = document.getElementById("home_p");
//feature
const p_feture = document.querySelectorAll(".p_feture");
const h2_form = document.getElementById("h2_form")
//team
const teamText = document.querySelectorAll(".teamText");
const contact_h1 = document.getElementById("contact_h1");
const contact_p = document.getElementById("contact_p");
//contact
const contactP = document.querySelectorAll(".contactP");
const inputs = document.querySelectorAll(".drop_line input");
const selectDeportment = document.getElementById("selectDeportment");
const area = document.getElementById("area");

btn_feature.addEventListener('click', () => {
    home_close();
    feature_open();
    anim_line_feature();
    testimonial_close();
    team_close();
    removeClass();
    contact_close();
});
btnFeatures.addEventListener('click', () => {
    feature_open();
    anim_line_feature();
    contact_close();
});
FeaturesMin.addEventListener('click', () => {
    home_close();
    feature_open();
    anim_line_feature();
    testimonial_close();
    team_close();
    removeClass();
    contact_close();
    miniMenu.style.display = "none";
    btnUpMenu.style.display = "block";
    topicBox.style.display = "block";
});

btn_home.addEventListener('click', () => {
    home_open();
    feature_close();
    testimonial_close();
    team_close();
    removeClass();
    contact_close();
    const box_img_home = document.querySelectorAll('.box_img_home');
    const home_information = document.querySelectorAll('.home_information');
    box_img_home.forEach(element => {
        element.classList.remove('visible');
    });
    home_information.forEach(element => {
        element.classList.remove('visible');
    });
    box_img_home.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 300);
    });
    home_information.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 300);
    });
    text_reader(`THE BEST TECH STARTUP`);
});
btnHome.addEventListener('click', () =>{
    home_open();
    removeClass();
    contact_close()
    const box_img_home = document.querySelectorAll('.box_img_home');
    const home_information = document.querySelectorAll('.home_information');
    box_img_home.forEach(element => {
        element.classList.remove('visible');
    });
    home_information.forEach(element => {
        element.classList.remove('visible');
    });
    box_img_home.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 300);
    });
    home_information.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 300);
    });
    text_reader(`THE BEST TECH STARTUP`);

});
HomeMin.addEventListener('click', () => {
    home_open();
    feature_close();
    testimonial_close();
    team_close();
    removeClass();
    contact_close();
    const box_img_home = document.querySelectorAll('.box_img_home');
    const home_information = document.querySelectorAll('.home_information');
    box_img_home.forEach(element => {
        element.classList.remove('visible');
    });
    home_information.forEach(element => {
        element.classList.remove('visible');
    });
    box_img_home.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 300);
    });
    home_information.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 300);
    });
    text_reader(`THE BEST TECH STARTUP`);
    miniMenu.style.display = "none";
    btnUpMenu.style.display = "block";
    topicBox.style.display = "block";

});

btn_testimonial.addEventListener('click', () =>{
    home_close();
    feature_close();
    testimonial_open();
    team_close();
    removeClass();
    contact_close()
});
TestimonialMin.addEventListener('click', () => {
    home_close();
    feature_close();
    testimonial_open();
    team_close();
    removeClass();
    contact_close()
    miniMenu.style.display = "none";
    btnUpMenu.style.display = "block";
    topicBox.style.display = "block";
});

btn_team.addEventListener('click', () => {
    home_close();
    feature_close();
    testimonial_close();
    team_open();
    animIneractiveTeam();
    contact_close()
});
btnTeam.addEventListener('click', () => {
    team_open();
    animIneractiveTeam();
    contact_close()
});
TeamMin.addEventListener('click', () => {
    home_close();
    feature_close();
    testimonial_close();
    team_open();
    animIneractiveTeam();
    contact_close()
    miniMenu.style.display = "none";
    btnUpMenu.style.display = "block";
    topicBox.style.display = "block";
});

btn_contact.addEventListener('click', () => {
    home_close();
    feature_close();
    testimonial_close();
    team_close();
    removeClass();
    contact_open();
});
ContactMin.addEventListener('click', () => {
    home_close();
    feature_close();
    testimonial_close();
    team_close();
    removeClass();
    contact_open();
    miniMenu.style.display = "none";
    btnUpMenu.style.display = "block";
    topicBox.style.display = "block";
});

btnUpMenu.addEventListener('click', () => {
    miniMenu.style.display = "flex"; 
    btnUpMenu.style.display = "none"; 
    topicBox.style.display = "none";
});

rollUp.addEventListener('click', () => {
    miniMenu.style.display = "none";
    btnUpMenu.style.display = "block";
    topicBox.style.display = "block";
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 365) {
        miniMenu.style.display = "none"; // Скрываем мини-меню
        btnUpMenu.style.display = "none"; // Скрываем кнопку
    } else {
        btnUpMenu.style.display = "block"; // Показываем кнопку, если ширина меньше 365
    }
});
let topicFlag = true;
topic.addEventListener('click', () => {
    function setBlackText(button) {
        button.style.color = "#757575";
    }
    if (topicFlag == true){
        topic.style.backgroundImage = "url(img/topic_light.png)";
        topicBox.style.borderColor = "white";
        topicFlag = false;
        //header
        header.style.backgroundColor = "#3A3A3A"
        function setWhiteText(button) {
            button.style.color = "white";
        }
        btn_home.addEventListener('mouseover', () => setWhiteText(btn_home));
        btn_home.addEventListener('mouseout', () => setBlackText(btn_home));
        btn_testimonial.addEventListener('mouseover', () => setWhiteText(btn_testimonial));
        btn_testimonial.addEventListener('mouseout', () => setBlackText(btn_testimonial));
        btn_team.addEventListener('mouseover', () => setWhiteText(btn_team));
        btn_team.addEventListener('mouseout', () => setBlackText(btn_team));
        btn_feature.addEventListener('mouseover', () => setWhiteText(btn_feature));
        btn_feature.addEventListener('mouseout', () => setBlackText(btn_feature));
        body.style.backgroundColor = "rgb(146, 146, 146)"
        //Home
        home_p.style.color = "#F4F7FE"
        //feature
        p_feture.forEach(i => {
            i.style.color = "#F4F7FE";
        });
        footer_feature.style.backgroundColor = "#3A3A3A";
        h2_form.style.color = "#F4F7FE"
        //Team
        teamText.forEach(i => {
            i.style.color = "#F4F7FE";
        });
        footer_team.style.backgroundColor = "#3A3A3A";
        contact_p.style.color = "#F4F7FE";
        contact_h1.style.color = "#F4F7FE";
        //contact
        contactP.forEach(i => {
            i.style.color = "#F4F7FE"
        });
        inputs.forEach(i => {
            i.style.backgroundColor = "rgb(146, 146, 146)";
            i.style.borderColor = "white";
        });
        selectDeportment.style.backgroundColor = "rgb(146, 146, 146)";
        selectDeportment.style.borderColor = "white";
        area.style.borderColor = "white";
        area.style.backgroundColor = "rgb(146, 146, 146)";

    }
    else{
        topic.style.backgroundImage = "url(img/topic_hight.png)";
        topicBox.style.borderColor = "black";
        topicFlag = true;
        //header 
        header.style.backgroundColor = "white";
        function colorChange(button) {
            button.style.color = "black";
        }
        btn_home.addEventListener('mouseover', () => colorChange(btn_home));
        btn_home.addEventListener('mouseout', () => setBlackText(btn_home));
        btn_testimonial.addEventListener('mouseover', () => colorChange(btn_testimonial));
        btn_testimonial.addEventListener('mouseout', () => setBlackText(btn_testimonial));
        btn_team.addEventListener('mouseover', () => colorChange(btn_team));
        btn_team.addEventListener('mouseout', () => setBlackText(btn_team));
        btn_feature.addEventListener('mouseover', () => colorChange(btn_feature));
        btn_feature.addEventListener('mouseout', () => setBlackText(btn_feature));
        body.style.backgroundColor = "white"
        //Home
        home_p.style.color = "#757575" 
        //feature
        p_feture.forEach(i => {
            i.style.color = "#757575"; // Изменяем цвет текста на красный
        });
        footer_feature.style.backgroundColor = "#F4F7FE";
        h2_form.style.color = "#3A3A3A"
        //team
        footer_team.style.backgroundColor = "#F4F7FE";
        contact_p.style.color = "#757575";
        contact_h1.style.color = "#3A3A3A";
        //contact
        contactP.forEach(i => {
            i.style.color = "#757575";
        });
        inputs.forEach(i => {
            i.style.backgroundColor = "white";
            i.style.borderColor = "#75757591";
        });
        selectDeportment.style.backgroundColor = "white";
        selectDeportment.style.borderColor = "#75757591";
        area.style.borderColor = "#75757591";
        area.style.backgroundColor = "white";
    }
})
let typingTimeout;

function text_reader(text) {
    let index = 0;
    home_h1.innerHTML = '';
    clearTimeout(typingTimeout);
    function type() {
        if (index < text.length) {
            home_h1.innerHTML += text.charAt(index); 
            index++;
            typingTimeout = setTimeout(type, 100); 
        } else {
            typingTimeout = setTimeout(() => {
                home_h1.innerHTML = '';
                index = 0; 
                type(); 
            }, 8000); 
        }
    }
    type(); 
};

function interactive(){
    document.addEventListener('DOMContentLoaded', () => {
        text_reader(`THE BEST TECH STARTUP`);
        const box_img_home = document.querySelectorAll('.box_img_home');
        const home_information = document.querySelectorAll('.home_information')
        box_img_home.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('visible');
            }, index * 300); 
        });
        home_information.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('visible');
            }, index * 300); 
        });
    });
};

function home_close(){
    main_box_home.style.display = "none";
    footer_home.style.display = "none";
};

function home_open(){
    main_box_home.style.display = "flex";
    footer_home.style.display = "flex";
};

function feature_close(){
    main_box_feature.style.display = "none";
    footer_feature.style.display = "none"
};

function feature_open(){
    main_box_feature.style.display = "flex";
    footer_feature.style.display = "flex"
};

function anim_line_feature(){
    const line = document.querySelector('.line_h1');
    line.classList.remove('hide'); 
    line.style.width = '100%';
    
    setTimeout(() => {
        line.classList.add('hide'); 
        line.style.width = '0'; 
    }, 200); 
};

function testimonial_open(){
    main_box_testimonial.style.display = "flex";
};

function testimonial_close(){
    main_box_testimonial.style.display = "none";
};

function team_open(){
    main_box_team.style.display = "flex"
    footer_team.style.display = "block"
};

function team_close(){
    main_box_team.style.display = "none"
    footer_team.style.display = "none"
};

function animIneractiveTeam(){
    teamProfile.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 500); 
    });
};

function removeClass(){
    teamProfile.forEach(element => {
        element.classList.remove('visible');
    });
};

function contact_open(){
    main_box_contact.style.display = "flex";
    footer_contact.style.display = "flex";
}
function contact_close(){
    main_box_contact.style.display = "none";
    footer_contact.style.display = "none"
}

interactive();