document.body.innerHTML = `
<h1> RSS Virtual keyboard </h1>
<textarea class = 'textarea' rows = 6 placeholder = 'press left alt + shift for change language'></textarea>
<div id = 'eng' class = 'keyboard'>
  <div class = 'line'>
    <div class = 'key dark' data = "Backquote">&#126;</div>
    <div class = 'key' data = "Digit1">1</div> 
    <div class = 'key' data = "Digit2">2</div> 
    <div class = 'key' data = "Digit3">3</div> 
    <div class = 'key' data = "Digit4">4</div> 
    <div class = 'key' data = "Digit5">5</div> 
    <div class = 'key' data = "Digit6">6</div> 
    <div class = 'key' data = "Digit7">7</div> 
    <div class = 'key' data = "Digit8">8</div> 
    <div class = 'key' data = "Digit9">9</div> 
    <div class = 'key' data = "Digit0">0</div> 
    <div class = 'key' data = "Minus">-</div> 
    <div class = 'key' data = "Equal">=</div> 
    <div class = 'key backspace dark' data = "Backspace">Backspace</div> 
    
  </div>
  <div class = 'line'>
    <div class = 'key tab dark' data = "Tab">Tab</div>
    <div class = 'key' data = "KeyQ">q</div> 
    <div class = 'key' data = "KeyW">w</div> 
    <div class = 'key' data = "KeyE">e</div> 
    <div class = 'key' data = "KeyR">r</div> 
    <div class = 'key' data = "KeyT">t</div> 
    <div class = 'key' data = "KeyY">y</div> 
    <div class = 'key' data = "KeyU">u</div> 
    <div class = 'key' data = "KeyI">i</div> 
    <div class = 'key' data = "KeyO">o</div> 
    <div class = 'key' data = "KeyP">p</div> 
    <div class = 'key' data = "BracketLeft">[</div> 
    <div class = 'key' data = "BracketRight">]</div> 
    <div class = 'key' data = "Backslash">&#92;</div> 
    <div class = 'key del dark' data = "46">Del</div>
  </div>
  <div class = 'line'>
    <div class = 'key capsLock dark' data = "CapsLock">Caps Lock</div>
    <div class = 'key' data = "KeyA">a</div> 
    <div class = 'key' data = "KeyS">s</div> 
    <div class = 'key' data = "KeyD">d</div> 
    <div class = 'key' data = "KeyF">f</div> 
    <div class = 'key' data = "KeyG">g</div> 
    <div class = 'key' data = "KeyH">h</div> 
    <div class = 'key' data = "KeyJ">j</div> 
    <div class = 'key' data = "KeyK">k</div> 
    <div class = 'key' data = "KeyL">l</div> 
    <div class = 'key' data = "Semicolon">;</div> 
    <div class = 'key' data = "Quote">'</div> 
    <div class = 'key enter dark' data = "Enter">Enter</div>
  </div>
  <div class = 'line'>
    <div class = 'key shift dark' data = "ShiftLeft">Shift</div> 
    <div class = 'key' data = "KeyZ">z</div> 
    <div class = 'key' data = "KeyX">x</div> 
    <div class = 'key' data = "KeyC">c</div> 
    <div class = 'key' data = "KeyV">v</div> 
    <div class = 'key' data = "KeyB">b</div> 
    <div class = 'key' data = "KeyN">n</div> 
    <div class = 'key' data = "KeyM">m</div> 
    <div class = 'key' data = "Comma">,</div> 
    <div class = 'key' data = "Period">.</div> 
    <div class = 'key' data = "Slash">/</div> 
    <div class = 'key dark' data = "ArrowUp">&#129093;</div> 
    <div class = 'key dark' data = "ShiftRight">Shift</div> 
  </div>
  <div class = 'line'>
  <div class = 'key leftCtrl dark' data = "ControlLeft">Ctrl</div>
  <div class = 'key dark'>Win</div> 
  <div class = 'key leftAlt dark' data = "AltLeft">Alt</div> 
  <div class = 'key space' data = "Space">Space</div> 
  <div class = 'key rightAlt dark'data = "AltRight">Alt</div> 
  <div class = 'key rightCtrl dark' data = "ControlRight">Ctrl</div> 
  <div class = 'key dark' data = "ArrowLeft">&#129092;</div>
  <div class = 'key dark' data = "ArrowDown">&#129095;</div> 
  <div class = 'key dark' data = "ArrowRight">&#129094;</div>
</div>
</div>
<div id = 'ru' class = 'keyboard invisible'>
  <div class = 'line'>
    <div class = 'key dark' data = "Backquote">??</div>
    <div class = 'key' data = "Digit1">1</div> 
    <div class = 'key' data = "Digit2">2</div> 
    <div class = 'key' data = "Digit3">3</div> 
    <div class = 'key' data = "Digit4">4</div> 
    <div class = 'key' data = "Digit5">5</div> 
    <div class = 'key' data = "Digit6">6</div> 
    <div class = 'key' data = "Digit7">7</div> 
    <div class = 'key' data = "Digit8">8</div> 
    <div class = 'key' data = "Digit9">9</div> 
    <div class = 'key' data = "Digit0">0</div> 
    <div class = 'key' data = "Minus">-</div> 
    <div class = 'key' data = "Equal">=</div> 
    <div class = 'key backspace dark' data = "Backspace">Backspace</div> 
    
  </div>
  <div class = 'line'>
    <div class = 'key tab dark' data = "Tab">Tab</div>
    <div class = 'key' data = "KeyQ">??</div> 
    <div class = 'key' data = "KeyW">??</div> 
    <div class = 'key' data = "KeyE">??</div> 
    <div class = 'key' data = "KeyR">??</div> 
    <div class = 'key' data = "KeyT">??</div> 
    <div class = 'key' data = "KeyY">??</div> 
    <div class = 'key' data = "KeyU">??</div> 
    <div class = 'key' data = "KeyI">??</div> 
    <div class = 'key' data = "KeyO">??</div> 
    <div class = 'key' data = "KeyP">??</div> 
    <div class = 'key' data = "BracketLeft">??</div> 
    <div class = 'key' data = "BracketRight">??</div> 
    <div class = 'key' data = "Backslash">&#92;</div> 
    <div class = 'key del dark' data = "46">Del</div>
  </div>
  <div class = 'line'>
    <div class = 'key capsLock dark' data = "CapsLock">Caps Lock</div>
    <div class = 'key' data = "KeyA">??</div> 
    <div class = 'key' data = "KeyS">??</div> 
    <div class = 'key' data = "KeyD">??</div> 
    <div class = 'key' data = "KeyF">??</div> 
    <div class = 'key' data = "KeyG">??</div> 
    <div class = 'key' data = "KeyH">??</div> 
    <div class = 'key' data = "KeyJ">??</div> 
    <div class = 'key' data = "KeyK">??</div> 
    <div class = 'key' data = "KeyL">??</div> 
    <div class = 'key' data = "Semicolon">??</div> 
    <div class = 'key' data = "Quote">??</div> 
    <div class = 'key enter dark' data = "Enter">Enter</div>
  </div>
  <div class = 'line'>
    <div class = 'key shift dark' data = "ShiftLeft">Shift</div> 
    <div class = 'key' data = "KeyZ">??</div> 
    <div class = 'key' data = "KeyX">??</div> 
    <div class = 'key' data = "KeyC">??</div> 
    <div class = 'key' data = "KeyV">??</div> 
    <div class = 'key' data = "KeyB">??</div> 
    <div class = 'key' data = "KeyN">??</div> 
    <div class = 'key' data = "KeyM">??</div> 
    <div class = 'key' data = "Comma">??</div> 
    <div class = 'key' data = "Period">??</div> 
    <div class = 'key' data = "Slash">.</div> 
    <div class = 'key dark' data = "ArrowUp">&#129093;</div> 
    <div class = 'key dark' data = "ShiftRight">Shift</div> 
  </div>
  <div class = 'line'>
  <div class = 'key leftCtrl dark' data = "ControlLeft">Ctrl</div>
  <div class = 'key dark'>Win</div> 
  <div class = 'key leftAlt dark' data = "AltLeft">Alt</div> 
  <div class = 'key space' data = "Space">Space</div> 
  <div class = 'key rightAlt dark'data = "AltRight">Alt</div> 
  <div class = 'key rightCtrl dark' data = "ControlRight">Ctrl</div> 
  <div class = 'key dark' data = "ArrowLeft">&#129092;</div>
  <div class = 'key dark' data = "ArrowDown">&#129095;</div> 
  <div class = 'key dark' data = "ArrowRight">&#129094;</div> 
</div>
</div>
`;

document.onkeydown = function (event) {
  document.querySelectorAll('.key').forEach((elem) => elem.classList.remove('active'));
  document.querySelector(`.key[data = ${event.code}]`).classList.add('active');
};

document.querySelectorAll('.key').forEach((element) => {
  element.addEventListener('click', function () {
    document.querySelectorAll('.key').forEach((elem) => elem.classList.remove('active'));
    const code = this.getAttribute('data');
    this.classList.add('active');
  });
});

let eng = document.getElementById('eng')
let ru = document.getElementById('ru')

document.addEventListener('keydown', (event) => {
  console.log(event.code);

  if (event.altKey && event.shiftKey) {
    console.log('here');
    if (ru.classList.contains('invisible')) {
      eng.classList.add('invisible');
      ru.classList.remove('invisible');
    } else {
      eng.classList.remove('invisible');
      ru.classList.add('invisible');
    }
  }
});

// let textarea = document.querySelector('.textarea')
// textarea.innerHTML =
