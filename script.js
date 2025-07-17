const input = document.getElementById("input");
const output = document.getElementById("output");

const commands = {
  help: `Available commands:<br/>
  - about<br/>
  - skills<br/>
  - projects<br/>
  - contact<br/>
  - clear<br/>
  - resume<br/>
`,

  about: `
  <div class="text-[2px] leading-[2px] md:text-[6px] md:leading-[6px]">
GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGPPPPPPPPPPPPGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGPP5YYYY55YYJJ??7???YYYPPGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGP5Y555555555YYJYY5YJ?777!!!7?5GBGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG5YJY555555YYYYYYJJ?JJJJJYJJJJJ?!!?JY5GGGGGGGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGP5YJJYYYYYYYYYYYYJJJYYYYJ?!7JY55YYJ5P5?!7JPGGGGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGGGGGP5YYJYYYYYYYYYYYY55PP555YYJ?77777JJJ5JJ5P5J?7JPGGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGGGG5YJYJJJ55PPPGGGBBBBBBBBBGGGGPY??7??J??YP5YYPYY7!5GGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGGGYJJYY5PPPPPGGBBBBBBBBBBB#GPPGBBGPY?77?7J&@GY#GG5??PGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGGY?YY5PPGGGGBBBBBBBBBBBBB###BBBB####GPJ?JYGBYJ5GGPY7JGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGG5?Y5YPGGB####BGP5555555555PP5YJYYY555PPPGBBPYY555YJ77GGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGYJP55PGBBG5J?7!!~~~^^^^^^^~~^^^~~~~~!???JYJ7YPY7Y7~~~5BGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGG5PPPPGB#P?~^^^^^^^^^^^^^^^^^^^^~~~~~~~~^~!7PGBJ??Y?!!JBGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGPP5PGGGP?~^^^^^^^^^^^^^^^^^^^^~^^^^^^^^^^:~YBPY5JJGY?YBGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGP5PPPGBGY7~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^:::^?5YY55JPP?5GGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGPY55PGBPJ7~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^::^!???YJYJY?5GGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGG555PGPJ!~^^^^^^^~^^^^^^^^^^^^^^^^^^^^^^^:::^!7?77!77JPGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGP55PB?:::^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^::::::^~?577YGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGG5GP#7::^^!!?YJ?!~^^^^^^^^^^^^^^^^^~!7?7!~^::::!#5?JGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGP7~JPB!::^~!7?5PGGGGPJ7~^^^^^^^~7JPGGGPY?77!~^::~G5!^!PGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGG!!!~?G~:^^~!777?JJJYYJJ7!~~~~~~!7?JJJJ77777!~^^:^Y7~7~5BGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGG77~^J5:^^~!??J!7B#57Y5J?7!~^^^~!7J5Y5&BY!?J?7!^::J!^~?BGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGY!~!G?:^^~~~~!!!7?7!7JJ?7!~^^^~77JJ?7J?!!!~^^^:::!J:~PGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGG?^~5!^^^^^^^~~~~~~!!!!7!~^^^^^~!!!77!~~~~^::..::~?:7BGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGG!^!!^^^^^^^^^^^^^^~~~~~~~~^^::^^~~~~~~^^^::::::^!^5BGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGBP^^!^^^^^^^^^^^^^^~~~~^~^^^^:.:^~^^^^^^^^^^^::^~:7BGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGGB5?!^^^^^^^^^^^^^~~!~^^^^^^^:..:~^^^^^^^^^^^^^^~?GGGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGGGBB5^^^^^^^^^^^^^~~!~^~!~~~^~~^^~~~^^^^^^^^^^^:YBGGGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGGGGGG~^^^^~~^^^^^^^^~!!??!!!~7?!~~^^^^^^^~^^^^^^PGGGGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGGGGGB7:^^^^~~~~^^^^^^^~~~~~~~^^^^^^^^^^^^~~^^^:7BGGGGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGGGGGB5^^^^^~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^:5BGGGGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGGGGGGB?:^^^~~~~~~!JJ???7?7777777!7?!~~^^^^^^^:?GGGGGGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG?^^~~~~~~~~!77!!!!!!!!!!!7??!!~~~~~~^^?GGGGGGGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGBJ^~~~~~~~~~~~!!!!!!!!!!~~~~~~~~~~~~!YBBGGGGGGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGBY:~!!!!!~~~!~~~~~~~~~~~~~~~~~~!!!~^YBGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG5:^~~!7!!~~~~~^^^^^^:^^~~~~~!!!~^::YBGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGBP^^^~~!!77!~~~~~^^^^^^^~~~!!!~^::::YGBGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGGGGGP5G#PY^^^^~~!!!!777777777777!!~^^^::::7PY&PPGGGGGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGGGGGGGP55B#YG5~^^^^~~!!!!77777!!!!~^^^^^^:::!#Y7&B?J5PGGGGGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGGGGGPPGGPP55PB&Y5P5~^^^^^~~!!!!!!~~~^^^^^^^^::^7#P77B&Y?77JYPPGGGGGGGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGGGGGGPPGGBBBGPPPPPB&555P5!^^^:^^~~~~~~~^^^^^^^^::^~J#P?7!5@Y?777?YPP555PPGGGGGGGGGGGGGGG</br>
GGGGGGGGGGGGPPPPPPGBB#BGPPPPPPB@P555P5!^^^^^^^~~~^^^^^^^^^^^^!Y#P777!5@5?7777JP##BPYJJJYY5PPGGGGBBGG</br>
GGGGGGGPP5555PPPGGB#######GPPPPPPPPG&#555555P5!^^^^^^^^^^^^^^^^^^~~75#P?777?#&P?7777?55G##BPYJ?????JJJJJ5PG</br>
PPP55YY555PPPPPPGB#BPPPPPPPPPPG#@P5555557~^^^^^^^^^^^^^^~~!?P#P?7!!!5@&PJ77777YP55P##BPYJJJJJJJ?77??</br>
5YYY55555PPPPPPG##G5PPPPPPPPPGG#@BYY555557^^^^^^~~~~~~~~~!JPBP777!!^?@&G5J7!7!7YGG5JP#BG55JJJJJJJJJJ</br>
55555PPPPPPPPGB##P5PPPPPPPPGGGGB&&5YYP&@@G?~^:^^~~~~~~~~~7YG&#P?!!!~!##5YY5J??!Y55P55BBBPP5YYYYJJJJJ</br>
555PPPPPPPPPPGGBB##BGPPPPPGGPPPG#&GYP@@@@&#BP?::^^~~~~~~?YG&@@@@P7~~?&BYJJJYYY??5PG555PGGPP5YYYYJJJJ</br>
55PPPPPPPP5PPPGPGGB####BPPPPPPPGG#BG@@@@@&#BP@G!^^^^~^~YBBB##&@@@&5!5@PYJJJYY5YY5JYYYY5PPPPP5YYYYYYY</br>
PP5PPPP5P55PPPPPPPPGGBBGPPPPPPPPPG##&&##&&@&&&&&P^^~~!PGGGGGB#&&#B&#B&5JJJJYYYYGG7?YJYY5PPPP55YYYYY5</br>
PPPPPPPPPPPPPPPPPPGPPPPPPPPPPPPGGGBBB#BPGB##&@#B#7^~^JGPPPG#&#P555G@@&PJ??JJYYYPGJ7YJJJ5PPPP55YYYY55</br>
PPPPPPPPPPPPPPGGPPPPPPPPPPPPPPPGGGGPPGP5Y5GBB#&&#P~~~7J5PG#&G5JY5YYB&&PYJ??JY55PP5??JJJ75GPP55YJYY5P</br>
PPPPPPPPPPPPPGBBGPPPPPPPPPPPPPGGGPGP5555YY5PPGB#&&Y^~?55G##GY??YYYJ5#&GYJJ?JY555P5YYJJJ?PGGP5YYJJYPP</br>
PPPPPPPPPPPPPPB#GPPPPPPPPPPP5PPPPPGP5YYY5YJY5PGB#&&JY55PBBG5J7?JYYJY&&GYJJJJY555P55YYYJ?GGPP5YYJJY5P</br>
GPPPPPPPPPPPPPG#BGPPPPPPPPPPPPPPPPGGYYYYYYYJYPBB##&GYY5GGG5J???JY5JY&&GYJJJY555PPP5555JJGPPP5YJJJY5P</br>
GGGPPPPPPPPPPGGB#GPPPPPPPPPPGGGGGGPG5JJJYYYYJYG##&GJ?J5PGPY?????Y5YY&&G5JJJY55PPPPP555YYGPP55YJJJY5P</br>
GGGGGPPPPGPGGGGB#BPPPPPPPPPGPGGGGGGGGJJJYYYYYYP#@BJ???YGG5J?????Y55Y#&G5YJJY5PPPPPPPP5YPGP55YYJJJYPG</br> 
</div>
  Hi, I'm Gyanendra.<br/>

I'm a full-stack web developer specializing in the MERN stack.
I enjoy solving complex problems and building responsive, 
efficient web applications that address real-world needs.`,

  skills: `
<table>
  <tbody>
    <tr>
      <td class="px-1 md:px-3">Languages</td>
      <td class="px-1 md:px-3">JavaScript, TypeScript, Python, C++</td>
    </tr>
    <tr>
      <td class="px-1 md:px-3">Frontend</td>
      <td class="px-1 md:px-3">ReactJS, NextJS, Tailwind CSS, Bootstrap</td>
    </tr>
    <tr>
      <td class="px-1 md:px-3">Backend and DB</td>
      <td class="px-1 md:px-3">Node.js, Express.js, MongoDB, MySQL</td>
    </tr>
    <tr>
      <td class="px-1 md:px-3">Tools & Platforms</td>
      <td class="px-1 md:px-3">Git, GitHub, Docker, Postman, Linux</td>
    </tr>
  </tbody>
</table>
`,

  projects: `
  <table>
  <tr>
    <td class="px-1 md:px-3"><a target="_blank" class="font-semibold hover:text-green-700 underline" href="https://github.com/gsinghcodes/GrammarScorer">Grammar Scorer Engine</a></td>
    <td class="px-1 md:px-3">A tool that analyzes grammar from text or audio input, scores the content, and suggests improvements. Built using Whisper, LanguageTool, and Express.js.</td>
  </tr>
  <tr>
    <td class="px-1 md:px-3"><a target="_blank" class="font-semibold hover:text-green-700 underline" href="https://github.com/gsinghcodes/TaxiGo">TaxiGo</a></td>
    <td class="px-1 md:px-3">A full-stack ride booking platform inspired by Uber. Built with the MERN stack, it features real-time ride tracking, captain and user dashboards, secure authentication, and status-based ride management.</td>
  </tr>
  <tr>
    <td class="px-1 md:px-3"><a target="_blank" class="font-semibold hover:text-green-700 underline" href="https://github.com/gsinghcodes/Finance-tracker/tree/main">FinSight</a></td>
    <td class="px-1 md:px-3">A full-stack finance tracker with real-time budget suggestions using NLP and automated MySQL reports. Built with React, Node.js, MySQL, and Python.</td>
  </tr>
  <tr>
    <td class="px-1 md:px-3"><a target="_blank" class="font-semibold hover:text-green-700 underline" href="https://github.com/gsinghcodes/DSA-Tracker">DSA Problem Tracker</a></td>
    <td class="px-1 md:px-3">A responsive React + TypeScript app to manage your DSA problems. Add, edit and delete problems with difficulty levels (Easy, Medium, Hard), and set a daily problem-solving goal. Built with Tailwind CSS for a clean UI.</td>
  </tr>
</table>
`,

  contact: `
  <div class="flex gap-5 flex-wrap">
  <a class="flex flex-col items-center" target="_blank" href="https://www.linkedin.com/in/gsinghcodes/">
    <div class="text-[1px] leading-[1px] leading md:text-[4px] md:leading-[4px]">
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@<br/>
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@<br/>
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@<br/>
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#PPPPPPPPPPPPPPPPPPPPPG@@@@@@@@@<br/>
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BY55YJY5555555555555555&@@@@@@@@<br/>
      @@@@@&&&@@@@@@@@&&&@@@@@@@@@@@@@@&&&@@@@@@@@@@@@@@@@@@@@@@@@@@&&&@@@B55J:..?555555555555555&@@@@@@@@<br/>
      @@@@@&&&@@@@@@@@@&@@@@@@@@@@@@@@@&&&@@@@@@@@@@@@@@@@@@@@@@@@@@&&&@@@B55Y?!7Y555555555555555&@@@@@@@@<br/>
      @@@@@&&&@@@@@@@@&&&@@&&&@&&&&&@@@&&&@@&&&&@@@&&&&&&&@@@&&&&&&&&&&@@@B55Y~^^J5!^^!!^:^~75555&@@@@@@@@<br/>
      @@@@@&&&@@@@@@@@&&&@@&&&&@@&&&&@@&&&@&&&@@@&&&@@@@&&&@&&&&@@@&&&&@@@B55J...?5^..:!?!...7555&@@@@@@@@<br/>
      @@@@@&&&@@@@@@@@&&&@@&&&@@@@&&&@@&&&&&&&@@@&&&&&&&&&&@&&&@@@@@&&&@@@B55Y:..?5~..~555^..~555&@@@@@@@@<br/>
      @@@@@&&&&@@@@@@@&&&@@&&&@@@@&&&@@&&&@@&&&@@&&&&@@@@@@@&&&&@@@&&&&@@@B55J:..?5^..~555~..~555&@@@@@@@@<br/>
      @@@@@&&&&&&&&&@@&&&@@&&&@@@@&&&@@&&&@@@&&&&@@&&&&&&&@@@&&&&&&&&&&@@@B55Y:::?5~::!555~:.!555&@@@@@@@@<br/>
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BY5YYYYY5YYYY555YYYY555&@@@@@@@@<br/>
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&GPPPPPPPPPPPPPPPPPPPPB@@@@@@@@@<br/>
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@<br/>
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@<br/>
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@<br/>
    </div>
    <div class="text-xs md:text-lg">Linkedin</div>
  </a>
  <a class="flex flex-col items-center" target="_blank" href="https://github.com/gsinghcodes">
    <div class="text-[1px] leading-[1px] leading md:text-[4px] md:leading-[4px]">
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@<br/>
      @@@@@@@@@@@@@@&&&&&&&&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@<br/>
      @@@@@@@@@@&&##############&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@<br/>
      @@@@@@@@&####################&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@<br/>
      @@@@@@&####&&&##########&&&####&@@@@@@@@@@@@&&&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@<br/>
      @@@@@&#####@@@@@@@@@@@@@@@@#####&@@@@@@@@&#BBBBBB#@@#B#&@@&&&@@@#BB&@@@&BB#@@@@@@@@@@@#BB&@@@@@@@@@@<br/>
      @@@@@#####&@@@@@@@@@@@@@@@@&#####&@@@@@@#BB#&@@@@@@@&##@@&BB#@@@#BB&@@@&BB#@@@@@@@@@@@#BB#@&@@@@@@@@<br/>
      @@@@&#####@@@@@@@@@@@@@@@@@@#####&@@@@@@BBB@@&&&&&&@#BB&#BBBBB#@#BB#####BB#@#BB&@@BB#@#BBBBBBB#@@@@@<br/>
      @@@@&#####@@@@@@@@@@@@@@@@@@#####&@@@@@@BBB@@&#BBB#@#BB&@&BB#@@@#BB#####BB#@#BB&@@BBB@#BB#@@#BB&@@@@<br/>
      @@@@&#####&@@@@@@@@@@@@@@@@&#####&@@@@@@#BB#@@@&BB#@#BB&@&BB#@@@#BB&@@@&BB#@#BB&@@BBB@#BB#@@#BB&@@@@<br/>
      @@@@@######&&@@@@@@@@@@@@&&######@@@@@@@@#BBBB#BBB#@#BB&@@BBB##@#BB&@@@&BB#@#BBB##BBB@#BBB##BB#@@@@@<br/>
      @@@@@@###&&####&@@@@@@&#########@@@@@@@@@@@&&&&&&&@@&&&@@@@&&&&@&&&@@@@@&&&@@&&&&&&&&@&&&&&&&&@@@@@@<br/>
      @@@@@@@&###&&&&@@@@@@@&#######&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@<br/>
      @@@@@@@@@&#####&@@@@@@&#####&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@<br/>
      @@@@@@@@@@@@&&#&@@@@@@&#&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@<br/>
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@<br/>
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@<br/>
    </div>
    <div class="text-xs md:text-lg">Github</div>
  </a>
  <a class="flex flex-col items-center" target="_blank"  href="https://mail.google.com/mail/u/0/?fs=1&to=gyanendra.codes@gmail.com&tf=cm">
    <div class="text-[1px] leading-[1px] leading md:text-[4px] md:leading-[4px]">
      @@@@@@@@@@@@@@@@&#BBBBBB##&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@<br/>
      @@@@@@@@@@@@#G5YJJJJJJJJJJYY5G#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@<br/>
      @@@@@@@@@&GYJJJY5PGGBBBGP5YJJJJY#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B555B@BPPP&@@@@<br/>
      @@@@@@@&PJJJYPB&@@@@@@@@@@@#GYYG&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&YJJJJ#PJJJ&@@@@<br/>
      @@@@@@#YJJJP&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&GPG#@PJJY&@@@@<br/>
      @@@@@&YJJJB@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PJJY&@@@@<br/>
      @@@@@PJJJG@@@@@@@@@@@@@@@@@@@@@@@@@@@@BGPYJ??JJJJJJJJJJJJJ??JYPPB@@@@#G5YJJJJYPB&@@@@&BBB&@PJJY&@@@@<br/>
      @@@@&YJJY&@@@@@@@@@@@&##############&&YYYY?7~::::::::::::^~7JYYY5&@G?!~~!7??7!~!7Y#@@#JJJG@PJJY&@@@@<br/>
      @@@@&YJJY&@@@@@@@@@@@5JJJJJJJJJJJJJJP&YYYYYYYJ7~^^^^^^^~7JYYYY55P@@GY7?G&@@@@#G?!!7B@#JJJG@PJJY&@@@@<br/>
      @@@@@YJJJ#@@@@@@@@@@@BGGGGGGGGGGPJJJP&YYY7!?JYYYJ7~^~7JYYYJ?!?55P&@@@@@@&####&@&?!~J@#JJJG@PJJY&@@@@<br/>
      @@@@@GJJJ5@@@@@@@@@@@@@@@@@@@@@@PJJJB&YYY!^~!7?JYYYJYYYJ?!!!!?55P&@@B5?7!!!!!!7J7!!?@#JJJG@PJJY&@@@@<br/>
      @@@@@@PJJJ5&@@@@@@@@@@@@@@@@@@@GJJJ5@&YYY!~~~~~!7?JYJ?7!!!!!!?55P@#?!~!?5GBBBG5J7!!?@#JJJG@PJJY&@@@@<br/>
      @@@@@@@GYJJYG&@@@@@@@@@@@@@@@#5JJJ5&@&YYY!~~~~~~~!!!!!!!!!!!!?55P&J~!!G@@@@@@@@&?!!?@#JJJG@PJJY&@@@@<br/>
      @@@@@@@@#PJJJJ5G#&&@@@@@&&BG5JJJYB@@@&YYY!~~~~~^^^^~!!!!!!!!!?55P&J~!!B@@@@@@@B?!!!?@#JJJG@PJJY&@@@@<br/>
      @@@@@@@@@@&G5JJJJJYY55YYYJJJJY5B@@@@@&YYY!^~^^^^^^^^^~~!!!!!!?555@#?!!!JPGGP5?!77!!?@#JJJG@PJJY&@@@@<br/>
      @@@@@@@@@@@@@&BGP5YYYYYYY5PG#&@@@@@@@@P557~~~~~~~~~~~~!777777JPPG@@@GJ7!!!!!!?P&Y77J@#YYYB@GYYY&@@@@<br/>
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&&&&&&&&&&&&&&&&&&&&@@@@@@@@@&#BB#&@@@@&&@@@@@&@@@@@@@@@@@<br/>
    </div>
    <div class="text-xs md:text-lg">Gmail</div>
  </a>
</div>
  `,
  resume : `
    <div class="resume-body text-green-600 mx-auto my-5 px-4 py-3 md:my-10 md:px-8 md:py-6 w-[105mm] min-h-[150mm] md:w-[210mm] md:min-h-[297mm] max-w-none overflow-auto">
      <div class="text-center">
        <div class="text-xl md:text-3xl">GYANENDRA SINGH</div>
        <div class="flex text-[10px]  md:text-lg items-center flex-col">
          <div class="flex gap-3 md:gap-7">
            <a class="flex gap-[2px] md:gap-2 items-center" href="https://mail.google.com/mail/?view=cm&fs=1&to=gyanendra.codes@gmail.com" target="_blank"
              >gyanendra.codes@gmail.com</a
            >
            <p class="flex gap-2 items-center">
              XXXXX XXXXX
            </p>
            <p class="flex gap-2 items-center">
              Gurugram, India
            </p>
          </div>
          <div class="flex gap-7">
            Linkedin</a
            >
            <a
              class="flex gap-2 items-center"
              href="https://github.com/gsinghcodes"
              target="_blank"
              >Github</a
            >
          </div>
        </div>
      </div>
      <div class="mt-3">
        <div class="text-md md:text-xl">
          <h1>SUMMARY</h1>
          <hr />
        </div>
        <div>
          <p class="text-[9px] leading-[9px] md:text-sm md:leading-5 text-justify">
            Software Engineer with hands-on experience in full-stack development
            (MERN, Next.js) and strong analytical skills Proficient in
            debugging, version control, and collaborating with cross-functional
            teams to deliver scalable, data-driven solutions.
          </p>
        </div>
      </div>
      <div class="mt-3">
        <div class="text-md md:text-xl">
          <h1>SKILLS</h1>
          <hr />
        </div>
        <ul class="text-[7px] mt-1 leading-[7px] md:text-sm md:leading-6">
          <li>
            <span class="font-semibold">Languages:</span> Python, C++,
            JavaScript, TypeScript
          </li>
          <li>
            <span class="font-semibold">Frontend:</span> React.js, Next.js,
            Tailwind CSS
          </li>
          <li>
            <span class="font-semibold">Backend & DB:</span> Node.js, MySQL,
            MongoDB
          </li>
          <li>
            <span class="font-semibold">Tools:</span> Git/GitHub, VS Code,
            Postman, Linux
          </li>
          <li>
            <span class="font-semibold">Soft Skills:</span> Problem Solving,
            Analytical Thinking, Team Management, Collaboration
          </li>
        </ul>
      </div>
      <div class="mt-3">
        <div class="text-md md:text-xl">
          <h1>PROJECTS</h1>
          <hr />
        </div>
        <div class="mt-1">
          <div class="flex text-[10px] md:text-lg justify-between">
            <h1 class="font-semibold">FinSight (Finance Tracker)</h1>
            <a
              href="https://github.com/gsinghcodes/Finance-tracker"
              target="_blank"
              class="italic"
              >Github</a
            >
          </div>
          <ul class="pl-5 text-[8px] md:pl-10 md:text-sm list-disc text-justify">
            <li class="leading-[8px] md:leading-5 mb-1">
              Developed <span class="font-semibold">FinSight</span>, a
              full-stack personal finance tracker with
              <span class="font-semibold"
                >React, Tailwind, Express, MySQL, and MongoDB</span
              >, supporting
              <span class="font-semibold">100+ daily entries</span> with smooth
              in-place editing and filtering.
            </li>
            <li class="leading-[8px] md:leading-5 mb-1">
              Integrated
              <span class="font-semibold"
                >Python-powered budget suggestion engine</span
              >
              using <span class="font-semibold">NLP</span> to provide
              <span class="font-semibold">real-time spending insights</span> and
              <span class="font-semibold">personalized improvement tips</span>.
            </li>
            <li class="leading-[8px] md:leading-5 mb-1">
              Automated
              <span class="font-semibold">monthly MySQL reports</span> capturing
              <span class="font-semibold"
                >User ID, Month, Total Spent, Top Category, and Overbudget
                Categories</span
              >, improving
              <span class="font-semibold">tracking accuracy by 30%</span>.
            </li>
          </ul>
        </div>
        <div class="mt-2">
          <div class="flex text-[10px] md:text-lg justify-between">
            <h1 class="font-semibold">Grammar Scorer Engine</h1>
            <a
              href="https://github.com/gsingghhh/GrammarScorer"
              target="_blank"
              class="italic"
              >Github</a
            >
          </div>
          <ul class="pl-5 text-[8px] md:pl-10 md:text-sm list-disc text-justify">
            <li class="leading-[8px] md:leading-5 mb-1">
              Integrated <span class="font-semibold">Whisper API</span> for
              <span class="font-semibold">speech-to-text transcription</span>,
              <span class="font-semibold">LanguageTool API</span> for
              <span class="font-semibold">grammar error detection</span>, and
              <span class="font-semibold">OpenAI API</span> to generate
              <span class="font-semibold"
                >contextual grammar improvement suggestions</span
              >.
            </li>
            <li class="leading-[8px] md:leading-5 mb-1">
              Used <span class="font-semibold">Multer</span> for
              <span class="font-semibold">file upload handling</span>, developed
              a <span class="font-semibold">secure Express.js backend</span>,
              and stored
              <span class="font-semibold">evaluation results in MongoDB</span>.
            </li>
            <li class="leading-[8px] md:leading-5 mb-1">
              Implemented
              <span class="font-semibold">user authentication</span> and enabled
              users to securely view their
              <span class="font-semibold">past transcriptions</span>,
              maintaining
              <span class="font-semibold">session integrity</span> and
              <span class="font-semibold">personalized history access</span>.
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-3">
        <div class="text-md md:text-xl">
          <h1>EDUCATION</h1>
          <hr />
        </div>
        <div class="text-[9px] md:text-lg">
          <div class="flex justify-between">
            <h1 class="font-semibold">IMS Ghaziabad (UC Campus)</h1>
            <h1>Ghaziabad, India</h1>
          </div>
          <div class="flex -mt-1 pl-6 justify-between">
            <h1>Bachelor of Computer Applications</h1>
            <h1 class="italic">2022-2025</h1>
          </div>
        </div>
      </div>
      <div class="mt-3">
        <div class="text-md md:text-xl">
          <h1>ACHIEVEMENTS</h1>
          <hr />
        </div>
        <div>
          <ul class="mt-1 text-[9px] md:text-sm text-justify leading-[10px] md:space-y-1 list-disc pl-3 md:pl-6">
            <li>
              <span class="font-semibold">4-Star</span> Problem Solver on
              HackerRank
            </li>
            <li class="leading-[9px] md:leading-5">
              Solved <span class="font-semibold">300+ DSA problems</span> across
              platforms like <span class="font-semibold">GeeksforGeeks</span>,
              <span class="font-semibold">LeetCode</span>, and
              <span class="font-semibold">Coding Ninjas</span>, building a deep
              foundation in algorithmic thinking and problem-solving.
            </li>
          </ul>
        </div>
        <div class="mt-3">
          <div class="text-md md:text-xl">
            <h1>CERTIFICATIONS</h1>
            <hr />
          </div>
          <div class="flex text-[9px] md:text-sm gap-[9px]">
            <ul class="mt-1 list-disc leading-[12px] md:leading-7 pl-3 md:pl-6">
              <li>
                Full Stack Web Developer Trainee:
                <span class="font-semibold">IIT Kanpur</span>
              </li>
              <li>
                Programming with JavaScript:
                <span class="font-semibold">Meta, Coursera</span>
              </li>
              <li>
                Microsoft Web Dev Beginnings Challenge:
                <span class="font-semibold">MLSA</span>
              </li>
            </ul>
            <div class="flex mt-[3px] md:mt-2 flex-col gap-[0.2px] md:gap-1">
              <span
                ><a
                  href="https://drive.google.com/file/d/1H-AAdQJZncPwNUpJiJqaqesx00sXPUu7/view"
                  target="_blank"
                  ><svg
                    class="h-[12px] w-[12px] md:h-[24px] md:w-[24px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="#228B22"
                  >
                    <path
                      d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"
                    /></svg></a
              ></span>
              <span
                ><a
                  href="https://drive.google.com/file/d/1fLVtI2gTlZs8jSg6zI1NC-M-epPvpQBJ/view"
                  target="_blank"
                  ><svg
                    class="h-[12px] w-[12px] md:h-[24px] md:w-[24px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="#228B22"
                  >
                    <path
                      d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"
                    /></svg></a
              ></span>
              <span
                ><a
                  href="https://drive.google.com/file/d/1QnPmlJavCLmT53qyAMDeR4Iw3w-9aAZB/view"
                  target="_blank"
                  ><svg
                    class="h-[12px] w-[12px] md:h-[24px] md:w-[24px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="#228B22"
                  >
                    <path
                      d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"
                    /></svg></a
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
};

let history = [];
let historyIndex = -1;

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = input.value.trim().toLowerCase();
    const promptLine = `<div><span class="prompt">gyansh@portfolio:~$</span> ${cmd}</div>`;
    output.innerHTML += promptLine;

    if (cmd === "clear") {
      output.innerHTML = "";
    } else {
      const response = commands[cmd] || `Command not found: ${cmd}`;
      output.innerHTML += `<div>${response}</div>`;
    }

    input.value = "";
    window.scrollTo(0, document.body.scrollHeight);
  }
});

