 /* WOW Animated Begin */
// wow = new WOW({
//  boxClass:     'wow',      // default
//  animateClass: 'animated', // default
//  offset:       0,          // default
//  mobile:       true,       // default
//  live:         true        // default
// })
// wow.init();

 /* Additional materials Begin */
const material = (sectionTitle, urlName1, url1, urlName2, url2, urlName3, url3, urlName4, url4, urlName5, url5, urlName6, url6) => ({
    sectionTitle,
    urlName1,
    url1,
    urlName2,
    url2,
    urlName3,
    url3,
    urlName4,
    url4,
    urlName5,
    url5,
    urlName6,
    url6
});
const materials = [
        material('Історія інтернету:', 'en.wikipedia.org/wiki/History_of_the_Internet', 'https://en.wikipedia.org/wiki/History_of_the_Internet'),
        material('Історія вебу:', 'www.evolutionoftheweb.com', 'http://www.evolutionoftheweb.com', 'en.wikipedia.org/wiki/History_of_the_World_Wide_Web', 'https://en.wikipedia.org/wiki/History_of_the_World_Wide_Web'),
        material('Принципи роботи сучасних веб-браузерів.', 'Як працює браузер(ru)', 'https://www.html5rocks.com/ru/tutorials/internals/howbrowserswork/#Parsing_general'),
        material('Про W3C:', 'www.w3.org/Consortium/facts', 'http://www.w3.org/Consortium/facts'),
        material('Ресурс, де зібрано всі новини у світі веб-розробки:', 'uptodate.frontendrescue.org', 'https://uptodate.frontendrescue.org'),
        material('Як працює DNS:', 'howdns.works', 'https://howdns.works'),
        material('Для перевірки підтримки браузером тих чи інших можливостей і стандартів існують спеціальні ресурси. Найбільш відомі:', 'caniuse.com', 'http://caniuse.com', 'html5please.com', 'http://html5please.com'),
        material('Online редактори коду:', 'JSFiddle', 'http://jsfiddle.net', 'LiveWeave', 'http://liveweave.com', 'CodePen.io', 'http://codepen.io', 'JsDo.it', 'http://jsdo.it', 'Cloud9', 'https://c9.io'),
        material('Offline редактори коду:', 'Notepad++', 'https://notepad-plus-plus.org/download/v6.8.3.html', 'Sublime Text3', 'http://www.sublimetext.com', 'Sublime Keyboard Shortcuts', 'http://benmccormick.org/content/images/2014/Jun/Sublime_cheat_sheet.png', 'Brackets', 'http://brackets.io', 'Atom', 'https://atom.io'),
        material('IDE (Integrated Development Environment):', 'WebStorm', 'https://www.jetbrains.com/webstorm', 'VisualStudio', 'https://www.visualstudio.com'),
        material('Other:', 'MDN(HTML)', 'https://developer.mozilla.org/ru/docs/Web/Guide/HTML', 'MDN(CSS)', 'https://developer.mozilla.org/ru/docs/Web/CSS', 'CSS Tricks', 'https://css-tricks.com', 'Шпаргалка зі списком всіх CSS стилів', 'http://media.mediatemple.netdna-cdn.com', 'Learn Layout(en, es, fr, de, du, it, po, ru,)', 'http://learnlayout.com', 'Frontender', 'http://frontender.info'),
        material('JavaScript:', 'Learn Javascript', 'http://learn.javascript.ru'),
        material('jQuery:', 'Documentation english', 'http://api.jquery.com', 'Documentation russian', 'http://jquery-docs.ru', 'Шпаргалка', 'pdf/jQuery-1_5-Visual-Cheat-Sheet.pdf')
    ]
    /* Additional materials End */
    /* Core Begin */
new Vue({
        el: '#Roman_Matviy',
        // template:
        // `<div :style="{width: '55%'}">t</div>`,
        data: {
            isActive: false,
            show: true,
            about: {
                title: 'Front-end developer',
                fullname: 'Roman Matviy',
                location: 'Lviv, Ukraine',
                nationality: 'Ukrainian',
                email: 'roman@matviy.pp.ua',
                site: 'matviy.pp.ua',
                skype: 'romas6ka',
                phone: '+380 93 88 00 822',
                mobile: '+380 67 77 19 340',
                github: 'github.com/MatviyRoman',
                linkedin: 'linkedin.com/in/MatviyRoman',
                facebook: 'facebook.com/romas6ka',
                qualities: `punctual,
                        without bad habits,
                        persistent and purposeful,
                        responsible and executive,
                        prone to analytical activity,
                        prone to analytical activity`,
                study: 'Vue.js, React, Angular, TypeScript, PHP, MySQL, Node.js',
                understanding: 'Vue.js, Angular, TypeScript, PHP, MySQL, AJAX',
            },
            abouts,
            backEnds,
            certificates,
            contacts,
            cmss,
            frontEnds,
            frameworks,
            languages,
            links,
            materials,
            menus,
            socials,
            skills,
            tools,
            programs,
            projects,
            project: projects[1],
            selectedProjectIndex: 0,
            materialsShow: false,
            phoneVisibility: false,
            searchProjects: '',
            select: 1
        },
        methods: {
            modalOpen: function() {
                this.isActive = true;
            },
            modalClose: function() {
                this.isActive = false;
            },
            selectProject: function(index) {
                // console.log('Click', index)
                this.project = projects[index]
                this.selectedProjectIndex = index
            },
            //  select(project,index) {
            //      this.project = project;
            //      this.project = this.filteredLessons[index]
            //      this.selectLessonIndex = index
            //      console.log('click', index);
            // },
            materialShow() {
                this.materialsShow = false
                this.logs.push(log(`Cancelled order: ${this.car.name} - ${this.car.model}`, 'cnl'))
            }
        },
        computed: {
            material() {
                return this.materialsShow ? 'Hide materials' : 'Show materials'
            },
            message: function() {
                return "Hello " + about.fullname;
            },
            phoneBtnText() {
                return this.phoneVisibility ? 'Hide phone' : 'Show phone'
            },
            filteredLessons() {
                return this.skills.filter(skill => {
                    return skill.title.indexOf(this.search) > -1 || skill.description.indexOf(this.search) > -1
                })
            }
        },
        filters: {
            date(value) {
                return value.toLocalString()
            }
        }
    })
    /* Core End */

    // var delay = 500;
// $(".progress-bar").each(function(i) {
//   $(this).delay(delay * i).animate({
//     width: $(this).attr('aria-valuenow') + '%'
//   }, delay);
//   $(this).prop('Counter', 0).animate({
//     Counter: $(this).text()
//   }, {
//     duration: delay,
//     // easing: 'swing',
//     step: function(now) {
//       $(this).text(Math.ceil(now) + '%');
//     }
//   });
// });
// $(document).ready(function(){
//     $('.progress-title > b').each(function(){
//         $(this).prop('Counter',0).animate({
//             Counter: $(this).text()
//         },{
//             duration: 1500,
//             easing: 'swing',
//             step: function (now){
//                 $(this).text(Math.ceil(now));
//             }
//         });
//     });
// });
// $('.skillset-section').hover(
//    function(){
//          $('.progress-bar').addClass('hover');
//          $('.progress-bar').removeClass('hide');
//         },
//    function(){
//          $('.progress-bar').removeClass('hover');
//          $('.progress-bar').addClass('hide');
//    }
// )
// sliderCarousel Start
/*$(window).on('load', function(){
    $('.sliderProject1, .sliderProject2').carousel({
        interval: 3000,
        pause: 'true',
        wrap: true
    })
    $('.sliderProject1 .prev, .sliderProject2e .prev').click(function(){
        $('.sliderProject1, .sliderProject2').carousel('prev')
    })
    $('.sliderProject1 .next, .sliderProject2e .next').click(function(){
        $('.sliderProject1, .sliderProject2').carousel('next')
    })
    $('.sliderProject1 .prev, .sliderProject1 .next, .sliderProject2 .prev, .sliderProject2 .next').click(function(event) {
        event.preventDefault();
    });
})*/
// $(function(){
//   $('.carousel-control-prev').click(function() {
//     $('.active').trigger('click');
//   })
// })
// $( ".active" ).on( "click", function() {
//   $('.active').click();
// });
// $( ".carousel-control-prev" ).trigger( "click" );
// $(document).ready(function(){
//     $( "li.active" ).on( "click", function() {
//       alert( $( this ).text() );
//       $( "li.active" ).after( $( "li.active" ) );
//     });
//     $( ".carousel-control-prev" ).trigger( "click" );
// });
// $( ".carousel-control-prev" ).click(function() {
//   $( "li.active" ).trigger( "click" );
// console.log ('this')
// });