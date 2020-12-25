<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<meta name="description" content="A game where you divide into pieces and eat other players.">
	<title>Vanis.io (𝓢𝓢 edition)</title>	
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
	<script type="text/javascript" async="" src="https://www.gstatic.com/recaptcha/releases/qc5B-qjP0QEimFYUxcpWJy5B/recaptcha__en.js" crossorigin="anonymous" integrity="sha384-EauiKN7dy30bq/wDo7lcvebLQr7wwQPtEV6A1G43RAWnhPwxWZFCCTOT/hE+ffe3"></script>
	<script src="https://www.google.com/recaptcha/api.js?render=explicit" async="" defer=""></script>
	<link href="css/style.css?33d9b9748bb510aa73d6" rel="stylesheet"> </head>

<body>
	<div id="app">
		<ab-overlay></ab-overlay>
		<context-menu></context-menu>
		<hud v-show="showHud"></hud>
		<replay-controls></replay-controls>
		<div id="overlay" v-show="showMenu || showDeathScreen">
			<canvas id="starfield"></canvas>
			<privacy-tos></privacy-tos>
			<death-stats v-show="showDeathScreen" :stats="deathStats"></death-stats>
			<main-container v-show="showMenu"></main-container>
			<social-links></social-links>
			<p class="preload">text</p>
			<image-captcha></image-captcha>
		</div>
	</div>
	<canvas id="canvas" tabindex="0"></canvas>
	<script>document.write('<link rel="shortcut icon" type="image/png" href="data:image/png;base64,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">');</script>
</body>

</html>
