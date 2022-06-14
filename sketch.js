
var r;

var SpeechRec = new p5.SpeechRec();
var spech = new p5.Speech();
var img;
var scan1, scan2, notefi;
var t;
var m = 1;
var hh = true;
var videooo;
var trtr = true;
var welcome;
var mer = true;
var voM = 1;
var timmerer, timmer;
var tm;
var lock, lloc;
var mmt = 2;
var ghr = 2;
var uk, aa;
var s1;
var inp;
var pas;
var capture;
var ucm = 2;
var tmm;
var cm;
var wa = 0;
var los = 0;
var slo = 0;
var bgm;
var database;
var key;
var keys;

SpeechRec.continuous = true;
SpeechRec.interimResult = true;

function preload() {
  timmerer = loadImage("dd.jpg");
  timmer = loadImage("di.jpg");
  lloc = loadImage("ddd1.jpg");
  lock = loadSound("tt.wav");
  uk = loadSound("uk.mp3");
  aa = loadSound("aa.mp3");
  s1 = loadSound("s2.mp4");
  scan1 = loadSound("Scanning.mp3");
  scan2 = loadSound("scanning 2.mp3");
  notefi = loadSound("Sensor.mp3");
  welcome = loadSound("Welcome.mp3");
  r = loadSound("r.wav");
  cm = loadSound("cm.mp3");
  bgm = loadSound("bgm.mp3");
}

function setup() {

  database=firebase.database();

  t = createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.hide();





  tmm = timmerer;
  tm = timmerer;

  inp = createInput('');
  inp.position(0, 0);
  inp.size(0.00005, 0.00005);
  inp.input(myInputEvent);
  background(255);

  t.mouseClicked(galarry);

  spech.setVoice('Microsoft David - English (United States)');


  spech.setRate(0.9);




  SpeechRec.onResult = showResult;

  keys=database.ref('key');
  keys.on("value",readHeight, showError);

}
function myInputEvent() {
 pas = this.value();


}
function galarry() {
  if (mmt === 2 && pas === "147896325") {
    if (tm === timmerer && pas === "147896325") {
      scan1.play();

      tmm = timmer;
      tm = timmer;
      if (mer === true) {


        r.play();
        scan2.play();
        scan1.play();

        spech.speak("importing files check. ablities and comands check. data from API check. voice reconization and spech output check. we are online and ready to go");
        mer = false;

        bgm.play();
        bgm.loop();
        bgm.setVolume(0.04);


        spech.listVoices();

      }
      SpeechRec.start();



    } else if (tm === timmer) {
      tmm = timmerer;
      tm = timmerer;

    }
  } else {
    spech.speak("you are not allow to access me");
    wa = wa + 1;
  }

}

function draw() {

  if(key === true){
    pas = "147896325";
  }else if(key === false){
    pas = "";
  }



  image(tmm, 0, 0, windowWidth, windowHeight);
  if (mmt === 2) {
    STD();
  }
  if (wa > 2) {

    Cpt();
  }
  if (los === 1) {
    slo = slo + 1;
  }



}

function readHeight(data){
  key = data.val();

}
function showError(){
  console.log("Error in writing to the database");
}


function showResult() {
  img = SpeechRec.resultString;
  img = img.toLowerCase();
  console.log(SpeechRec.resultString);
  if (mmt === 2) {
    if (img.includes('youtube') && img.includes('search')) {
      notefi.play();
      img = img.replace('youtube', '');
      img = img.replace('search', '');
      img = img.replace('on', '');
      spech.speak('ok Sir I am searching' + img + 'on youtube');
      window.open("https://www.youtube.com/results?search_query=" + img);
    } else if (img.includes('youtube') && img.includes('open')) {
      notefi.play();
      spech.speak('ok Sir opening youtube');
      window.open("https://www.youtube.com/");
    } else if (img.includes('whitehat') || img.includes('whiteHat') || img.includes('white hat') || img.includes('white Hat') && img.includes('open')) {
      spech.speak('ok Sir opening white hat junior dashboard');
      notefi.play();
      window.open("https://code.whitehatjr.com/s/dashboard");
    } else if (img.includes('whatsapp') && img.includes('open')) {
      notefi.play();
      spech.speak('ok Sir opening whatsapp');
      window.open("https://web.whatsapp.com/");
    } else if (img.includes('mail') && img.includes('open')) {
      notefi.play();
      spech.speak('ok Sir opening mail');
      window.open("https://mail.google.com/");
    } else if (img.includes('map') && img.includes('open')) {
      notefi.play();
      spech.speak('ok Sir opening map');
      window.open("https://www.google.co.in/maps");
    } else if (img.includes('map') && img.includes('search')) {
      notefi.play();
      img = img.replace('youtube', '');
      img = img.replace('search', '');
      img = img.replace('on', '');
      spech.speak('ok Sir I am searching' + img + 'on map');
      window.open("https://www.google.co.in/maps/search/" + img);
    } else if (img.includes('play store') && img.includes('open')) {
      notefi.play();
      spech.speak('ok Sir opening play store');
      window.open("https://play.google.com/");
    } else if (img.includes('set timer')) {
      notefi.play();

    } else if (img.includes('mel')) {
      spech.speak('ok Sir opening mail');
      window.open("https://mail.google.com/");

    } else if (img.includes('thank you')) {
      notefi.play();
      spech.speak('its my pleasure');
    } else if (img.includes('quit') || img.includes('shut down') || img.includes('shutdown')) {
      notefi.play();
      window.close();
    } else if (img.includes('google') && img.includes('search')) {
      notefi.play();
      img = img.replace('google', '');
      img = img.replace('search', '');
      img = img.replace('on', '');
      spech.speak('ok sir I am searching' + img + 'on google');
      window.open("https://www.google.com/search?q=" + img);


    } else if (img.includes('show') && img.includes('news')) {
      notefi.play();

      window.open("https://timesofindia.indiatimes.com/news");
      spech.speak('ok sir I am showing news ');



    } else if (img.includes('news') && img.includes('whole' || 'world' || 'sole' || 'hold' || 'cool' || 'call' || 'full')) {
      notefi.play();
      wholnews();



    } else if (img.includes('guests') || img.includes('guest')) {
      welcome.play();



    } else if (img.includes('information') && img.includes('get')) {
      notefi.play();
      img = img.replace('information', '');
      img = img.replace('get', '');
      img = img.replace('from', '');
      img = img.replace('all', '');
      img = img.replace('on', '');
      img = img.replace('everything', '');
      img = img.replace('about', '');
      spech.speak('ok sir I am searching' + img + 'on google youtube maps and wikipeda');
      window.open("https://www.google.com/search?q=" + img);
      window.open("https://en.wikipedia.org/wiki/" + img);
      window.open("https://www.google.co.in/maps/search/" + img);
      window.open("https://www.youtube.com/results?search_query=" + img);
    } else if (img.includes('wikipedia') && img.includes('search')) {
      notefi.play();
      img = img.replace('wikipedia', '');
      img = img.replace('search', '');
      img = img.replace('on', '');
      spech.speak('ok sir I am searching' + img + 'on Wikipedia');
      window.open("https://en.wikipedia.org/wiki/" + img);


    } else if (img.includes('news')) {
      notefi.play();
      spech.speak('ok Sir random news is');
      getnews();
    } else if (img.includes('date') && img.includes('time')) {
      notefi.play();

      let y = year();
      let m = month();
      let d = day();
      let fft = "Aae";

      switch (m) {
        case 1: fft = "january";

          break;
        case 1: fft = "january";

          break;
        case 2: fft = "febuary";

          break;
        case 3: fft = "march";

          break;
        case 4: fft = "april";

          break;
        case 5: fft = "may";

          break;
        case 6: fft = "june";

          break;
          break;
        case 7: fft = "july";

          break;
        case 8: fft = "august";

          break;
        case 9: fft = "september";

          break;
        case 10: fft = "october";

          break;
        case 11: fft = "november";

          break;
        case 12: fft = "december";

          break;
        default:
          break;
      }
      let h = hour();
      let mi = minute();
      let s = second();
      spech.speak("sir todays date is," + d + "," + fft + "," + y + ",and time is" + h + "Hours" + mi + "Minutes" + s + "seconds");

    } else if (img.includes('time')) {
      notefi.play();
      let h = hour();
      let m = minute();
      let s = second();
      spech.speak('Sir Time Is' + h + 'Hours' + m + 'Minutes' + s + 'seconds');

    } else if (img.includes('date')) {
      notefi.play();
      let y = year();
      let m = month();
      let d = day();

      let fft = "Aae";

      switch (m) {
        case 1: fft = "january";

          break;
        case 1: fft = "january";

          break;
        case 2: fft = "febuary";

          break;
        case 3: fft = "march";

          break;
        case 4: fft = "april";

          break;
        case 5: fft = "may";

          break;
        case 6: fft = "june";

          break;
          break;
        case 7: fft = "july";

          break;
        case 8: fft = "august";

          break;
        case 9: fft = "september";

          break;
        case 10: fft = "october";

          break;
        case 11: fft = "november";

          break;
        case 12: fft = "december";

          break;
        default:
          break;
      }
      spech.speak('sir todays date is,' + d + "," + fft + "," + y);

    } else if (img.includes('wikipedia')) {
      notefi.play();
      spech.speak('ok Sir opening wikipedia');
      window.open("https://en.wikipedia.org/wiki/");

    } else if (img.includes('change your voice')) {

      notefi.play();
      if (voM === 1) {
        spech.setVoice('Microsoft Zira - English (United States)');
        spech.speak('ok Sir');
        voM = 2;
      } else if (voM === 2) {
        spech.setVoice('Microsoft David - English (United States)');
        spech.speak('ok Sir');
        voM = 1;

      }

      // else if (img.includes('maths extra')) {
      // notefi.play();
      // spech.speak('ok Sir opening maths tuition class');
      // window.open("https://us04web.zoom.us/j/6848938144?pwd=RWtRc1YwUTdnWGtPWEJ4cnBXNVh3QT09");

      //else if (img.includes('science extra')) {
      // notefi.play();
      // spech.speak('ok Sir opening science tuition class');
      //window.open("https://us05web.zoom.us/j/5812105272?pwd=QU1aY3RwcmNKazA3ckJGekR3dWo5Zz09");

    } else if (img.includes('computer') && img.includes('class')) {
      notefi.play();
      spech.speak('ok Sir opening google class room computer');
      window.open("https://classroom.google.com/u/0/c/MzEwMTEyOTY2MTky");
    } else if (img.includes('english') && img.includes('class')) {
      notefi.play();
      spech.speak('ok Sir opening google class room english');
      window.open("https://classroom.google.com/u/0/c/MzExNzcxNzkyMTcx");
    } else if (img.includes('science') && img.includes('class')) {
      notefi.play();
      spech.speak('ok Sir opening google class room science');
      window.open("https://classroom.google.com/u/0/c/MzExOTM2NDczMjkz");
    } else if (img.includes('hindi') && img.includes('class')) {
      notefi.play();
      spech.speak('ok Sir opening google class room hindi');
      window.open("https://classroom.google.com/u/0/c/MTE2MTk3MTE3Nzg4");
    } else if (img.includes('sst class') || img.includes('sse class') || img.includes('s s g class') || img.includes('ssg class') || img.includes('s s j class') || img.includes('ssj class') || img.includes('sfj class') || img.includes('sse class')) {
      spech.speak('ok Sir opening google class room SST');
      notefi.play();
      window.open("https://classroom.google.com/u/0/c/MzExNjAzODkzNTE1");
    } else if (img.includes('math' || 'mathematics') && img.includes('class')) {
      notefi.play();
      spech.speak('ok Sir opening google class room maths');
      window.open("https://classroom.google.com/u/0/c/MTE2MDg2NzcwOTY4");
    } else if (img.includes('w e') && img.includes('class')) {
      notefi.play();
      spech.speak('ok Sir opening google class room W E');
      window.open("https://classroom.google.com/u/0/c/MzEyNTE3NjI4ODY4");
    } else if (img.includes('we') && img.includes('class')) {
      notefi.play();
      spech.speak('ok Sir opening google class room W E');
      window.open("https://classroom.google.com/u/0/c/MzEyNTE3NjI4ODY4");
    } else if (img.includes('library') && img.includes('class')) {
      notefi.play();
      spech.speak('ok Sir opening google class room library');
      window.open("https://classroom.google.com/u/0/c/MTE2MjM1ODU0MzU0");
    } else if (img.includes('computer') && img.includes('meeting')) {
      spech.speak('ok Sir opening google meeting computer');
      window.open("https://meet.google.com/lookup/hx2k4f2x64?authuser=0&hs=179");
    } else if (img.includes('english') && img.includes('meeting')) {
      notefi.play();
      spech.speak('ok Sir opening google meeting english');
      window.open("https://meet.google.com/lookup/g2t7unim7d?authuser=0&hs=179");
    } else if (img.includes('science') && img.includes('meeting')) {
      notefi.play();
      spech.speak('ok Sir opening google meeting science');
      window.open("https://meet.google.com/lookup/gazx37h3qh?authuser=0&hs=179");
    } else if (img.includes('hindi') && img.includes('meeting')) {
      notefi.play();
      spech.speak('ok Sir opening google meeting hindi');
      window.open("https://meet.google.com/lookup/heipevbnmk?authuser=0&hs=179");
    } else if (img.includes('sst meeting') || img.includes('sse meeting') || img.includes('s s g meeting') || img.includes('ssg meeting') || img.includes('s s j meeting') || img.includes('ssj meeting') || img.includes('sfj meeting') || img.includes('sse meeting')) {
      spech.speak('ok Sir opening google meeting SST');
      notefi.play();
      window.open("https://meet.google.com/lookup/hfvmc4bos4?authuser=0&hs=179");
    } else if (img.includes('math') && img.includes('meeting')) {
      notefi.play();
      spech.speak('ok Sir opening google meeting maths');
      window.open("https://meet.google.com/jgh-tsut-dqz?authuser=012e");
    } else if (img.includes('form')) {
      notefi.play();
      spech.speak('ok Sir opening google form');
      window.open("https://docs.google.com/forms/u/0/?tgif=d");
    } else if (img.includes('w e') && img.includes('meeting')) {
      notefi.play();
      spech.speak('ok Sir opening google meeting W E');
      window.open("https://meet.google.com/lookup/dgsvatp7t6?authuser=0&hs=179");
    } else if (img.includes('we') && img.includes('meeting')) {
      notefi.play();
      spech.speak('ok Sir opening google meeting W E');
      window.open("https://meet.google.com/lookup/dgsvatp7t6?authuser=0&hs=179");
    } else if (img.includes('library') && img.includes('meeting')) {
      notefi.play();
      spech.speak('ok Sir opening google meeting library');
      window.open("https://meet.google.com/lookup/b2ybaszwq5?authuser=0&hs=179");
    } else if (img.includes('google  meet')) {
      notefi.play();
      spech.speak('ok Sir opening google meet ');
      window.open("https://meet.google.com/");
    } else if (img.includes('class')) {
      notefi.play();
      spech.speak('ok Sir opening google class room');
      window.open("https://classroom.google.com/");
    } else if (img.includes('google meet')) {
      notefi.play();
      spech.speak('ok Sir opening google meet');
      window.open('https://meet.google.com/');
    } else if (img.includes('google')) {
      notefi.play();
      spech.speak('ok Sir opening google');
      window.open("https://www.google.com/");
    } else if (img.includes('code editor')) {
      notefi.play();
      spech.speak('ok Sir opening code editor');
      window.open("https://editor.p5js.org/");
    } else if (img.includes('code reference')) {
      notefi.play();
      spech.speak('ok Sir opening code reference');
      window.open("https://p5js.org/reference//");
    } else if (img.includes('my code')) {
      notefi.play();
      spech.speak('ok Sir opening your code');
      window.open("https://editor.p5js.org/s.9b15444aniketawasthi/sketches");
    } else if (img.includes('white board')) {
      notefi.play();
      spech.speak('ok Sir opening white board');
      window.open("https://webwhiteboard.com/");
    } else if (img.includes('models maker')) {
      notefi.play();
      spech.speak('ok Sir opening model making software');
      window.open("https://www.tinkercad.com/dashboard");
    } else if (img.includes('what is today')) {
      notefi.play();

      dayyd();
    } else if (img.includes('send') && img.includes('mail') && img.includes('mum')) {
      img = img.replace('send ', '');
      img = img.replace('mail to', '');
      img = img.replace(' mum', '');

      img = img.replace('e ', '');


      notefi.play();

      Email.send({
        SecureToken: "8f3f3aff-06d2-493b-aa98-1d135b73a48b",
        To: "preeti@afsjammu.co.in",
        From: "s.9b15444aniketawasthi@kv2jammucantt.in",
        Subject: "By Aniket Awasthi",
        Body: img
      }).then(
        message => spech.speak('Ok sir mail sent')
      );
    } else if (img.includes('send') && img.includes('mail') && img.includes('papa')) {
      img = img.replace('send ', '');
      img = img.replace('mail to', '');
      img = img.replace(' papa', '');
      img = img.replace('e ', '');



      notefi.play();

      Email.send({
        SecureToken: "8f3f3aff-06d2-493b-aa98-1d135b73a48b",
        To: "rka2293@gmail.com",
        From: "s.9b15444aniketawasthi@kv2jammucantt.in",
        Subject: "By Aniket Awasthi",
        Body: img
      }).then(
        message => spech.speak('Ok sir mail sent')
      );
    } else if (img.includes('send') && img.includes('mail') && img.includes('bro')) {
      img = img.replace('send ', '');
      img = img.replace('mail to', '');
      img = img.replace(' brother', '');
      img = img.replace(' bro', '');
      img = img.replace('e ', '');



      notefi.play();

      Email.send({
        SecureToken: "8f3f3aff-06d2-493b-aa98-1d135b73a48b",
        To: "mishrakshat113@gmail.com",
        From: "s.9b15444aniketawasthi@kv2jammucantt.in",
        Subject: "By Aniket Awasthi",
        Body: img
      }).then(
        message => spech.speak('Ok sir mail sent')
      );
    } else if (img.includes('send') && img.includes('mail') && img.includes('me')) {
      img = img.replace('send ', '');
      img = img.replace('mail to', '');
      img = img.replace(' me', '');
      img = img.replace('e ', '');




      notefi.play();

      Email.send({
        SecureToken: "8f3f3aff-06d2-493b-aa98-1d135b73a48b",
        To: "s.9b15444aniketawasthi@kv2jammucantt.in",
        From: "s.9b15444aniketawasthi@kv2jammucantt.in",
        Subject: "By Aniket Awasthi",
        Body: img
      }).then(
        message => spech.speak('Ok sir mail sent')
      );
    } else if (img.includes('new tab')) {
      notefi.play();
      spech.speak('ok Sir opening new tab');
      window.open('');
    } else if (img.includes('lights off') && hh === true) {
      notefi.play();
      tm = "black";

      hh = false;

    } else if (img.includes('lights on') && hh === false) {
      notefi.play();
      tm = timmer, 0, 0, windowWidth, windowHeight;

      hh = true;

    } else if (img.includes('are you there')) {
      notefi.play();
      spech.speak('at your service sir');

    } else if (img.includes('full weather report')) {
      notefi.play();
      spech.speak('ok sir opening full weather report');
      window.open('https://weather.com/en-IN/weather/today/l/32.68,74.85?par=google');

    } else if (img.includes('weather')) {
      notefi.play();
      getweather();

    } else if (img.includes('what are') || img.includes('what is') || img.includes('meaning of')) {
      notefi.play();
      img = img.replace('what is ', '');
      img = img.replace('the', '');
      img = img.replace('meaning', '');
      img = img.replace('of', '');
      img = img.replace('are', '');
      getmeaning();

    } else if (img.includes('here is my') && img.includes('father')) {
      notefi.play();
      spech.speak('hello mister Rajiv Awwassthi nice too meet you');

    } else if (img.includes('here is my') && img.includes('mother')) {
      notefi.play();
      spech.speak('hello miss Preeti Awwassthi nice too meet you');

    } else if (img.includes('meet you')) {
      notefi.play();
      spech.speak('hello Its pleasure meeting you');

    } else if (img.includes('sony')) {
      notefi.play();
      spech.speak('ok sir opening sony liv');
      window.open('https://www.sonyliv.com/');

    } else if (img.includes('rama')) {
      notefi.play();
      spech.speak('ok sir playing tenali rama on sony liv');
      window.open('https://www.sonyliv.com/shows/tenali-rama-1700000003/farewell-to-mullah-naseeruddin-1000028961?watch=true');

      //} else if (img.includes('how are you')) {
      //   notefi.play();
      //spech.speak('I am Fine how about you');


    } else if (img.includes('hello')) {
      notefi.play();
      spech.speak('Oh hello Sir');

    } else if (img.includes('play') && img.includes('music')) {
      notefi.play();
      spech.speak('Ok sir playing music');
      s1.play();
      es1.loop();
      bgm.pause();
    } else if (img.includes('pause music')) {
      notefi.play();
      spech.speak('Ok sir music paused');
      s1.pause();
      bgm.play();

    } else if (img.includes('maths') && img.includes('chapter')) {
      notefi.play();
      img = img.replace('chapter', '');
      img = img.replace('maths', '');
      img = img.replace('open', '');
      img = img.replace('pdf', '');
      img = img.replace(' ', '');
      img = img.replace('  ', '');
      img = img.replace('   ', '');
      img = img.replace('    ', '');
      spech.speak('ok sir I am opening maths chapter' + img + "PDF");
      window.open("https://ncert.nic.in/textbook.php?jemh1=" + img + "-15");


    } else if (img.includes('science') && img.includes('chapter')) {
      notefi.play();
      img = img.replace('chapter', '');
      img = img.replace('science', '');
      img = img.replace('open', '');
      img = img.replace('pdf', '');
      img = img.replace(' ', '');
      img = img.replace('  ', '');
      img = img.replace('   ', '');
      img = img.replace('    ', '');
      spech.speak('ok sir I am opening science chapter' + img + "PDF");
      window.open("https://ncert.nic.in/textbook.php?jesc1=" + img + "-16");


    } else if (img.includes('hindi first book') && img.includes('chapter')) {
      notefi.play();
      img = img.replace('chapter', '');
      img = img.replace('hindi', '');
      img = img.replace('first book', '');
      img = img.replace('open', '');
      img = img.replace('pdf', '');
      img = img.replace(' ', '');
      img = img.replace('  ', '');
      img = img.replace('   ', '');
      img = img.replace('    ', '');
      spech.speak('ok sir I am opening hindi first book chapter' + img + "PDF");
      window.open("https://ncert.nic.in/textbook.php?jhks1=" + img + "-17");


    } else if (img.includes('hindi second book') && img.includes('chapter')) {
      notefi.play();
      img = img.replace('chapter', '');
      img = img.replace('hindi', '');
      img = img.replace('second book', '');
      img = img.replace('open', '');
      img = img.replace('pdf', '');
      img = img.replace(' ', '');
      img = img.replace('  ', '');
      img = img.replace('   ', '');
      img = img.replace('    ', '');
      spech.speak('ok sir I am opening hind second book chapter' + img + "PDF");
      window.open("https://ncert.nic.in/textbook.php?jhkr1=" + img + "-5");


    } else if (img.includes('english first book') && img.includes('chapter')) {
      notefi.play();
      img = img.replace('chapter', '');
      img = img.replace('first', '');
      img = img.replace('first book', '');
      img = img.replace('open', '');
      img = img.replace('pdf', '');
      img = img.replace(' ', '');
      img = img.replace('  ', '');
      img = img.replace('   ', '');
      img = img.replace('    ', '');
      spech.speak('ok sir I am opening english first book chapter' + img + "PDF");
      window.open("https://ncert.nic.in/textbook.php?jff1=" + img + "-11");


    } else if (img.includes('english second book') && img.includes('chapter')) {
      notefi.play();
      img = img.replace('chapter', '');
      img = img.replace('english', '');
      img = img.replace('second book', '');
      img = img.replace('open', '');
      img = img.replace('pdf', '');
      img = img.replace(' ', '');
      img = img.replace('  ', '');
      img = img.replace('   ', '');
      img = img.replace('    ', '');
      spech.speak('ok sir I am opening English second book chapter' + img + "PDF");
      window.open("https://ncert.nic.in/textbook.php?jfp1=" + img + "-10");


    } else if (img.includes('economic') && img.includes('chapter')) {
      notefi.play();
      img = img.replace('chapter', '');
      img = img.replace('maths', '');
      img = img.replace('open', '');
      img = img.replace('pdf', '');
      img = img.replace(' ', '');
      img = img.replace('  ', '');
      img = img.replace('   ', '');
      img = img.replace('    ', '');
      spech.speak('ok sir I am opening economic chapter' + img + "PDF");
      window.open("https://ncert.nic.in/textbook.php?jss2=" + img + "-5");


    } else if (img.includes('civics') && img.includes('chapter')) {
      notefi.play();
      img = img.replace('chapter', '');
      img = img.replace('civics', '');
      img = img.replace('open', '');
      img = img.replace('pdf', '');
      img = img.replace(' ', '');
      img = img.replace('  ', '');
      img = img.replace('   ', '');
      img = img.replace('    ', '');
      spech.speak('ok sir I am opening civics chapter' + img + "PDF");
      window.open("https://ncert.nic.in/textbook.php?jss4=" + img + "-8");


    } else if (img.includes('geography') && img.includes('chapter')) {
      notefi.play();
      img = img.replace('chapter', '');
      img = img.replace('geography', '');
      img = img.replace('open', '');
      img = img.replace('pdf', '');
      img = img.replace(' ', '');
      img = img.replace('  ', '');
      img = img.replace('   ', '');
      img = img.replace('    ', '');
      spech.speak('ok sir I am opening geography chapter' + img + "PDF");
      window.open("https://ncert.nic.in/textbook.php?jss1=" + img + "-7");


    } else if (img.includes('history') && img.includes('chapter')) {
      notefi.play();
      img = img.replace('chapter', '');
      img = img.replace('history', '');
      img = img.replace('open', '');
      img = img.replace('pdf', '');
      img = img.replace(' ', '');
      img = img.replace('  ', '');
      img = img.replace('   ', '');
      img = img.replace('    ', '');
      spech.speak('ok sir I am opening history chapter' + img + "PDF");
      window.open("https://ncert.nic.in/textbook.php?jss3=" + img + "-5");


    } else if (img.includes('who are you')) {
      notefi.play();
      spech.speak('I am most advance A I system Jarvis developed by Annikeet Awwassthi');

    } else if (img.includes('open game')) {
      notefi.play();
      window.open("chrome-extension://bdgdkpbjcedffdjnndlkbiklnekjjcgb/temple-run-game.html");
      spech.speak('ok sir opening temple run game');

    } if (img.includes('nice') || img.includes('good') || img.includes('well done') || img.includes('whoo')) {
      notefi.play();
      spech.speak('Thank you sir');

    } if (img.includes('not for you')) {
      notefi.play();
      spech.speak('Sorry sir I think you are commenting me');

    } if (img.includes('sorry')) {
      notefi.play();
      spech.speak('Its ok sir but I cant be sad for anything as I am a AI');

    } if (img.includes('thank') && img.includes('him' || 'her')) {
      notefi.play();
      spech.speak('ok sir     , thank you');

    } if (img.includes('meet ')) {
      img = img.replace('hello', '');
      img = img.replace('hello', '');
      img = img.replace('my', '');
      img = img.replace('friend', '');
      img = img.replace('brother', '');
      img = img.replace('sister', '');
      img = img.replace('father', '');
      img = img.replace('meet', '');
      img = img.replace('mother', '');
      img = img.replace('    ', '')
      spech.speak('hello ,' + img + ',how are you');

    } if (img.includes('how are you') && img.includes('fine' || 'good')) {
      notefi.play();
      spech.speak('I am fine');

    } else if (img.includes('how are you')) {
      notefi.play();
      spech.speak('I am fine ,how are you');

    } else if (img.includes('open camera') && ucm === 2) {
      notefi.play();
      spech.speak('ok sir opening camera');
      tmm = capture;
      ucm = 1;


    } else if (img.includes('close camera') && ucm === 1) {
      notefi.play();
      spech.speak('ok sir closing camera');
      tmm = timmer;
      ucm = 2;

    } else if (img.includes('snap') && ucm === 1) {
      saveCanvas(t, "Picture", "png");
      cm.play();



    } else if (img.includes('bye') || img.includes('buy')) {
      notefi.play();
      spech.speak('buy wish to meet again');

    }
  }



  if (img.includes('unlock 2006') || img.includes('deactivate lockdown 2006') || img.includes('deactivate protocol 2911') || img.includes('deactivate lock down 2006') || img.includes('deactivate emergency protocol 2911') || img.includes('deactivate protocol 2911') && mmt === 1 && ghr === 1) {

    tmm = timmer;
    mmt = 2;
    ghr = 2;
    bgm.play();
    uk.play();
  } else if (img.includes('lockdown') || img.includes('lock down') || img.includes('activate emergency protocol 2 9 1 1') || img.includes('activate emergency protocol 2911') || img.includes('activate emergency protocol to 911') && mmt === 2 && ghr === 2) {

    tmm = lloc;

    lock.play();
    ghr = 1;
    mmt = 1;
    bgm.pause();
  }

  if ((img.includes('a') || img.includes('e') || img.includes('i') || img.includes('o') || img.includes('u') || img.includes('m') || img.includes('i') || img.includes(' ')) && mmt === 1 && ghr === 1) {

    lock.play();



  }



}





function getnews() {

  let url = 'https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=2cfbd288d656438fb8fb04e3431f679b';

  loadJSON(url, gotDatat);

}
function gotDatat(data) {

  console.log(data);
  let ne = Math.round(random(1, 10));
  console.log(ne);

  spech.speak("title is , ." + data.articles[ne].title + " ,,., description is , ." + data.articles[ne].description + " ,, .  and the content is , . " + data.articles[ne].content);


}
function wholnews() {

  let url = 'https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=2cfbd288d656438fb8fb04e3431f679b';

  loadJSON(url, gotttyytyDatat);

}
function gotttyytyDatat(data) {

  console.log(data);



  spech.speak("ok sir top five news headlines are . , 1 ., . " + data.articles[0].title + ",, 2 ., . " + data.articles[1].title + " ,,3 ., . " + data.articles[2].title + ",, 4 ., . " + data.articles[3].title + ", , . and.,, 5 ., . " + data.articles[4].title);


}


function getmeaning() {

  let url = 'https://api.dictionaryapi.dev/api/v2/entries/en_US/';

  let ur = img;

  loadJSON(url + ur, gotData);

}
function gotData(data) {

  console.log(data[0].meanings[0].definitions[0].definition);


  spech.speak("meaning of" + img + "is" + data[0].meanings[0].definitions[0].definition);



}
function getweather() {

  let url = 'http://api.weatherapi.com/v1/current.json?key= fb4dd9f4bb274d3db07145704210307&q=indore';
  loadJSON(url, gotdatat);

}
function gotdatat(data) {

  notefi.play();
  spech.speak("Sir todays tempture is " + data.current.temp_c + "degrees celsius ,but feels like " + data.current.feelslike_c + "degrees,the humidity in air is" + data.current.humidity + " percent ,wind speed is" + data.current.wind_kph + "kilometers per hours, and atmosphere is" + data.current.condition.text);
}

function dayyd() {

  let m = month();
  let d = day();
  let mmomt = 0;
  if (m === 1 && d === 26) {
    spech.speak("Sir Today is Republic day");
  } else if (m === 3 && d === 24) {
    spech.speak("Sir Today is Holi");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is good friday");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Ram Narvami");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Mahavir Jayariti");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Buddha Purnima");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Idul Fitr");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Independence Day");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Janmashtami");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Id-al-Zuha .Bakrid");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Mahatma Gandhi's Birthday");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Dussehra");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Muharram");
  } else if (m === 10 && d === 4) {
    spech.speak("Sir Today is Diwali");
  } else if (m === 11 && d === 19) {
    spech.speak("Sir Today is Guru Nanak's Birthday");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Milad-Un-Nabi");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Christmas Day");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is New Year's Day");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Makar Sankranti");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Pongal");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Guru Govind Singh's Birthday");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Basant Panchami and Sri Panchami");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Shivaji Jayanti");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Guru Ravidas's Birthday");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Swami Dayananda Saraswati Jayanti");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Maha Shivaratri ");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Holika Dahan and Dolyatra");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Easter Sunday");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Chaitra Sukladi . Ugadi . Gudi Pavada and Cheti Chand ");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Vaisakhi and Vishu");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Masadi . Vaisakhadi and Bahag Bihu (Assam)");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is  Hazarat Ali's Birthday");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Guni Rabindranath's Birth day");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Jarmal-Ul-Vida");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Rath Yatra");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Parsi New Year's Day or Nauj");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Raksha Bundhan");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Vinayaka Chaturthi or Ganesh Chaturthi");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Onam");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Dussehra Maha Saptami");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Dussehra Maha Ashtami");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Dussehra Maha Nuvmi");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Maharli Valmiki's Birth day");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Karaka Chaturthi");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Deepvall or Naraka Chatin");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Govardhan Puja");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Bhai Duj");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Surya Sashthi");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Guru Teg Bahadur's Martydom Day");
  } else if (m === 1 && d === 26) {
    spech.speak("Sir Today is Christmas Eve");
  } else {
    if (m === 1) {
      mmomt = 0;
    } else if (m === 2) {
      mmomt = 3;
    } else if (m === 3) {
      mmomt = 3;
    } else if (m === 4) {
      mmomt = 6;
    } else if (m === 5) {
      mmomt = 1;
    } else if (m === 6) {
      mmomt = 4;
    } else if (m === 7) {
      mmomt = 6;
    } else if (m === 8) {
      mmomt = 2;
    } else if (m === 9) {
      mmomt = 5;
    } else if (m === 10) {
      mmomt = 0;
    } else if (m === 11) {
      mmomt = 3;
    } else if (m === 12) {
      mmomt = 5;
    }
    let vavlus = d + mmomt + 4;

    let dayaaya = vavlus % 7;
    let dasssa = "aa";
    switch (dayaaya) {
      case 1: dasssa = "Monday";
        break;
      case 2: dasssa = "Tuesday";
        break;
      case 3: dasssa = "Wednessday";
        break;
      case 4: dasssa = "Thusday";
        break;
      case 5: dasssa = "Friday";
        break;
      case 6: dasssa = "Saturday";
        break;
      case 0: dasssa = "Sunday";
        break;
    }
    spech.speak("Sir Today is " + dasssa);
  }
}

function STD() {
  let h = hour();
  let m = minute();
  let s = second();
  let mh = month();
  let d = day();
  let vavlus = d + mh + 4 % 7;
  if (vavlus !== 0) {
    if (h === 8 && m === 35 && s === 0) {
      window.open("https://web.whatsapp.com/");
      window.open("https://classroom.google.com/c/MTE2MDg2NzcwOTY4");
      window.open("https://meet.google.com/lookup/dr3u7fjww4?authuser=0&hs=179");
      spech.speak("Sir this is time for your maths class I am opening math class. meeting and whatsapp for messages");

    } else if (h === 9 && m === 35 && s === 0) {
      window.open("https://web.whatsapp.com/");
      window.open("https://classroom.google.com/c/MzExNzcxNzkyMTcx");
      window.open("https://meet.google.com/lookup/g2t7unim7d?authuser=0&hs=179");
      spech.speak("Sir this is time for your english class I am opening english class. meeting and whatsapp for messages");

    } else if (h === 10 && m === 35 && s === 0) {
      window.open("https://web.whatsapp.com/");
      window.open("https://classroom.google.com/c/MzExOTM2NDczMjkz");
      window.open("https://meet.google.com/lookup/gazx37h3qh?authuser=0&hs=179");
      spech.speak("Sir this is time for your science class I am opening science class. meeting and whatsapp for messages");

    } else if (h === 11 && m === 50 && s === 0) {
      window.open("https://web.whatsapp.com/");
      window.open("https://classroom.google.com/h");

      spech.speak("Sir this is time for your supplymentary class I am opening classroom and whatsapp for messages");

    } else if (h === 12 && m === 50 && s === 0) {
      window.open("https://web.whatsapp.com/");
      window.open("https://classroom.google.com/c/MzExNjAzODkzNTE1");
      window.open("https://meet.google.com/lookup/hfvmc4bos4?authuser=0&hs=179");
      spech.speak("Sir this is time for your SST class I am opening SST class. meeting and whatsapp for messages");

    } else if (h === 13 && m === 50 && s === 0) {
      window.open("https://web.whatsapp.com/");
      window.open("https://classroom.google.com/c/MTE2MTk3MTE3Nzg4");
      window.open("https://meet.google.com/lookup/heipevbnmk?authuser=0&hs=179");
      spech.speak("Sir this is time for your hindi class I am opening hindi class .meeting and whatsapp for messages");

    } else if (h === 11 && m === 30 && s === 0) {
      spech.speak("Sir this is time for your lunch break I recomend to take some meal to charge yourself for next classes ");

    }




  }

}
function Cpt() {
  let gdp = 1;
  tmm = capture;
  los = 1;

  if (tmm === capture) {

    if (slo === 3) {
      saveCanvas(t, "some unknown try to use jarvis", "png");
      cm.play();
    }

    if (slo > 6) {
      gdp = 2;
    }
  }
  if (gdp === 2) {
    tmm = timmerer;
    wa = 0;
    los = 0;
    gdp = 1;
    slo = 0;
  }
}