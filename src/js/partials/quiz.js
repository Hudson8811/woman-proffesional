window.addEventListener('load', () => {
  const questions = [
    {
        "q": "Как вы можете охарактеризовать своего ребенка?",
        "answers": [
            {
                "text": "Яркий лидер, инициативен, строит планы, собирает вокруг себя других.",
                "type": "pr"
            },
            {
                "text": "Спокойный, усидчивый, вдумчивый, от коллектива не зависит.",
                "type": "ik"
            },
            {
                "text": "Творческий, любит придумывать, снимает видео или ведет блог, любит аудиторию.",
                "type": "pm"
            },
            {
                "text": "Любит порядок, комфортно чувствует себя в рамках правил, следит, чтобы их соблюдали другие. ",
                "type": "km"
            }
        ]
    },
    {
        "q": "Какие предметы ему лучше даются?",
        "answers": [
            {
                "text": "Математика, физика, химия",
                "type": "ik"
            },
            {
                "text": "Языки, литература, история",
                "type": "pm"
            },
            {
                "text": "Биология, психология, основы коммуникации",
                "type": "km"
            },
            {
                "text": "Экономика, обществознание, внеурочная деятельность",
                "type": "pr"
            }
        ]
    },
    {
        "q": "Как он обычно осваивает новую информацию?",
        "answers": [
            {
                "text": "Быстро схватывает суть, легко разбирается в новом, но склонен достаточно быстро забывать детали и подробности.",
                "type": "pr"
            },
            {
                "text": "Ему нужно время, чтобы разобраться в проблеме, не всегда готов воспринимать информацию, если она не относится к сфере его интересов.",
                "type": "km"
            },
            {
                "text": "Любит докапываться до сути, выяснять детали и глубоко погружаться в проблему.",
                "type": "ik"
            },
            {
                "text": "Обладает широким взглядом, пытается привязать новую информацию к уже известной, легче запоминает, если сам рассказывает кому-то.",
                "type": "pm"
            }
        ]
    },
    {
        "q": "На какие кружки предпочитает ходить?",
        "answers": [
            {
                "text": "Научные или связанные с программированием/робототехникой.",
                "type": "ik"
            },
            {
                "text": "Увлекается языками или творческими проектами.",
                "type": "pm"
            },
            {
                "text": "Занимается спортом или любит естественные/биологические опыты.",
                "type": "km"
            },
            {
                "text": "Любит тренинги и мастер-классы от признанных лидеров в своей области.",
                "type": "pr"
            }
        ]
    },
    {
        "q": "Если команде учеников необходимо создать и защитить проект (например, сайт школы или класса), чем хотел бы заняться ваш ребенок?",
        "answers": [
            {
                "text": "Разработкой: созданием структуры сайта, либо его версткой.",
                "type": "ik"
            },
            {
                "text": "Контентом: написанием текстов, подбором фотографий, презентацией.",
                "type": "pm"
            },
            {
                "text": "Организацией: сбором команды, распределением ролей, защитой презентации.",
                "type": "pr"
            },
            {
                "text": "Участвовал бы в той деятельности, где команде больше всего нужны дополнительные руки/силы.",
                "type": "km"
            }
        ]
    },
    {
        "q": "Допустим, у ребенка есть возможность выбрать одну суперспособность – какую бы он выбрал?",
        "answers": [
            {
                "text": "Всегда доносить свое мнение, увлекать людей, генерировать успешные идеи.",
                "type": "pr"
            },
            {
                "text": "Видеть проблемы других людей и оптимальные способы их решения.",
                "type": "km"
            },
            {
                "text": "Способность «понимать» искусственный интеллект и видеть наилучшие пути его применения в науке.",
                "type": "ik"
            },
            {
                "text": "Умение облекать свои идеи в максимально точную словесную или визуальную форму: писать лучшие тексты и снимать видео, собирающие миллионы просмотров.",
                "type": "pm"
            }
        ]
    },
    {
        "q": "Если бы он мог совершить одно открытие/достижение, какое он бы выбрал?",
        "answers": [
            {
                "text": "Разработать лекарство от какого-то серьезного заболевания.",
                "type": "km"
            },
            {
                "text": "Основать и развить компанию, которая перевернет рынок.",
                "type": "pr"
            },
            {
                "text": "Изобрести технологию, которая изменит мир.",
                "type": "ik"
            },
            {
                "text": "Создать медиа/блог, который читают или смотрят все его сверстники.",
                "type": "pm"
            }
        ]
    },
    {
        "q": "На какую профильную выставку или мастер-класс ему было бы интереснее всего пойти?",
        "answers": [
            {
                "text": "Онлайн-трансляцию с обзором последних событий в блогосфере и трендов в журналистике.",
                "type": "pm"
            },
            {
                "text": "Выставку высокотехнологичных достижений в интересной ему сфере знаний.",
                "type": "ik"
            },
            {
                "text": "Мастер-класс или дискуссию с владельцем/руководителем успешной компании.",
                "type": "pr"
            },
            {
                "text": "Выставку новейших разработок в военной или медицинской области.",
                "type": "km"
            }
        ]
    },
    {
        "q": "Представьте, что молодые специалисты в недалеком будущем планируют первый полет на Марс. Какую роль выберет ребенок?",
        "answers": [
            {
                "text": "Ученый: конструирует ракету или разрабатывает программы исследований.",
                "type": "ik"
            },
            {
                "text": "Журналист: подробно освещает процесс, разбирается в теме и «горит» ею.",
                "type": "pm"
            },
            {
                "text": "Ответственный за безопасность команды или главный врач экспедиции.",
                "type": "km"
            },
            {
                "text": "Организатор: собирает команду, руководит процессом подготовки.",
                "type": "pr"
            }
        ]
    },
    {
        "q": "Допустим, ребенка приглашают на стажировку в одну из ведущих компаний отрасли – куда он хотел бы пойти?",
        "answers": [
            {
                "text": "В известное и влиятельное медиа.",
                "type": "pm"
            },
            {
                "text": "В передовую лабораторию или медицинскую клинику.",
                "type": "km"
            },
            {
                "text": "В научно-технологическую компанию, известную выдающимися изобретениями.",
                "type": "ik"
            },
            {
                "text": "В один из ведущих маркетплейсов, в департамент, который занимается поиском партнеров и поставщиков.",
                "type": "pr"
            }
        ]
    }
  ];
  
  const result = {
    pm: {
      title: 'Ваш ребенок готов влиять на умы', 
      text: '<p>Талантливый журналист, выдающийся блогер или непревзойденный педагог-новатор – вполне вероятно, что именно ваш ребенок станет тем, кто влияет на умы поколения, предлагая им свой взгляд на проблемы и события.</p><p>Тем, кто хочет глаголом жечь сердца, мы советуем обратить внимание на новое направление предпрофподготовки, доступное в московских школах – медиаклассы. В рамках этой программы школьникам доступны лекции и мастер-классы на базе ведущих медиавузов страны, стажировки в медиакомпаниях и СМИ, занятия по основам журналистики, медиакоммуникаций и связей с общественностью.</p><p>Тем, кто с юного возраста мечтает учить и воспитывать, могут подойти педагогические классы, разработанные при поддержке Московского городского педагогического университета. Там будущие преподаватели смогут познакомиться с основами психологии, педагогики и социологии, пройти социальную практику в школах, кружках и приютах, вести исследовательскую и проектную деятельность.</p>',
      type: 'pm'
    },
    ik: {
      title: 'Ваш ребенок готов изобретать',
      text: '<p>Высокотехнологичные разработки в медицине, новые открытия в области ядерной физики, развитие искусственного интеллекта или разработка мобильных приложений? Возможно, это дело рук вашего ребенка в недалеком будущем!</p><p>Если ему близка именно научная деятельность, обратите внимание на открытые в московских школах инженерные классы. Ребят обучают основам научных технологий в сотрудничестве с Национальным исследовательским ядерным университетом «МИФИ», Государственной корпорацией по атомной энергии «Росатом» и Национальным исследовательским центром «Курчатовский институт».</p><p>Если ребенок грезит о карьере разработчика или программиста, ему подойдут IT-классы, созданные при участии ведущих IT-компаний страны. В них обучают основам машинного обучения, программирования и сетевой безопасности, разработке мобильных приложений и управлению беспилотниками.</p>',
      type: 'ik'
    },
    pr: {
      title: 'Ваш ребенок – прирожденный предприниматель',
      text: '<p>Он способен собрать команду под любую задачу, генерирует десятки способов решить сложную проблему или просто стремится открыть свое дело даже в юном возрасте? Это крайне востребованные в наше время способности и умения, которые важно вовремя поддержать.</p><p>Обратите внимание на предпринимательские классы, появившиеся в московских школах в рамках предпрофподготовки на базе академических классов. Там будущих гениев предпринимательства учат основам разработки и реализации своих идей, отрабатывают навыки работы с командой и защиты своих проектов. Программа обучения разработана совместно с Российским экономическим университетом имени Г.В. Плеханова.</p>',
      type: 'pr'
    },
    km: {
      title: 'Ваш ребенок хочет помогать людям',
      text: '<p>Кажется, ваш ребенок не мыслит своего будущего без помощи людям, попавшим в сложную ситуацию или просто нуждающимся в его знаниях и умениях. Возможно, он грезит о карьере врача, спасателя или военного?</p><p>Посоветуйте ему обратить внимание на кадетские или медицинские классы, доступные в рамках программ предпрофподготовки в школах Москвы. Они разработаны совместно с профильными ведомствами и знакомят ребят с основными навыками и умениями, которые необходимы представителям этих сложных и благородных профессий.</p><p>В кадетских классах дети осваивают робототехнику, основы навигации и пилотирования, дипломатический этикет и другие навыки, необходимые для дальнейшего продвижения в рамках гражданской и военной службы. В медицинских классах ребятам преподают основы медицинских знаний, физиологии и анатомии, знакомят с функциональными системами человека и учат азам микробиологии.</p>',
      type: 'km'
    }
  };

  const mainEl = document.querySelector('main');
  const introEl = document.querySelector('.intro');
  const introBtnEl = introEl.querySelector('.intro__btn');

  let quizEl = document.querySelector('.quiz');
  const quizMainEl = quizEl.querySelector('.quiz__main');
  
  let currentIndex = 0;
  let lastAnswerValue = null;
  let resultDataItems = [];
  const isDesktop = document.documentElement.clientWidth >= 768;
  
  let shareTitle = 'Мой результат теста - Профессия: выбираем вместе с детьми';
  const shareData = {
    b: 'https://vk.com/share.php?url=<URL>',
    ok: 'https://connect.ok.ru/offer?url=<URL>&title=' + shareTitle,
    fb: 'https://www.facebook.com/sharer/sharer.php?u=<URL>',
    tw: 'https://twitter.com/intent/tweet?text=' + shareTitle + '&url=<URL>'
  };
  
  const inputValues = ['a', 'b', 'c', 'd'];
  let timeoutId = null;
  let resultEl = null;
  let resultUrl = '';

  const resultType = {
    pm: {type: 'pm', points: 0},
    pr: {type: 'pr', points: 0},
    ik: {type: 'ik', points: 0},
    km: {type: 'km', points: 0}
  };

  const AnswerMap = {
    1: {
      a: 'pr',
      b: 'ik',
      c: 'pm',
      d: 'km'
    },
    2: {
      a: 'ik',
      b: 'pm',
      c: 'km',
      d: 'pr'
    },
    3: {
      a: 'pr',
      b: 'km',
      c: 'ik',
      d: 'pm'
    },
    4: {
      a: 'ik',
      b: 'pm',
      c: 'km',
      d: 'pr'
    },
    5: {
      a: 'ik',
      b: 'pm',
      c: 'pr',
      d: 'km'
    },
    6: {
      a: 'pr',
      b: 'km',
      c: 'ik',
      d: 'pm'
    },
    7: {
      a: 'km',
      b: 'pr',
      c: 'ik',
      d: 'pm'
    },
    8: {
      a: 'pm',
      b: 'ik',
      c: 'pr',
      d: 'km'
    },
    9: {
      a: 'ik',
      b: 'pm',
      c: 'km',
      d: 'pr'
    },
    10: {
      a: 'pm',
      b: 'km',
      c: 'ik',
      d: 'pr'
    }
  };

  //////////////////
  const createElement = (template) => {
    const newElement = document.createElement('div');
    newElement.innerHTML = template;

    return newElement.firstChild;
  };
  
  //////////
  const log = () => {
    console.log('currentInex: ' + currentIndex);
    console.log('AnswerMap: ' + AnswerMap[currentIndex][lastAnswerValue]);
    console.log('-------------------------------')
  }
  
  ///////////////// http://localhost:9000/?isResult=true&type=km

  /*const getResultUrl = (type) => {
    return `${window.location.href.split('#')[0]}?isResult=true&type=${type}`;
  };*/

  const setShareLinks = () => {
    const socialItems = document.querySelectorAll('.social__link');
    socialItems.forEach(it => {
      const modClass = it.className.split('social__link social__link--')[1];
      it.href = shareData[modClass].replace('<URL>', window.location.href);
    });
  };

  const getQuizElClass = (index) => {
    return `quiz quiz--q${index + 1}` + ((index + 1) % 2 === 0 ? ' quiz--reverse' : '');
  };

  const hide = (cb) => {
    quizEl.classList.add('quiz--no-events');
    gsap.fromTo(quizEl, {opacity: 1}, {opacity: 0, duration: 0.5, onComplete: cb});
  };

  const show = () => {
    gsap.fromTo(quizEl, {opacity: 0}, {opacity: 1, duration: 0.5, onComplete: () => quizEl.classList.remove('quiz--no-events')});
  };

  const createAnswersTemplate = (dataItem) => {
    let items = '';

    dataItem.answers.forEach((el, index) => {
      const str = '';//' - ' + el.type;
      items += `<label class="custom-radio__item">
        <input class="visually-hidden" type="radio" name="answer" value="${inputValues[index]}"><span class="custom-radio__text"><span>${el.text}${str}</span></span>
      </label>`;
    });

    return `<div class="question__answers custom-radio">${items}</div>`;
  };

  const createQuestionTemplate = (dataItem, index, answers) => {
    return `<h2 class="question__title title"><span class="question__title-num">${index + 1}</span><span class="question__title-text">${dataItem.q}</span></h2>
      ${answers}`
  };

  const changeQuestionImage = (currentIndex, cb) => {
    const quizAsideImage = quizEl.querySelector('.quiz__aside img');

    const image = new Image();
    image.onload = () => {
      quizAsideImage.replaceWith(image);
      cb();
    };

    image.src = `images/q${currentIndex + 1}.svg`;
  };

  const renderQuestion = (index) => {
    const answers = createAnswersTemplate(questions[index]);
    quizMainEl.innerHTML = createQuestionTemplate(questions[index], index, answers);

    quizEl.className = getQuizElClass(index);

    changeQuestionImage(index, () => {
      show();
    });
  };

  const addAnswerToResult = (value) => {
    //console.log(String(currentIndex + 1));
    //console.log('current inde: ' + currentIndex)
    const id = currentIndex < questions.length ? currentIndex : questions.length;
    const type = AnswerMap[id][value];
    resultType[type].points++;
  };

  const scrollToQuiz = () => {
    gsap.to(quizEl, {y: -document.documentElement.clientHeight, duration: 0.7});
    gsap.to(introEl, {y: -introEl.offsetHeight, duration: 0.7, onComplete: () => {
      introEl.remove();
      quizEl.removeAttribute('style');
      mainEl.removeAttribute('style');
      //gsap.to(quizEl, {y: 0, duration: 0})
      window.removeEventListener('scroll', scrollToQuiz);
    }});
  };

  const begin = () => {
    setShareLinks();

    renderQuestion(currentIndex);
    currentIndex++;
    quizEl.classList.remove('quiz--hidden')

    gsap.to(introEl, {opacity: 1, duration: 1});

    if (isDesktop) {
      gsap.fromTo('.intro__image', {xPercent: -100}, {xPercent: 0, duration: 1});
      gsap.fromTo('.intro__main', {xPercent: 100}, {xPercent: 0, duration: 1});

      mainEl.style.overflow = 'hidden';
      mainEl.style.height = '100vh';

      window.addEventListener('scroll', scrollToQuiz);
    }

    introBtnEl.onclick = isDesktop ? scrollToQuiz : start;
    quizEl.onclick = onQuizElClick;
  };

  const start = () => {
    gsap.to(introEl, {opacity: 0, duration: 0.5, onComplete: () => {
      introEl.remove();
      quizEl.classList.remove('quiz--hidden');
      
      renderQuestion(currentIndex);
      show();
      currentIndex++;
    } });
  };

  const next = (index) => {
    hide( () => {
      quizEl.classList.add('quiz--no-events');
      renderQuestion(index);
      addAnswerToResult(lastAnswerValue);
      //log();//
      currentIndex++;
      
    } );
  };

  const restart = () => {
    window.location.hash = '';
    currentIndex = 0;

    gsap.to(resultEl, {opacity: 0, duration: 0.5, onComplete: () => {
      resultEl.remove();
      resultEl = null;
      lastAnswerValue = null;
      resultDataItems = [];
      quizEl.classList.remove('quiz--hidden');
      
      renderQuestion(currentIndex);
      show();
      currentIndex++;
    } });
  };

  const createResultTemplate = (resultTypeItem) => {
    const moreBtnString = resultDataItems.length ? '<button class="result__more" type="button">Еще результат</button>' : '';

    return `<section class="result result--${resultTypeItem.type}">
      <div class="result__container container">
        <div class="result__main">
          <h2 class="result__title title">${resultTypeItem.title}</h2>
          <div class="result__text">${resultTypeItem.text}</div>
          <div class="result__action">
            <button class="result__restart" type="button">Пройти еще раз</button>
            ${moreBtnString}
            <div class="result__social">
              <div class="result__social-hint">Поделиться с друзьями</div>
              <ul class="result__social-list social"> 
                <li class="social__item"> <a class="social__link social__link--tw" href="#">
                    <svg width="21" height="16">
                      <use xlink:href="./images/sprite.svg#tw"></use>
                    </svg></a></li>
                <li class="social__item"> <a class="social__link social__link--ok" href="#">
                    <svg width="15" height="23">
                      <use xlink:href="./images/sprite.svg#ok"></use>
                    </svg></a></li>
                <li class="social__item"> <a class="social__link social__link--fb" href="#">
                    <svg width="13" height="21">
                      <use xlink:href="./images/sprite.svg#fb"></use>
                    </svg></a></li>
                <li class="social__item"> <a class="social__link social__link--b" href="#">
                    <svg width="15" height="15">
                      <use xlink:href="./images/sprite.svg#b"></use>
                    </svg></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="result__aside"> <img src="images/result-${resultTypeItem.type}.svg" alt=""></div>
      </div>
    </section>`
  };

  const setResultDataItems = () => {
    const maxPoint = Math.max(resultType.pm.points, resultType.pr.points, resultType.ik.points, resultType.km.points);

    //console.log(maxPoint);
    //console.log(resultType);
    //console.log(resultDataItems);

    for (key in resultType) {
      if (resultType[key].points === maxPoint) {
        resultDataItems.push(result[key]);
      }
    }
    
    //console.log(resultDataItems);
  };

  const onResultElClick = (e) => {
    const moreBtn = e.target.closest('.result__more');
    const restartBtn = e.target.closest('.result__restart');

    if (moreBtn) {
      renderResult(resultEl);
    }

    if (restartBtn) {
      restart();
    }
  };

  const animateResult = (type) => {
    const selectorFromLeft = type === 'pr' || type === 'pm' ? '.result__main' : '.result__aside';
    const selectorFromRight = type === 'km' || type === 'ik' ? '.result__main' : '.result__aside';

    if (isDesktop) {
      gsap.fromTo(selectorFromLeft, {xPercent: -100}, {xPercent: 0, duration: .7});
      gsap.fromTo(selectorFromRight, {xPercent: 100}, {xPercent: 0, duration: .7});
    }
  };

  const renderResult = (element) => {
    //console.log(resultType)
    gsap.fromTo(element, {opacity: 1}, {opacity: 0, duration: 0.5, onComplete: () => {
      if (resultDataItems.length) {
        const resultDataItem = resultDataItems.pop();
        const newResultEl = createElement(createResultTemplate(resultDataItem));

        quizEl.classList.add('quiz--hidden');

        //console.log('///////////////////')
        //console.log(resultDataItem);
        //console.log(resultDataItems);

        if (resultEl) {
          resultEl.replaceWith(newResultEl);
        } else {
          mainEl.appendChild(newResultEl);
        }

        resultEl = newResultEl;

        //формируем соц ссылки getResultUrl();
        window.location.hash = resultDataItem.type;
        setShareLinks();

        gsap.fromTo(resultEl, {opacity: 0}, {opacity: 1, duration: 0.5, onComplete: () => {
          resultEl.classList.remove('result--no-events');
        }});

        animateResult(resultDataItem.type);

        resultEl.onclick = onResultElClick;
      }
    }});
  };

  const onQuizElClick = (e) => {
    const target = e.target.closest('input[type="radio"]');

    if (target) {
      lastAnswerValue = target.value;

      //alert(lastAnswerValue)
      //alert(AnswerMap[currentIndex][lastAnswerValue])
      //console.log(resultType)

      if (currentIndex <= questions.length - 1) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          next(currentIndex);
        }, 500);
      } else {

        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          addAnswerToResult(lastAnswerValue);
          //log();
          setResultDataItems();
          //console.log(resultDataItems)

          // прячем последний вопрос
          const hideEl = quizEl || resultEl;

          hideEl.classList.add(quizEl ? 'quiz--no-events' : 'result--no-events');

          renderResult(hideEl);

        }, 500);
      }
    }
  };

  ////////////////////////////
  const hash = window.location.hash.split('#')[1];
  if (hash && result.hasOwnProperty(hash)) {
    resultEl = createElement(createResultTemplate(result[hash]));
    resultEl.onclick = onResultElClick;

    introEl.remove();
    mainEl.appendChild(resultEl);

    gsap.fromTo(resultEl, {opacity: 0}, {opacity: 1, duration: 0.5});
    animateResult(hash);

    setShareLinks();
  } else {
    isDesktop ? begin() : (function() {
      gsap.to(introEl, {opacity: 1, duration: 1});
      introBtnEl.onclick = start;
      quizEl.onclick = onQuizElClick;
    })();
  }
  
});