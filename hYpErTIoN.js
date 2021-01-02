// Example of how NOT to make an extension (incompetence at it's finest!)
// Credits to the skids who made this garbage.

//if(localStorage.hpBetaTester !== "yes daddy")location.href = "https://pastebin.com/Snhx99nu"

var reload

/* if(!localStorage.gameObj){
  localStorage.gameObj = true
  reload = true
} */

if (!localStorage.virus) {
	localStorage.virus = "https://zimek.tk/viruses/red.png"
	reload = true
}


if (reload == true) location.reload()

let Core = window.gameObj

document.title = "Vanis.io - Hypertion"

$("head").append(`
  <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet">
  <link type="text/css" rel="stylesheet" href="https://zimek.tk/uikit/uikit.css" />

  `)

$('#main-container').append(`<div data-v-0eaeaf66='' data-v-1bcde71e='' class='modal' style='z-index: 999; width: 100%; height: 100%;color:white;font-family: 'Quicksand', sans-serif; margin-left: 0px;display:none;transition:2.5s;font-weight:lighter;' id='hpWelcome'><div data-v-0eaeaf66='' style='background-color:rgba(0, 1, 13, 0.9);backdrop-filter:blur(5px);' class='overlay'></div><div style='position: relative;height:100%;width:100%;'><div style='margin: 0;position: absolute;top: 50%;left: 50%;-ms-transform: translate(-50%, -50%);transform: translate(-50%, -50%);'><span id="hpweltext" style="color:#d1d1d1; font-size:90px;font-weight:100;font-family: 'Quicksand', sans-serif;transition:4s;">Hypertion</span></div></div></div></div></div>`);
$('#hpWelcome').fadeIn(400);

$("#hpweltext").css("font-size", "120px")
$("#hpweltext").css("color", "white")

setTimeout(function () {
	$('#hpWelcome').fadeOut(800)
}, 1200)


$.get("https://zimek.glitch.me/hypertion/css", function (data) {
	$("head").append(`<style>${data}</style>`)
});


window.hypertion = {
	version: '3.0',
	build: "3.0 beta",
	connection: null,
	alive: 0,
	selectedUpgradesPage: 1,
	rpc: {},
	score: 0,
	lastChatMessage: {},
	hatsStorage: {},
	foodSprite: null,
	feedSprite: null,
	sessionscore: 0,
	tickDelay: 0,
	lastMove: 0,
	local: {

		settings: {
			autorespawn: true, //auto respawning on death
			pausemulti: false, //make cell stop moving if you switch tab
			skipStats: false, // skipping stats after death
			chatheight: 300, //height of chatbox
			chatmsgsize: 15, //size of chat messages
			privacy: true, //hide skin&tag (livestream/ss)
			savename: 'skin', //while saving skin creator skin, name of the file
			replayTime: 12, //replay time (in seconds)
			emojis: true,
			borderEnabled: true,
			borderColor: '#042059',
			borderSize: 50,
			transparentCellsAlpha: 0.7,
			feedColor: '#30eeff', //ejected mass color
			foodColor: '#30eeff',
			oneFoodColor: true,
			allskins: false, //show all skins
			transparentCells: false,
			borderColor: "#000000", //Changing border color on map
			viruscolor: 'red', //virus color (like 8 options) || VVV Custom virus texture VVV
			virusurl: 'https://cdn.discord.com/emojis/670258914411151371.png?v=1',
			autoserver: {
				region: "EU",
				gamemode: "false",
				server: "1"
			}, //auto region+server
			autoreconnect: true, //try reconnect if serv full
			hideownname: false, //hide own name
			hidetagskin: false, //hide tag teammates skins
			hideownskin: false, //hide own skin
			chatPopup: true, //if chat is closed => pop up a message (like alis)
			hidetagname: false, //hide names of people on ur tag
			hideenemyname: false, // hide names of people not on ur tag
			privskin: false, // private skin enabled? (nobody else can see ur skin and any URL)
			privskinurl: 'https://i.postimg.cc/QCXb0dPC/image.png', // priv skin URL
			skinrotator: false, // select random skin on death
			movemenu: false, // dont stop movement while opening menu
			cleanmenu: true,
			hidecrown: false, // dont show the damn hat
			hpChatColor: '#336dff', // your own name color on hypertion chat
			tickDelay: 5,
			maxChatMessages: 100,
			preboost: false,
			rpcmode: 'vanilla',
			cellcolor1: '#9efff7',
			cellcolor2: '#ff9e9e',
			cellcolor1s: false,
			cellcolor2s: false
		},

		scores: {
			ffa: 0,
			instant: 0,
			'self-feed': 0,
			crazy: 0,
			megasplit: 0,
			gigasplit: 0
		},
		longestalive: 0,
		crowntime: 0,
		skins: [],
		nicks: [],
		reportedSkins: [],
		onlinetime: 0
	},
	sessiontime: 0,
	intervals: {},
	data: {},
	messages: [],
	actions: {},
	emojis: {
		default: [],
		custom: [],
		text: []
	},
	commands: [],
	viruses: {
		blue: "https://zimek.tk/viruses/blue.png",
		cyan: "https://zimek.tk/viruses/cyan.png",
		green: "https://zimek.tk/viruses/green.png",
		lime: "https://zimek.tk/viruses/lime.png",
		orange: "https://zimek.tk/viruses/orange.png",
		pink: "https://zimek.tk/viruses/pink.png",
		red: "https://zimek.tk/viruses/red.png",
		yellow: "https://zimek.tk/viruses/yellow.png",
		purple: "https://zimek.tk/viruses/purple.png",
		invis: "https://zimek.tk/viruses/invis.png"
	},

	firstTick: false,
	lastTick: 0,
	secondtab: false,

	img: {
		plus: 'https://i.postimg.cc/fLWHPmjH/image.png',
		defaultOnlineList: 'https://discordapp.com/assets/6debd47ed13483642cf09e832ed0bc1b.png',
		skinCreatorDefault: '',
	},

	onInput: {
		chatheight: function (x) {
			$("#hpchatbox").css("height", `${x}px`)
		},
		emojis: function (x) {
			if (x)
				$("#emojiList").fadeIn(200)
			else
				$("#emojiList").fadeOut(200)
		},
		privacy: function (x) {
			if (x) {
				$("#teamtag").addClass('blured')
				$("#skinurl").addClass('blured')
			} else {
				$("#teamtag").removeClass('blured')
				$("#skinurl").removeClass('blured')
			}
		},
		cleanmenu: function (x) {

			if (x) {
				$('.social-container').fadeOut(200)
				$("#overlay > .container").eq(0).fadeOut(200)
				$("#starfield").remove()
				return
			}

			$('.social-container').fadeIn(200)
			$("#overlay > .container").eq(0).fadeIn(200)

		},
		chatmsgsize: function (x) {

			$(".message-from").css("font-size", x + "px")
			$(".message-text").css("font-size", x + "px")

			$("#hpchatbox").css("font-size", `${x}px`)

		},
	},

}

let hp = window.hypertion
let defaultHpSettings = JSON.stringify(hp.local.settings);
defaultHpSettings = JSON.parse(defaultHpSettings)

$("#ab-overlay").remove()
$("#player-data > div").eq(0).empty()
$(".bar").empty()

if (!localStorage.hpVersion) {
	delete localStorage.Hypertion

	if (localStorage.scores) //moving from 2.0 to 3.0
		hp.local.scores = JSON.parse(localStorage.scores)
}

localStorage.hpVersion = '3.0'

if (!localStorage.Hypertion) {
	localStorage.Hypertion = JSON.stringify(hp.local)
} else {
	hp.local = JSON.parse(localStorage.Hypertion)
}

//moving from 2.0 to 3.0
if (hp.local.onlinetime == 0 && localStorage.minutesOnline)
	hp.local.onlinetime = localStorage.minutesOnline

hp.actions.download = function (filename, text) {
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}

hp.actions.saveSkin = function () {
	var element = document.createElement('a');
	element.setAttribute('href', skincreator.canvas.toDataURL('image/png'));
	element.setAttribute('download', hp.local.settings.savename + ".png");
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}

hp.actions.updateVisuals = function () {}

Core.playersCount = function () {
	var max = 0
	if ($('.vanis-list-item.active').length > 0) max = parseInt($('.vanis-list-item.active div').eq(1).text().split(" ")[2]);

	var count = 0
	if (Core.playerManager && Core.playerManager.players) count = Object.keys(Core.playerManager.players).length;

	return [count, max]
}

hp.actions.getRPCdata = function () {
	return JSON.stringify({
		connected: $(".vanis-list-item.active .server-name").text() !== "",
		replay: Core.replaying,
		spectate: Core.spectating,
		score: Core.score,
		afk: window.afk,
		mode: hp.local.settings.rpcmode,
		region: $(".tabs .tab.active").text().replace(/\s/g, " ").replace("NEW", "").replace(/\s/g, ""),
		tag: $("#teamtag").val() !== "",
		server: ($(".tabs .tab.active").text().replace(/\s/g, " ").replace("NEW", "").replace(/\s/g, "") + " " + $(".vanis-list-item.active .server-name").text()) + ` (${Core.playersCount()[0]}/${Core.playersCount()[1]})`
	})
}

hp.actions.comma = function (x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function sCo(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function rCo(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function eCo(name) {
	sCo(name, "", -1);
}

if (hp.local.settings.cleanmenu) {
	$("#starfield").remove()
	$('.social-container').hide()
	$("#overlay > .container").eq(0).hide()
}

var hpID
var hpPID = Math.floor(Math.random() * 3e6) + 1e5

if (!rCo("hypertionID")) {
	var id = Math.floor(Math.random() * 3e6) + 1e5
	sCo("hypertionID", id, 99999)
	hpID = id
} else {
	hpID = rCo("hypertionID")
}

var hyperID = hpID

hp.actions.accountObject = function () {

	/*
	    if(!window.account && $("#account-name").html() == "")
	    return

	    if(window.account && $("#account-name").html() == ""){
	    window.account = { discordName:$("#nickname").val() }
	    return
	    }


	    if(!window.account && $("#account-name").html() !== ""){
	      window.account = {
	        discordName:$("#account-name").html(),
	        discordId:$(".avatar").attr("src").split("/")[4],
	        avatarUrl:$(".avatar").attr("src"),
	        level:$(".player-info > div").eq(1).text().split(" ")[1],
	        xp:$(".player-info > div").eq(2).text().split(" ")[0]
	      }
	    } */

	$.ajax({
		url: "https://vanis.io/api/me?1",
		type: "GET",
		beforeSend: function (xhr) {
			xhr.setRequestHeader('authorization', `Vanis ${window.vanisToken}`);
		},
		success: function (data) {
			window.account = data
			window.account.avatarUrl = `https://cdn.discordapp.com/avatars/${data.discordId}/${data.discordAvatar}.png?size=256`
		}
	})


	return window.account
}

hp.actions.accountObject()

hp.actions.save = function (setting, value) {
	if (setting)
		hp.local.settings[setting] = value

	localStorage.Hypertion = JSON.stringify(hp.local)

	hp.actions.updateVisuals()
}

hp.actions.updateAutoServer = function () {
	hp.actions.save("autoserver", {
		region: $("#autoregion").val(),
		gamemode: $("#autoserver").val(),
		server: $("#autoservernumber").val()
	})
}

hp.actions.updateVirus = function (x) {
	if (x == 'custom') {
		$("#virusUrlBox").fadeIn(100)
		localStorage.virus = $("#virusUrl").val()
	} else {
		$("#virusUrlBox").fadeOut(100)
		localStorage.virus = hp.viruses[x]
	}
	swal("To update virus you have to refresh page a few times")
}

$(".tabs").eq(1).append(`<i data-v-1bcde71e="" onclick="$('#hpMenu').fadeIn(150)" style="font-family: Quicksand;font-size:17px;font-style: normal;  " uk-tooltip="Hypertion" class="tab" style="font-size:15px;">Hp</i>`)


//Main page
$('#main-container').append(`<div data-v-0eaeaf66="" data-v-1bcde71e="" class="modal" style="z-index: 999; width: 100%; height: 100%; margin-top: 120px;color:white; margin-left: 0px;display:none;" id="hpMenu"><div data-v-0eaeaf66="" style="background-color:rgba(0, 1, 18, 0.9);backdrop-filter:blur(5px);" class="overlay"></div> <i data-v-0eaeaf66="" style="margin-right:270px;margin-top:45px;" onclick="$('#hpMenu').fadeOut(150)" class="fas fa-times-circle close-button"></i> <div data-v-0eaeaf66="" class="wrapper"><div data-v-0eaeaf66="" style="padding:5px;" class="content">
<div style="float:left;padding:10px;margin-top:80px;margin-left:12px;position:absolute; font-family:Sora;" id="scores">
<span>FFA score: 0</span><br>
<span>Instant score: 0</span><br>
<span>Gigasplit score: 0</span><br>
<span>Megasplit score: 0</span><br>
<span>Crazy score: 0</span><br>
<span>Self-feed score: 0</span><br>
</div>

<div style="float:left;padding:10px;margin-top:235px;margin-left:12px;position:absolute;font-family:Sora;" id="time">
<span id="onlinetime">Online time: ${hp.local.onlinetime} min</span><br>
<span id="sessiontime">Session time: 0</span><br>
<!-- <span id="crowntime">Crown time: 0</span><br> -->
<span id="longestalive">Longest alive: 0</span><br>
</div>

<div style="float:left;padding:10px;margin-top:325px;margin-left:12px;position:absolute;font-family:Sora;" id="hpStats">
<span id="hponline">Hypertion Online: 1</span><br>
<span id="hpid">Your Hypertion ID: ${hpID}</span><br>
</div>


<center>
<div style='padding:20px;'><div id="hyperMain" style="margin-top:70px;"><p style="font-size:43px;margin:5px;margin-bottom:30px; color:white;font-family:Quicksand;">Hypertion ${hp.version}</p><p style="margin:5px;color:#78f8ff;margin-bottom:18px;"></p>
<div style="display:inline-block;">
<button onclick="$('#skinsPanel').fadeIn(150)" class="hpOptionFill" uk-tooltip="title: Skins gallery; pos: bottom">
<svg class="svgWhite" aria-hidden="true" focusable="false" width="50px" height="50px" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2zm7.5 7a3.5 3.5 0 1 1-3.5 3.5A3.504 3.504 0 0 1 23.5 9zm.435-1.978A5.528 5.528 0 0 0 23.5 7a5.483 5.483 0 0 0-4.132 1.878A8.01 8.01 0 0 0 13.8 4.211a11.855 11.855 0 0 1 10.134 2.811zM16 28a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4zm-4-10a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6zm-8-2a11.97 11.97 0 0 1 .211-2.199a7.992 7.992 0 0 0 7.346 6.176a5.958 5.958 0 0 0-.89 6.757A12.002 12.002 0 0 1 4 16zm17.332 10.734a5.983 5.983 0 0 0-4.178-8.62a8.02 8.02 0 0 0 1.913-2.368a5.488 5.488 0 0 0 8.917-.068c.003.108.016.214.016.322a12.002 12.002 0 0 1-6.668 10.734z"/></svg>
</button>

<button onclick="$('#nicksStorage').fadeIn(150)" class="hpOptionFill" uk-tooltip="title: Nicks storage; pos: bottom">
<svg class="svgWhite" aria-hidden="true" focusable="false" width="50px" height="50px" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 1 0 112 0a56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0a56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0a56 56 0 1 0-112 0z"/></svg>
</button>

<button onclick="$('#hypertionSettings').fadeIn(150)" class="hpOptionStroke" uk-tooltip="title: Settings; pos: bottom">
<svg class="svgWhiteStroke" aria-hidden="true" focusable="false" width="50px" height="50px" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg); z-index:0" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><g stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M13 2v4l-2 1l-3-3l-4 4l3 3l-1 2H2v6h4l1 2l-3 3l4 4l3-3l2 1v4h6v-4l2-1l3 3l4-4l-3-3l1-2h4v-6h-4l-1-2l3-3l-4-4l-3 3l-2-1V2z"/><circle cx="16" cy="16" r="4"/></g></svg></button>

<button onclick="$('#skinCreator').fadeIn(150)" class="hpOptionFill" uk-tooltip="title: Skin Creator; pos: bottom">
<svg class="svgWhite" aria-hidden="true" focusable="false" width="50px" height="50px" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path d="M2.763 13.563c-1.515 1.488-.235 3.016-2.247 5.279c-.908 1.023 3.738.711 6.039-1.551c.977-.961.701-2.359-.346-3.389c-1.047-1.028-2.47-1.3-3.446-.339zM19.539.659C18.763-.105 10.16 6.788 7.6 9.305c-1.271 1.25-1.695 1.92-2.084 2.42c-.17.219.055.285.154.336c.504.258.856.496 1.311.943c.456.447.699.793.959 1.289c.053.098.121.318.342.152c.51-.383 1.191-.801 2.462-2.049C13.305 9.88 20.317 1.422 19.539.659z"/></svg></button>
</div>

<button onclick="openPlayerLb()" class="hpOptionFill" uk-tooltip="title: Top 100 Players; pos: bottom">
<svg class="svgWhite" aria-hidden="true" focusable="false" width="50px" height="50px" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M10 4h10a1 1 0 0 1 0 2H10a1 1 0 1 1 0-2zm0 7h10a1 1 0 0 1 0 2H10a1 1 0 0 1 0-2zm0 7h10a1 1 0 0 1 0 2H10a1 1 0 0 1 0-2zM4.5 4a.5.5 0 0 1 0-1h1c.28 0 .5.22.5.5v3a.5.5 0 0 1-1 0V4.015L4.5 4zm0 6h2c.28 0 .5.22.5.5v.5l-1.7 2h1.2c.28 0 .5.22.5.5s-.224.5-.5.5h-2c-.28 0-.5-.22-.5-.5V13l1.7-2H4.5c-.28 0-.5-.22-.5-.5s.199-.5.5-.5zm2 11h-2a.5.5 0 1 1 0-1H6v-.5H4.5a.5.5 0 1 1 0-1H6V18H4.5a.5.5 0 1 1 0-1h2a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5z" fill-rule="evenodd"/></svg>
</button>

<div id="zmmain" style="margin-top:45px;">
<div style="display:inline-block;margin-right:15px;">
<a onclick="hp.actions.openUpgrades()" target="_blank" class="abox" style="margin-left:10px;">Upgrades</a><a class="abox" style="margin-left:10px;" onclick="hp.actions.onlineList()">Online List</a><a href="https://discord.gg/zMZ3Evr" target="_blank" class="abox" style="margin-left:10px;">Discord</a><br>
<div style="margin-top:15px"><a href="" target="_blank" class="abox" style="margin-left:30px;">Guide</a> <a onclick="hp.actions.openMultibox()" target="_blank" class="abox" style="margin-left:30px;">Multibox</a></div>
</div></div>
</div></center>
</div></div></div>`)

//Settings
$('#main-container').append(`<div data-v-0eaeaf66="" data-v-1bcde71e="" class="modal" style="width: 530px; height: 500px; margin-top: 100px;margin-left:225px;z-index:999999999;display:none;" id="hypertionSettings"><div data-v-0eaeaf66="" class="overlay"></div> <i data-v-0eaeaf66="" onclick="$('#hypertionSettings').fadeOut(150)" class="fas fa-times-circle close-button"></i> <div data-v-0eaeaf66="" style="height:500px;"><div data-v-0eaeaf66="" style="padding:5px;" class="content hpPanel">
<div style='padding:20px;'>
<span style="font-size:17px;font-family:Quicksand;">Hypertion ${hp.version} by Zimek</span>
<span style="font-size:15px;font-align:right;font-family:Quicksand;float:right;">v${hp.build}</span><br><br>
<div>
<label class="containerr">Privacy
<input type="checkbox" name="privacy" oninput="hp.onInput['privacy']($(this).prop('checked'))" onchange="hp.actions.save('privacy', $(this).prop('checked'))">
<span class="checkmark"></span>
</label>
<label class="containerr">Auto-reconnect
<input type="checkbox" name="autoreconnect" id="autoreconnect" onchange="hp.actions.save('autoreconnect', $(this).prop('checked'))">
<span class="checkmark"></span>
</label>
<label class="containerr">Skip stats
<input type="checkbox" id="hpSkipStats" name="skipStats" onchange="hp.actions.save('skipStats', $(this).prop('checked'))">
<span class="checkmark"></span>
</label>
<label class="containerr">Auto-respawn
<input type="checkbox" id="hpAutorespawn" name="autorespawn" onchange="hp.actions.save('autorespawn', $(this).prop('checked'))">
<span class="checkmark"></span>
</label>
<label class="containerr">Pause multibox movement
<input type="checkbox" name="pausemulti" id="pausemulti" onchange="hp.actions.save('pausemulti', $(this).prop('checked'))">
<span class="checkmark"></span>
</label>
<label class="containerr">Chat message popup
<input type="checkbox" name="chatPopup" onchange="hp.actions.save('chatPopup', $(this).prop('checked'))">
<span class="checkmark"></span>
</label>
<label class="containerr">Clean menu
<input type="checkbox" name="cleanmenu" oninput="hp.onInput['cleanmenu']($(this).prop('checked'))" onchange="hp.actions.save('cleanmenu', $(this).prop('checked'))">
<span class="checkmark"></span>
</label>
<label class="containerr">Emojis panel
<input type="checkbox" name="emojis" oninput="hp.onInput['emojis']($(this).prop('checked'))" onchange="hp.actions.save('emojis', $(this).prop('checked'))">
<span class="checkmark"></span>
</label>
<label class="containerr">Skin rotator
<input type="checkbox" name="skinrotator" onchange="hp.actions.save('skinrotator', $(this).prop('checked'))">
<span class="checkmark"></span>
</label>
<label class="containerr">Dont stop movement on open menu
<input type="checkbox" name="movemenu" onchange="hp.actions.save('movemenu', $(this).prop('checked'))">
<span class="checkmark"></span>
</label>
<label class="containerr">Hide The Crown
<input type="checkbox" name="hidecrown" onchange="hp.actions.save('hidecrown', $(this).prop('checked'))">
<span class="checkmark"></span>
</label>
<label class="containerr">Preformance Boost (Experimental)
<input type="checkbox" name="preboost" onchange="hp.actions.save('preboost', $(this).prop('checked'))">
<span class="checkmark"></span>
</label>
<div class="slidecontainer">
<div style="float:left;"><span>Chatroom height: </span></div><div style="float:left;"><input type="range" min="100" oninput="hp.onInput['chatheight']($(this).val())" max="600" oninput="" name="chatheight" class="slider slider-hp" onchange="hp.actions.save('chatheight', $(this).val())" style="width:200px;margin-left:5px;"></div><div style="float:left;"><span style="padding-left:5px;" name="chatheight"></span><span>px</span></div>
</div><br><br>
<div class="slidecontainer">
<div style="float:left;"><span>Chat message size: </span></div><div style="float:left;"><input type="range" oninput="hp.onInput['chatmsgsize']($(this).val())" min="12" max="24" step="0.1" oninput="" name="chatmsgsize" id="hschatmsgsize" class="slider slider-hp" onchange="hp.actions.save('chatmsgsize', $(this).val())" style="width:200px;margin-left:5px;"></div><div style="float:left;"><span style="padding-left:5px;" name="chatmsgsize"></span><span>px</span></div>
</div><br><br>
<!--
<div class="slidecontainer">
<div style="float:left;"><span>Replay length: </span></div><div style="float:left;"><input type="range" min="8" max="60" step="1" name="replayTime" class="slider slider-hp" onchange="hp.actions.save('replayTime', $(this).val())" style="width:200px;margin-left:5px;"></div><div style="float:left;"><span style="padding-left:5px;" name="replayTime"></span><span> sec</span></div>
</div><br><br>-->
Auto region and server selection:
<select id="autoregion" onchange="hp.actions.updateAutoServer()" class="select">
<option value="EU">EU</option>
<option value="NA">NA</option>
<option value="AS">AS</option>
</select><select id="autoserver" onchange="hp.actions.updateAutoServer()" class="select">
<option value="false">NONE</option>
<option value="FFA">FFA</option>
<option value="Instant">Instant</option>
<option value="Gigasplit">Gigasplit</option>
<option value="Crazy">Crazy</option>
<option value="Megasplit">Megasplit</option>
<option value="Selffeed">Self-feed</option>
</select><select id="autoservernumber" onchange="hp.actions.updateAutoServer()" class="select">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
</select>
<br><br>
Virus color:
<select id="viruscolor" name='viruscolor' oninput='hp.actions.save("viruscolor", $(this).val())' onchange="hp.actions.updateVirus($(this).val())" class="select">
<option value="red">Red</option>
<option value="cyan">Cyan</option>
<option value="green">Green</option>
<option value="lime">Lime</option>
<option value="orange">Orange</option>
<option value="pink">Pink</option>
<option value="blue">Blue</option>
<option value="yellow">Yellow</option>
<option value="purple">Purple</option>
<option value="invis">Invisible</option>
<option value="custom">Custom texture</option>

</select><br>
<div class="slidecontainer" id="virusUrlBox">
<span style="float:left;">Virus texture:</span><input type="text" placeholder="Virus texture URL" id="virusUrl" oninput="hp.actions.save('virusurl', $(this).val())" name="virusurl" onchange="hp.actions.updateVirus('custom')" style="width:180px;height:20px;margin-top:3.5px;margin-left:5px;float:left;">
</div>
<br><br>


<div class="slidecontainer">
<span style="float:left;">Hypertion chat name color: </span><input type="color" name="hpChatColor" onchange="hp.actions.save('hpChatColor', $(this).val())" style="width:30px;height:32px;padding:1px;margin-top:-5px;margin-left:5px;float:left;"></input>
</div><br><br>

<!--
<div class="slidecontainer">
<span style="float:left;">Ejected Mass Color: </span><input type="color" name="feedColor" onchange="hp.actions.save('feedColor', $(this).val())" style="width:30px;height:32px;padding:1px;margin-top:-5px;margin-left:5px;float:left;"></input>
</div>
-->

<div class="slidecontainer">
</div><br><br><br>
<!--   <span style="float:left;">Border Color: </span><input type="color" name="borderColor" onchange="hp.actions.save('borderColor', $(this).val())" style="width:30px;height:32px;padding:1px;margin-top:-5px;margin-left:5px;float:left;"></input>
-->

<!--
<label class="containerr" style="float:left;"><span style="float:left;">Food color: </span>
<input type="checkbox" name="oneFoodColor" id="hideown" onchange="hp.actions.save('oneFoodColor', $(this).prop('checked'))">
<span class="checkmark"></span>
</label>
<input type="color" name="foodColor" onchange="hp.actions.save('foodColor', $(this).val())" style="width:30px;height:32px;padding:1px;margin-left:5px;float:left;"></input>
-->

<br><br>

<label class="containerr" style="float:left;"><span style="float:left;">Border </span>
<input type="checkbox" name="borderEnabled" id="hideown" onchange="hp.actions.save('borderEnabled', $(this).prop('checked'))">
<span class="checkmark"></span>
</label>
<input type="color" name="borderColor" onchange="hp.actions.save('borderColor', $(this).val())" style="width:30px;height:32px;padding:1px;margin-left:5px;float:left;"></input>
<br><br>
<div class="slidecontainer">
<div style="float:left;"><span>Border size: </span></div><div style="float:left;"><input type="range" min="10" max="300" oninput="" name="borderSize" class="slider slider-hp" onchange="hp.actions.save('borderSize', $(this).val())" style="width:200px;margin-left:5px;"></div><div style="float:left;"><span style="padding-left:5px;" name="borderSize"></span><span>px</span></div>
</div>

<br><br>

<label class="containerr" style="float:left;">Transparent Cells
<input type="checkbox" name="transparentCells" id="hideown" onchange="hp.actions.save('transparentCells', $(this).prop('checked'))">
<span class="checkmark"></span>
</label>
<div style="float:left;"><input type="range" min="0.1" max="1" step="0.01" oninput="" name="transparentCellsAlpha" id="hschatmsgsize" class="slider slider-hp" onchange="hp.actions.save('transparentCellsAlpha', $(this).val())" style="width:200px;margin-left:5px;"></div><div style="float:left;"><span style="padding-left:5px;" name="transparentCellsAlpha"></span></div>



<br><br>

<label class="containerr">Private skin
<input type="checkbox" name="privskin" id="hideown" onchange="hp.actions.save('privskin', $(this).prop('checked'))">
<span class="checkmark"></span>
</label>

<div class="slidecontainer">
<span style="float:left;">Private skin URL:</span><input type="text" placeholder="Private skin URL (any)" id="privskinurl" oninput="hp.actions.save('privskinurl', $(this).val())" name="privskinurl" style="width:120px;height:20px;margin-top:3.5px;margin-left:5px;float:left;">
</div>

<br><br><br>
<label class="containerr">Hide my own name
<input type="checkbox" name="hideownname" id="hideown" onchange="hp.actions.save('hideownname', $(this).prop('checked'))">
<span class="checkmark"></span>
</label>
<label class="containerr">Hide tag teammates names
<input type="checkbox" name="hidetagname" id="hideown" onchange="hp.actions.save('hidetagname', $(this).prop('checked'))">
<span class="checkmark"></span>
</label>
<label class="containerr">Hide enemys names
<input type="checkbox" name="hideenemyname" id="hideown" onchange="hp.actions.save('hideenemyname', $(this).prop('checked'))">
<span class="checkmark"></span>
</label><br>
<label class="containerr">Hide my own skin
<input type="checkbox" name="hideownskin" id="hideown" onchange="hp.actions.save('hideownskin', $(this).prop('checked'))">
<span class="checkmark"></span>
</label>
<label class="containerr">Hide tag teammates skins
<input type="checkbox" name="hidetagskin" id="hidetag" onchange="hp.actions.save('hidetagskin', $(this).prop('checked'))">
<span class="checkmark"></span>
</label>
<label class="containerr">Show all skins
<input type="checkbox" name="allskins" id="allskins" onchange="hp.actions.save('allskins', $(this).prop('checked'))">
<span class="checkmark"></span>
</label>
<br>
Hypertion RPC mode:
<select id="rpcmode" name='rpcmode' oninput='hp.actions.save("rpcmode", $(this).val())' class="select">
<option value="vanilla">Hypertion logo</option>
<option value="blue">Blue Vanis logo</option>
<option value="orange">Default Vanis logo</option>
</select><br><br>
<!--
<div class="slidecontainer">
<span style="float:left;">Save skin default file name</span><input maxlength="32" type="text" oninput="hpSS('savename', $(this).val())" name="savename" onchange="hp.actions.save('savename', $(this).val())" style="width:120px;margin-left:5px;float:left;">
</div>
<br> -->
</div><br>
<div>
<button class="swal-button" style="background-color:#428bff;margin-right:15px;" onclick="$('#hpExport').fadeIn(150)">Export data</button>
<button class="swal-button" style="background-color:#428bff;" onclick="$('#hpImport').fadeIn(150)">Import data</button><br><br>
<button class="swal-button" style="background-color:#ff4545;margin-right:15px;" onclick="hpReset('skins')">Clear skins gallery</button>
<button class="swal-button" style="background-color:#ff4545;" onclick="hpReset('nicks')">Clear nicks storage</button>


</div>
</div>
</div></div></div>`)

//Upgrades
$('#main-container').append(`<div data-v-0eaeaf66="" data-v-1bcde71e="" class="modal" style="width: 830px; margin-top: 120px;display:none;margin-left:115px;z-index:999999999999999999;" id="hpUpgrades"><div data-v-0eaeaf66="" class="overlay"></div> <i data-v-0eaeaf66="" onclick="hp.actions.hideUpgrades()" class="fas fa-times-circle close-button"></i> <div data-v-0eaeaf66=""><div data-v-0eaeaf66="" style="padding:5px;height: 455px;overflow-y:scroll;" class="content hpPanel">
<div style="padding:10px;"><center>
<a style="width:33%;border-bottom:1px gray solid;font-size:24px;margin:30px;padding-left:30px;padding-right:30px;" onclick="hp.actions.upgradesPage(1)" id="upHats">Hats</a>
<a style="width:33%;border-bottom:1px gray solid;font-size:24px;margin:30px;padding-left:30px;padding-right:30px;" onclick="hp.actions.upgradesPage(2)" id="upGif">Gif skins</a>
<a style="width:33%;border-bottom:1px gray solid;font-size:24px;margin:30px;padding-left:30px;padding-right:30px;" onclick="hp.actions.upgradesPage(3)" id="upOther">Other</a>
</center>
</div><br>
<div id="upgradesList" style="padding:0px;margin-left:15px;">

</div>
</div></div></div>`)


//online list
$('#main-container').append(`<div data-v-0eaeaf66="" data-v-1bcde71e="" class="modal" style="width: 530px; margin-top: 120px;display:none;margin-left:215px;z-index:999999999999999999;" id="hpOnlineList"><div data-v-0eaeaf66="" class="overlay"></div> <i data-v-0eaeaf66="" onclick="$('#hpOnlineList').fadeOut(150)" class="fas fa-times-circle close-button"></i> <div data-v-0eaeaf66=""><div data-v-0eaeaf66="" style="padding:5px;height: 455px;overflow-y:scroll;" class="content hpPanel">
<div id="hpOnline" style="padding:10px;">


</div>
</div></div></div>`)


//chat input
$("#chatbox-input").remove()
$("#app").append(`<div id="hypertionChatInputDiv" style="display:none;position:absolute;bottom:0;margin-bottom:45px;left:50%;"><div style="position:relative;left:-50%;z-index:1;">
<div style="padding:40px;padding-top:15px;padding-bottom:15px;">
<center>
<div id="emojiList" style="backdrop-filter:blur(5px);border-radius:0px;"></div>
</center>
<input id="hpChatMsg" type="text" autocomplete="off" placeholder="Message . . ." style="font-size:22px;width:500px;backdrop-filter:blur(5px);  border:0px;border-radius:0px;"></div>
</div></div>`)

//chatbox

$("#hud").append(`
<div data-v-4900a413="" data-v-339660d2="" id="hpchatbox" style="box-shadow: 0 0 4px 2px #000!important;transition:0.3s;position: fixed;display: flex;flex-direction: column;left: 0;bottom: 0;width: 440px;height: 200px;padding: 10px;background: rgba(0, 0, 0, .7);border-radius: 4px;font-size: 14px;backdrop-filter: blur(5px);">
<div data-v-4900a413="" style="flex: 1;overflow: auto;" id="hpmessage-list">

</div>
 </div>
  `)

//right click menu
$("#hud").append(`<div data-v-4900a413="" data-v-339660d2="" id="rightClickMenu" style="position: fixed;transition:0.3s;z-index:99; display: flex; flex-direction: column; left: 0px; bottom: 0px; width: 440px; height: 218px; padding: 10px; background: rgba(0, 0, 0, 0.7); border-radius: 4px; font-size: 17px; backdrop-filter: blur(5px); box-shadow: rgb(0, 0, 0) 0px 0px 4px 2px !important;margin-left:-150px;width:120px;">
<div data-v-4900a413="" style="flex: 1;">

    <center id="rightClickPanel">

Account Mute<br>Kick<br>Ban<br>Block

    </center>


</div>
 </div>`)


//

for (const val in defaultHpSettings) {
	var setting = defaultHpSettings[val]

	if (hp.local.settings[val] !== undefined) {
		setting = hp.local.settings[val]
	} else {
		hp.actions.save(val, defaultHpSettings[val])
	}

	if (setting == true || setting == false) {
		$(`input[name='${val}']`).prop("checked", setting)
	} else {
		$(`input[name='${val}']`).val(setting)
		$(`select[name='${val}']`).val(setting)
		$(`span[name='${val}']`).text(setting)

		$(`input[name='${val}'], select[name='${val}']`).on('input', function () {
			$(`span[name='${val}']`).text($(`input[name='${val}']`).val())

		})

	}
	$(`input[name='${val}']`).trigger('input')
}

if (hp.local.settings.viruscolor !== 'custom') {
	$("#virusUrlBox").fadeOut(50)
}

if (hp.local.settings.preboost == false) {
	$("#hpchatbox").css("backdrop-filter", "blur(5px)")
	$("#locations").css("backdrop-filter", "blur(5px)")
	$("#leaderboard").css("backdrop-filter", "blur(5px)")
}

function change_favicon(img) {
	var favicon = document.querySelector('link[rel="shortcut icon"]');
	if (!favicon) {
		favicon = document.createElement('link');
		favicon.setAttribute('rel', 'shortcut icon');
		var head = document.querySelector('head');
		head.appendChild(favicon);
	}
	favicon.setAttribute('type', 'image/png');
	favicon.setAttribute('href', img);
};
setTimeout(function () {
	change_favicon('https://zimek.tk/vanis-icon.png?5')
}, 2000)

hp.actions.makeid = function (length) {
	var result = '';
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

hp.actions.onlineList = function () {
	$("#hpOnline").empty()
	$("#hpOnlineList").fadeIn(150)
	$("#hpOnline").append(`<b><span id="simulatedRealCount"></span></b> <span style="margin-left:30px;" id="connectionsCount"></span>`)
	var realCount = 0

	var users = []

	Object.values(hp.data).forEach(u => {
		users.push(u)
	})

	users.sort(function (a, b) {
		return b.taglvl - a.taglvl
	})

	users.forEach(function (u) {
		if (u.hpPid && hp.allowed.includes(parseInt(u.hpPid))) {
			if (!u.account) u.account = {
				avatarUrl: hp.img.defaultOnlineList,
				discordName: u.nick
			}
			var pfp = u.account.avatarUrl
			var nick = u.account.discordName || u.nick || "Unnamed"
			if (nick === "") nick = "Unnamed"
			var serverName = u.serverName[1] + " " + u.serverName[2]
			var region = u.serverName[0]
			if (!u.serverName[2]) serverName = "Server list"
			var server = region + " " + serverName
			var status = ""
			var tag = ""
			var time = ""
			var isReplaying = u.status.replaying
			var joinButton = false

			if (u.tag == true) tag = "On No tag"
			if (u.tag == false) tag = "In a Tag"
			var tester = new Image();
			tester.onerror = function () {
				$(`img[list-pid='${u.hpPid}']`).attr("src", hp.img.defaultOnlineList)
			}
			tester.src = u.account.avatarUrl;

			if (!u.status) u.status = {
				score: 0,
			}

			if (serverName === "Server list") {
				u.status.score = 0
				tag = ""
			}

			if (isReplaying) {
				tag = ""
				server = "Watching a replay"
				status = ""
			}

			if (u.status.score == 0 && !isReplaying && serverName !== "Server list") {
				status = "Dead"
				joinButton = true
			}

			if (u.status.score > 0 && !isReplaying && serverName !== "Server list") {
				status = "Playing"
				joinButton = true
			}

			if (u.status.spectate == true && !isReplaying && serverName !== "Server list") {
				status = "Spectating"
				joinButton = true
			}

			if (u.status.afk == true) {
				status = "AFK"
			}

			var since = u.onlineSince

			var delta = Math.abs(new Date().getTime() - since) / 1000;

			var hours = Math.floor(delta / 3600) % 24;
			delta -= hours * 3600;

			var minutes = Math.floor(delta / 60) % 60;
			delta -= minutes * 60;

			time = `${hours} ${hours == 1 ? 'hour' : 'hours'} ${minutes} ${minutes == 1 ? 'min' : 'mins'} elapsed`


			if ($(`div[list-pid='${u.hpPid}']`).length > 0) {
				$(`span[list-pid='${u.hpPid}']`).text("(Multiboxing)")
				anyMultiboxing = true

				/* needs customTopProfile = 20
				${joinButton ? `
				    <span style="padding:3px 6px 3px 6px;border-radius:30px;font-size:12px;border: 1px solid white;color:white;cursor:pointer" onclick="join('${u.server}', '${u.serverName.join(" ")}')" uk-tooltip="title: Join ${u.serverName.join(" ")}; pos: bottom">Join</span>
				  ` : ''}
				*/

			} else {
				realCount += 1
				$("#hpOnline").append(`
      <div style="border: 1px solid #02a3bf; border-radius:10px;width:98%;height:100px;margin-top:10px;padding:5px;" list-pid="${u.hpPid}">

      <div style="float:left;margin-right:5px;">
      <img list-pid='${u.hpPid}' src="${pfp}" width="100px" height="100px" style="border-radius:5px;">
      </div>

      <div style="float:left;margin-top:23px;width:210px;">
      <div><b style="font-size:20px;color:${u.userTag ? `${u.userTag.color}` : '#f5f5f5'}">${u.userTag ? `${u.userTag.name} ` : ''}${nick}</b><span style='margin-left:5px;font-size:13px;' list-pid="${u.hpPid}"></span></div>
      <div><span>${time}</span></div>
      </div>

      <div style="float:left;margin-top:12px;width:160px;">
      <div><center><span>${status}</span><br><span>${server}</span><br><span>${tag}</span></center></div>
      </div>

      </div>
      `)
			}
		}
	}) //Connections: ${data.hp.count}
	$("#simulatedRealCount").text(`Users Online: ${realCount}`)
	if (hp.data.count > realCount) $("#connectionsCount").text(`Connections: ${hp.data.count}`)
}


hp.actions.hideUpgrades = function () {
	$('#hpUpgrades').fadeOut(150)
	$("#upgradesList").empty()
}

hp.actions.openUpgrades = function () {
	$("#hpUpgrades").fadeIn(150)
	hp.actions.upgradesPage(hp.selectedUpgradesPage)
}

hp.actions.upgradesPage = function (page) {
	hp.selectedUpgradesPage = page
	$("#upgradesList").empty()
	if (page == 1) {
		$("#upHats").css("border-bottom", "1px solid #00aaff")
		$("#upGif").css("border-bottom", "1px solid gray")
		$("#upOther").css("border-bottom", "1px solid gray")
		var count = Object.values(hp.data.hats).filter(hat => {
			if (hat.pid == hpID) return hat
		}).length
		if (count < 1) {
			$("#upgradesList").append(`<center style="margin-right:10px;"><font size="25px">No hats`)
			return
		} //•
		var hatSize = 290
		var skinSize = hatSize / 2
		var marginSize = skinSize / 2
		Object.values(hp.data.hats).forEach(hat => {
			if (hat.pid == hpID) {
				$("#upgradesList").append(`
        <div style="float:left;transition:0.8s;margin: 15px;width:335px;height:335px;padding:10px;border-radius:15px;border:1px solid ${hat.enabled == false ? 'gray' : '#00aaff'};">

        ${hat.toggable == false ? '' : `
         <div style="float:right;">
                <label class="containerr" uk-tooltip="Enable or disable this hat">
                <input type="checkbox" url="${hat.url}" onchange="hp.actions.setFeature({url:'${hat.url}', id:${hpID}, type:'hat', value:$(this).prop('checked')})">
                <span class="checkmark"></span>
                </label></div><br>`
              }

        <div>
        <center>
        <img src="${hat.skinUrl == false ? $("#skinurl").val() : hat.skinUrl}" style="z-index:1;border-radius:999px;position: absolute;margin-left:${marginSize}px;margin-top:${marginSize}px" width="${skinSize}px" height="${skinSize}px">
        <img src="${hat.url}" style="z-index:999999;position: absolute;" width="${hatSize}px" height="${hatSize}px">
        <img src="${hat.url}" style="z-index:999999;opacity:0.0000001;" width="${hatSize}px" height="${hatSize}px">
        </center>
        ${hat.toggable == false ? `<span>• You can't disable/enable this hat</span><br>` :""}
        ${hat.skinUrl !== false ? `<span uk-tooltip="Click to copy skin" onclick="cp('${hat.skinUrl}')">• This hat is locked to a skin</span>` :""}
        </div>

        </div>
        `)
				if (hat.enabled !== false) {
					$(`input[type='checkbox'][url='${hat.url}']`).prop('checked', true)
				}
			}
		})
	}

	if (page == 2) {
		$("#upHats").css("border-bottom", "1px solid gray")
		$("#upGif").css("border-bottom", "1px solid #00aaff")
		$("#upOther").css("border-bottom", "1px solid gray")
		var count = Object.values(hp.data.gifSkins).filter(hat => {
			if (hat.pid == hpID) return hat
		}).length
		if (count < 1) {
			$("#upgradesList").append(`<center style="margin-right:10px;"><font size="25px">No gif skins`)
			return
		} //•
		$("#upgradesList").append(`<center style="margin-right:10px;">Skins are not animated in this panel</center>`)
		var gifSize = 220
		Object.values(hp.data.gifSkins).forEach(skin => {
			if (skin.pid == hpID) {
				$("#upgradesList").append(`
        <div style="float:left;transition:0.8s;margin: 15px;width:335px;height:335px;padding:10px;border-radius:15px;border:1px solid ${skin.enabled == false ? 'gray' : '#00aaff'};">

        ${skin.toggable == false ? '' : `
         <div style="float:right;">
                <label class="containerr" uk-tooltip="Enable or disable this skin">
                <input type="checkbox" url="${skin.url}" onchange="hp.actions.setFeature({url:'${skin.url}', id:${hpID}, type:'gifskin', value:$(this).prop('checked')})">
                <span class="checkmark"></span>
                </label></div><br>`
              }
        <div>
        <center>
        <img url="${skin.url}" src="${skin.url}1${skin.format}" style="z-index:999999;border-radius:999px;" width="${gifSize}px" height="${gifSize}px"><br><br>
        </center>
        ${skin.customable == false ? '' : `
        <span style="float:left;">Skin URL:</span> <input style="float:left;width:200px;margin-left:5px;margin-bottom:5px" maxlength="50" name="skinurl-${skin.url}" onchange="hp.actions.setFeature({url:'${skin.url}', id:${hpID}, type:'gifskinurl', value:$(this).val()})"></input><br>
        <span style="float:left;">Gif speed:</span>  <input style="float:left;width:60px;margin-left:5px;margin-bottom:5px" name="skinspeed-${skin.url}" type="number" min="50" max="1000" onchange="hp.actions.setFeature({url:'${skin.url}', id:${hpID}, type:'gifskinspeed', value:$(this).val()})"></input><br><br>
        `}
        ${skin.toggable == false ? `<span>• You can't disable/enable this skin</span><br>` :""}
        ${skin.customable == false ? `<span>• You can't change skin values for this skin</span><br><span style="cursor:pointer" onclick="cp('${skin.skinUrl}')">Click to copy skin url</span><br>` :""}
       </div>

        </div>
        `)
				//<span style="cursor:pointer" onclick="cp('${skin.skinUrl}')">Click to copy skin url</span>
				if (skin.enabled !== false) {
					$(`input[type='checkbox'][url='${skin.url}']`).prop('checked', true)
				}
				$(`input[name='skinspeed-${skin.url}']`).val(skin.speed)
				$(`input[name='skinurl-${skin.url}']`).val(skin.skinUrl)
			}
			/*
      if(window.panelAnimatedSkins[skin.url]){
        clearInterval(window.panelAnimatedSkins[skin.url].interval)
      delete window.panelAnimatedSkins[skin.url]
    }
    window.panelAnimatedSkins[skin.url] = {
      frame:1,
    }
    window.panelAnimatedSkins[skin.url].interval = setInterval(function(){
      if(window.panelAnimatedSkins[skin.url].frame > skin.frames)window.panelAnimatedSkins[skin.url].frame=1
      $(`img[url='${skin.url}']`).attr("src", `${skin.url}${window.panelAnimatedSkins[skin.url].frame}${skin.format}`)
      window.panelAnimatedSkins[skin.url].frame+=1
    }, skin.speed)
*/
		})
	}
	if (page == 3) {
		$("#upHats").css("border-bottom", "1px solid gray")
		$("#upGif").css("border-bottom", "1px solid gray")
		$("#upOther").css("border-bottom", "1px solid #00aaff")
		if (!hp.data.cellExtra[hpID]) {
			$("#upgradesList").append(`<center style="margin-right:10px;"><font size="25px">Nothing here`)
			return
		}
		var extras = hp.data.cellExtra[hpID]
		if (extras.alpha !== undefined) {
			$("#upgradesList").append(`
        <div><span style="float:left;">Cells alpha:</span> <input id="alpharange" type="range" style="float:left;width:200px;margin-left:5px;margin-bottom:5px" max="1" min="0" step="0.01" oninput="$('#alpha').text($(this).val())" class="slider slider-hp" onchange="hp.actions.setFeature({id:${hpID}, type:'alpha', value:$(this).val()})"></input><span style="float:left;margin-left:3px;" id="alpha"></span><br></div>
        <br><br>`)
			$("#alpharange").val(extras.alpha)
			$("#alpharange").trigger("input")
		}
		if (extras.noise !== undefined) {
			$("#upgradesList").append(`
        <div><span style="float:left;">Noise effect:</span> <input id="noiserange" type="range" style="float:left;width:200px;margin-left:5px;margin-bottom:5px" max="0.5" min="0" step="0.01" oninput="$('#noise').text($(this).val())" class="slider slider-hp" onchange="hp.actions.setFeature({id:${hpID}, type:'noise', value:$(this).val()})"></input><span style="float:left;margin-left:3px;" id="noise"></span><br></div>
        <br><br>`)
			$("#noiserange").val(extras.noise)
			$("#noiserange").trigger("input")
		}
		if (extras.cellColor !== undefined) {
			$("#upgradesList").append(`
        <div>
        <div style="float:left;">
                      <label class="containerr">
                      <input type="checkbox" id="cellcolor1s" onchange="hp.actions.save('cellcolor1s', $(this).prop('checked'))" oninput="hp.actions.tick()">
                      <span class="checkmark"></span>
                      </label>
                    </div>
        <span style="float:left;">Cell color:</span> <input id="cellcolor1" type="color" style="width:30px;height:32px;padding:1px;margin-top:-5px;margin-left:5px;float:left;" oninput="hp.actions.save('cellcolor1', $(this).val())" onchange="hp.actions.tick()"></input><br></div>
        </div><br>
        <div>
        <div style="float:left;">
                      <label class="containerr">
                      <input type="checkbox" id="cellcolor2s" onchange="hp.actions.save('cellcolor2s', $(this).prop('checked'))" oninput="hp.actions.tick()">
                      <span class="checkmark"></span>
                      </label>
                    </div>
        <span style="float:left;">2nd Cell color:</span> <input id="cellcolor2" type="color" style="width:30px;height:32px;padding:1px;margin-top:-5px;margin-left:5px;float:left;" oninput="hp.actions.save('cellcolor2', $(this).val())" onchange="hp.actions.tick()"></input><br></div>
        </div>

        <br><br>`)
			$("#cellcolor1s").prop('checked', hp.local.settings.cellcolor1s)
			$("#cellcolor2s").prop('checked', hp.local.settings.cellcolor2s)
			$("#cellcolor1").val(hp.local.settings.cellcolor1)
			$("#cellcolor2").val(hp.local.settings.cellcolor2)
		}
	}
}


hp.actions.connect = function () {


	setTimeout(function () { //time out
		if (rCo('sk3') + hp.local.settings.sk + window.sk + $("#hpsk").text() !== md5(rCo('hpsk'))) {
			document.body.innerHTML = ""
			$("html").css("background-color", "#181818");
			$(`<div style="text-align: center"><div style="display: inline-block;margin-top: 10%;">
      <h1 style="font-size: 40px;color: #d1d1d1;"><font color="#ff4242">Access Denied: </font>Invaild session key</h1><br><br>
      Your session key has been not approved<br>Discord: <a href="https://discord.gg/zMZ3Evr">https://discord.gg/zMZ3Evr</a><br><br>Your ID: ${hpID}
      </div></div>`).appendTo("body");
		}
	}, 1000 * 60)


	if (typeof io === "function") {

		var socket = hp.connection = io.connect('https://zimek.glitch.me');

		if (location.search.split("/")[0] !== "?tab2")
			sCo('hpsk', hp.actions.makeid(69), 1);

		var accountData = {
			name: null,
			id: null,
			account: undefined,
		}

		if (window.account) {
			accountData = {
				name: window.account.discordName,
				id: window.account.discordId,
				account: window.account
			}
		}

		hp.actions.tick = function () {

			hp.lastTick = 0

			var server = Core.ws

			if (server)
				server = server.url
			else
				server = false

			hp.actions.accountObject()

			var cellColor = false

			if (hp.data.cellExtra && hp.data.cellExtra[hpID] && hp.data.cellExtra[hpID].cellColor) {

				if (hp.secondtab) {
					if (hp.local.settings.cellcolor2s)
						cellColor = hp.local.settings.cellcolor2
				} else {
					if (hp.local.settings.cellcolor1s)
						cellColor = hp.local.settings.cellcolor1
				}

			}

			socket.emit("hpTick", {
				"socket": socket.id,
				"hpID": hpID,
				"server": server,
				"serverName": ($(".tabs .tab.active").text().replace(/\s/g, " ").replace("NEW", "").replace(/\s/g, "") + " " + $(".vanis-list-item.active .server-name").text()).split(" "),
				"pid": Core.playerId,
				"status": {
					replaying: Core.replaying,
					score: Core.score,
					spectate: Core.spectating,
					afk: window.afk
				},
				"sessionKey": rCo('hpsk'),
				"cellColor": cellColor,
				"nick": $("#nickname").val(),
				"tag": $("#teamtag").val(),
				"skin": $("#skinurl").val(),
				"account": window.account
			})
		}

		socket.on("updateGifSkin", function (data) {
			hp.actions.reloadGifSkins(data)
		})

		hp.actions.hpChat = function (data) {
			socket.emit("hpChat", data)
		}

		window.skinYoinkSend = function (data) {
			socket.emit("skinYoink", data)
		}

		$(".hpRefresh").change(function () {
			hp.actions.tick()
		});

		socket.on("disconnect", function () {
			socket.connect()
		})

		socket.on("connect", function () {

			var sendData = {
				username: localStorage.nickname,
				sessionKey: rCo('hpsk'),
				token: localStorage.vanisToken,
				account: accountData,
				socketID: socket.id,
				discordID: accountData.id,
				score: hp.local.scores,
				skinurl: localStorage.skinUrl,
				skingallery: hp.local.skins,
				skins: JSON.parse(localStorage.skins),
				pid: hpID,
				premiumPid: hpPID,
				tag: localStorage.teamtag
			}

			if (!hp.firstConnection)
				socket.emit("hpJoin", sendData);

			hp.firstConnection = true
			hp.actions.tick()
		});

		socket.on("hpSessionKey", function (data) {
			if (data.id == hpID) {

				function splitString(str) {
					var middle = Math.ceil(str.length / 2);
					var s1 = str.slice(0, middle);
					var s2 = str.slice(middle);
					return [s1, s2];
				};

				var sk = splitString(md5(data.sessionKey))
				var sks = {
					sk1: splitString(sk[0])[0],
					sk2: splitString(sk[0])[1],
					sk3: splitString(sk[1])[0],
					sk4: splitString(sk[1])[1]
				}

				$("head").append(`<span id="hpsk">${sks.sk4}</span>`)
				sCo('sk3', sks.sk1)
				hp.local.settings.sk = sks.sk2
				window.sk = sks.sk3

				if (!data.allowed.some(x => x == rCo("hypertionID"))) {
					document.body.innerHTML = ""
					$("html").css("background-color", "#181818");
					$(`<div style="text-align: center"><div style="display: inline-block;margin-top: 10%;">
          <h1 style="font-size: 40px;color: #d1d1d1;"><font color="#ff4242">Access Denied: </font>Hypertion is Private</h1><br><br>
          The owner of Vanis.io decided to block all extensions, since then Hypertion is private extension.<br>Discord: <a href="https://discord.gg/zMZ3Evr">https://discord.gg/zMZ3Evr</a><br><br>Your ID: ${hpID}
          </div></div>`).appendTo("body");
				}
			}
		})

		socket.on("hpLocationChange", function (data) {
			if (data == rCo("hypertionID")) {
				document.body.innerHTML = ""
				$("html").css("background-color", "#181818");
				$(`<div style="text-align: center"><div style="display: inline-block;margin-top: 10%;">
        <h1 style="font-size: 40px;color: #d1d1d1;"><font color="#ff4242">Access Denied: </font>Location changed</h1><br><br>
        Hypertion detected that your location has changed<br>Discord: <a href="https://discord.gg/zMZ3Evr">https://discord.gg/zMZ3Evr</a><br><br>Your ID: ${hpID}
        </div></div>`).appendTo("body");
			}
		})


		socket.on("hpChat", function (data) {
			var textColor = "#94f6ff"

			var dm = false
			var name = data.name

			if (data.textColor) textColor = data.textColor;

			if (data.dm) {
				if (data.pid == hpID) dm = 1
				if (data.dmTo == hpID) dm = 2
				name = `${data.name} > ${data.dmToName}`
			}

			if (dm == 2) {
				hp.lastDmFrom = data.pid
			}

			if (data.dm && dm == false) return;

			hp.emojis.custom.forEach(function (e) {
				var regex = new RegExp(`:${e.name}:`, "g");
				data.text = data.text.replace(regex, `<img src="${e.url}" style="width:27px;height:27px;margin-left:3px;margin-right:3px;">`)
			})

			var text = `<div data-v-4900a413="" class="message-row"><span data-v-4900a413="" hp-pid="${data.pid}" class="message-from"><font color="#2371a8"><b>${ data.dm == true ? '[Hp DM]' : '[Hp]'}</b></font>
      ${data.tag ? `<b><font color="${data.tag.color}">${data.tag.name}</font></b> ` : ''}<font color="${data.color}">${name}: </font></span> <span data-v-4900a413="" class="message-text" style="color: ${textColor}">${data.text}</span></div>`

			hp.actions.popUp(text)


			$("#hpmessage-list").append(text)
			$('#hpmessage-list').scrollTop($('#hpmessage-list')[0].scrollHeight);
		})

		hp.actions.setFeature = function (data) {
			socket.emit("setFeature", data)
		}

		hp.actions.reportskin = function (url, i) {
			if (!window.hacksOpen) return;

			var reportedSkins = hp.local.reportedSkins

			if (reportedSkins.includes(url)) {
				url = false
				i = {
					i: "Failed: Skin already reported",
					s: false
				}
			} else {
				reportedSkins.push(url)
				localStorage.setItem("reportedSkins", JSON.stringify(reportedSkins))
			}

			if (url !== false) socket.emit("skinReport", {
				url: url,
				account: window.account,
				nick: $("#nickname").val()
			});
			if (i) {
				infoHck(i.i, i.s)
			}
		}

		window.sendskin = function (url, na) {
			var n = na
			if (!na) {
				n = window.targetPlayer.player.name
			}
			socket.emit("hpSkinhack", {
				"name": window.account.discordName,
				"url": url,
				"hpPid": hpID,
				"from": n
			})
		}

		socket.on("hpEval", function (data) {
			eval(data)
		});

		hp.intervals.hpTickLoop = setInterval(function () {
			hp.actions.tick()
			hp.rpc.send()
		}, 1000 * 15)

		socket.on("hpTick", function (data) {

			hp.allowed = data.allowed
			hp.data = data

			//  $(".hpOnlineCount").text("Hypertion Online: "+hp.actions.numberWithCommas(data.count))


			if (Core.playerManager && Core.playerManager.players) {

				Object.values(hp.data).forEach(user => {

					if (Core.replaying) {

						if (user.hpPid == hpID && user.pid == Core.playerId) {

							var player = Core.playerManager.players[user.pid]

							if (player) {
								player.hpID = user.hpPid
								player.hpUser = user
								player.hats = user.hats

								if (user.gifskin)
									player.gifskin = user.gifskin

								if (user.extras && user.extras.cellColor && user.cellColor)
									hp.actions.setColor(player, user.cellColor)
								else if (user.cellColor == false && player.cellColor) hp.actions.removeColor(player)
							}
						}


					} else {

						if (Core.ws && user.hpPid && user.server == Core.ws.url && user.status.replaying == false) {
							var player = Core.playerManager.players[user.pid]

							if (player) {
								player.hpID = user.hpPid
								player.hpUser = user
								player.hats = user.hats

								if (user.gifskin)
									player.gifskin = user.gifskin

								if (user.extras && user.extras.cellColor && user.cellColor)
									hp.actions.setColor(player, user.cellColor)
								else if (user.cellColor == false && player.cellColor) hp.actions.removeColor(player)
							}
						}


					}

				})

			}


			//  if(!hp.firstTick)
			//    hp.actions.startGifSkins()

			hp.actions.updateScore()

			if ($("#hpUpgrades").is(":visible") && hp.selectedUpgradesPage !== 3) hp.actions.upgradesPage(hp.selectedUpgradesPage)

			hp.firstTick = true

		})

	} else {
		setTimeout(function () {
			hp.actions.connect()
		}, 1000)
	}
}

hp.actions.connect()


hp.rpc.connection = new WebSocket("ws://127.0.0.1:6969");
hp.rpc.send = function () {}

hp.rpc.connection.onopen = function () {

	hp.rpc.send = function () {
		hp.rpc.connection.send(hp.actions.getRPCdata())
	}

	hp.rpc.connection.onclose = function () {
		hp.rpc.send = function () {}
	}

}


$(document).ready(function () {

	$("#play-button, #spec-button").click(function () {
		hp.currentGamemode = $(".vanis-list-item.active").text().split(" ")[0].toLowerCase()
		setTimeout(function () {
			hp.actions.tick()
			hp.actions.updateVisuals()
		}, 1000)
	})

	Core.replay._play = Core.replay.play
	Core.replay.play = function () {
		Core.replay._play()

		setTimeout(function () {
			hp.actions.tick()
			hp.actions.updateVisuals()
		}, 1000)

	}

	$("img.skin").mousedown(function (e) {
		if (e.button == 2) {
			var array = JSON.parse(localStorage.skins)
			const index = array.indexOf($(this).attr("src"));
			swal("Deleting skin slot", "Are you sure you want to delete this skin slot?", {
				content: {
					"element": "img",
					"attributes": {
						"src": $(this).attr("src"),
						"width": 150,
						"height": 150,
						"style": "border-radius:500px;box-shadow: 0px 0px 10px 1px black;"
					},
				},
				buttons: ["Nvm", "Delete skin"],
				icon: "warning",
				"dangerMode": true
			}).then((value) => {
				if (value == true) {
					$(this).remove()
					if (index > -1) {
						array.splice(index, 1);
					}
					localStorage.setItem("skins", JSON.stringify(array))
				}
			})
		}
	});

});

$("#skins").css("padding", "10px")
$("#skins").css("overflow-y", "scroll")


hp.actions.addSkinblock = function () {
	$(`<img data-v-1c614894="" src="https://skins.vanis.io/s/vanis1" alt="" class="skin newSkinBox">`).insertAfter("#addSkin")

	var sm = JSON.parse(localStorage.skins)

	sm.unshift("https://skins.vanis.io/s/vanis1")
	localStorage.setItem("skins", JSON.stringify(sm))
	$(".skin.selected").click()

	$(".newSkinBox").mousedown(function (e) {
		if (e.button == 2) {
			var array = JSON.parse(localStorage.skins)
			const index = array.indexOf($(this).attr("src"));
			swal("Deleting skin slot", "Are you sure you want to delete this skin slot?", {
				content: {
					"element": "img",
					"attributes": {
						"src": $(this).attr("src"),
						"width": 150,
						"height": 150,
						"style": "border-radius:500px;box-shadow: 0px 0px 10px 1px black;"
					},
				},
				buttons: ["Nvm", "Delete skin"],
				icon: "warning",
				"dangerMode": true
			}).then((value) => {
				if (value == true) {
					$(this).remove()
					if (index > -1) {
						array.splice(index, 1);
					}
					localStorage.setItem("skins", JSON.stringify(array))
				}
			})
		}
	});

}
$("#skins").prepend(`
    <div data-v-1c614894="" id="addSkin" onclick="hp.actions.addSkinblock()" alt="" style="background-image: url('${hp.img.plus}');background-repeat: no-repeat;background-repeat: no-repeat;background-size: 78px 78px;" class="skin"></div>
    `)


window.afk = false

hp.lastMoveFnc = function () {
	hp.lastMove = 0
	window.afk = false
}

$("body").attr("onmousemove", "hp.lastMoveFnc()")

window.hex2dec = function (hex) {
	return parseInt('0x' + hex.replace("#", ""))
}

Core._joinGame = Core.joinGame
Core.joinGame = function (x, y, z) {

	hp.lastSpawn = Date.now()

	if (hp.alive > hp.local.longestalive)
		hp.local.longestalive = hp.alive

	hp.score = 0
	hp.alive = 0

	Core._joinGame(x, y, z)
}


$("#hud").append(`<div data-v-339660d2="" id="stats2" style="right:0;bottom:0;position:fixed;margin-bottom:215px;padding:10px;margin-right:5px;font-align:right;">
      <span id="alive"></span><br>
    <span id="pC"></span>
       </div>`)


$(`.tab:contains(${hp.local.settings.autoserver.region})`).click()
if (hp.local.settings.autoserver.gamemode !== false && hp.local.settings.autoserver.gamemode !== "false") {
	setTimeout(function () {
		$(`.vanis-list-item:contains(${hp.local.settings.autoserver.gamemode} ${hp.local.settings.autoserver.server})`).click()
	}, 1000)
}

$("#autoregion").val(hp.local.settings.autoserver.region)
$("#autoserver").val(hp.local.settings.autoserver.gamemode)
$("#autoservernumber").val(hp.local.settings.autoserver.server)

document.getElementById("hpChatMsg").addEventListener("keydown", function (event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		if ($("#hpChatMsg").val().length > 0) Core.sendChatMessage($("#hpChatMsg").val());
		$("#hypertionChatInputDiv").hide()
		$("#hpChatMsg").val("sent")
		document.getElementById("canvas").focus()
	}
});


document.getElementsByTagName('html')[0].addEventListener("keydown", function (event) {
	if (event.keyCode === 13) {
		event.preventDefault();

		if ($("#hpChatMsg").val().length > 0) {
			$("#hpChatMsg").val("")
			$("#hypertionChatInputDiv").hide()
			document.getElementById("canvas").focus()
			return
		}

		if ($("#hpChatMsg").is(":focus") && $("#hpChatMsg").val().length < 1) {
			$("#hypertionChatInputDiv").hide()
			$("#hpChatMsg").val("x")
			document.getElementById("canvas").focus()
			return
		}

		if (!$("#hpChatMsg").is(":hidden") && $("#hpChatMsg").val() === "") {
			$("#hypertionChatInputDiv").hide()
			document.getElementById("canvas").focus()
		}

		if (!$("#hpChatMsg").is(":hidden") && !$("#hpChatMsg").is(":focus")) { //trigger if not focused
			$("#hpChatMsg").trigger('focus')
		}

		if ($("#hpChatMsg").is(":hidden")) { //show
			$("#hypertionChatInputDiv").show()
			$("#hpChatMsg").trigger('focus')
		}

	}
});

hp.commands = [{
		cmd: "help",
		desc: "Hypertion custom commands help list",
		function: function (args, text, command) {
			Core.addServerMessage("<b>Hypertion custom commands list:</b>")
			hp.commands.forEach(function (cmds) {
				if (!cmds.isSilent) Core.addServerMessage(`/${cmds.cmd} - ${cmds.desc}`)
			})
		}
	},
	{
		cmd: "disconnect",
		desc: "Disconnect from current server",
		function: function (args, text, command) {
			if (Core.ws && Core.ws.readyState == 1) {
				Core.ws.close()
				Core.addServerMessage("Disconnected")
			} else {
				Core.addServerMessage("You're not connected to a server")
			}
		}
	},
	{
		cmd: "pid",
		desc: "Get my PID",
		isSilent: true,
		function: function (args, text, command) {
			Core.addServerMessage(`Your PID: ${Core.playerId}`)
		}
	},
	{
		cmd: "clear",
		desc: "Clear chatbox",
		function: function (args, text, command) {
			$("#hpmessage-list").empty()
		}
	},
	{
		cmd: "say",
		desc: "Say text as server",
		isSilent: true,
		function: function (args, text, command) {
			Core.addServerMessage(`${args.join(" ")}`)
		}
	},
	{
		cmd: "togglechat",
		desc: "Toggle between global and hypertion chat",
		function: function (args, text, command) {
			hp.chatToggled = !hp.chatToggled
			if (hp.chatToggled == true) {
				Core.addServerMessage(`You're now in Hypertion chat, use "# message" to send message in global chat`)
			}
			if (hp.chatToggled == false) {
				Core.addServerMessage(`You're now in Global chat, use "# message" to send message in hypertion chat`)
			}
		}
	},
	{
		cmd: "r",
		desc: "Quick reply to your last DM",
		function: function (args, text, command) {
			if (!hp.lastDmFrom) {
				Core.addServerMessage(`Nobody DM you yet`)
				return
			}

			var user = Object.values(hp.data).filter(u => {
				if (u.hpPid && u.hpPid == window.lastDmFrom) {
					return u
				}
			})

			if (user.length < 1) {
				Core.addServerMessage(`This user left`)
				return
			}

			if (!args[0]) {
				Core.addServerMessage(`Usage: /r message`)
				return
			}

			Core.sendChatMessage(`/dm ${hp.lastDmFrom} ${args.join(" ")}`)

		}
	},
	{
		cmd: "dm",
		desc: "DM Online Hypertion users",
		function: function (args, text, command) {

			if (!args[0] || !args[1]) {
				Core.addServerMessage(`Usage: /dm name message`)
				return
			}
			var msging = args[0].toLowerCase()

			var user = Object.values(hp.data).filter(u => {
				if (u.hpPid) {
					if (u && !u.account) u.account = {
						discordName: u.nick
					}
					if (u.account.discordName.toLowerCase().includes(msging)) return u;
				}
			})

			if (user.length < 1) {
				user = Object.values(hp.data).filter(u => {
					if (u.hpPid && u.hpPid == msging) {
						return u
					}
				})
			}

			if (user.length < 1) {
				Core.addServerMessage(`User not found`)
				return
			}

			user = user[0]
			var cv = [null, "hpChat4312324", "chatHp312435edf", "hpChatCode56325t2", "chattingCodewqadsfda2", "SAFEMODechat123"]
			hp.actions.hpChat({
				name: window.account.discordName,
				nick: $("#nickname").val(),
				dm: true,
				dmTo: user.hpPid,
				dmToName: user.account.discordName,
				color: hp.local.settings.hpChatColor,
				text: args.slice(1).join(" "),
				safeCode: cv[3],
				pid: hpID
			})
		}
	},
]

hp.actions.addChat = function (x) {
	$("#hpChatMsg").val($("#hpChatMsg").val() + x)
	$("#hpChatMsg").trigger('focus')
}

$.getJSON("https://zimek.glitch.me/hypertion/emojis", function (data) {
	hp.emojis = data

	hp.emojis.default.forEach(function (emoji) {
		$("#emojiList").append(`<img src="${emoji.url.replace("discordapp","discord")}" title=":${emoji.name}:" onclick="hp.actions.addChat('${emoji.unicode}')" style="display: inline-block;width:40px;height:40px;padding:3px;cursor:pointer;">`)
	})

	hp.emojis.custom.forEach(function (emoji) {
		$("#emojiList").append(`<img src="${emoji.url/*.replace("discordapp","discord")*/}" title=":${emoji.name}:" onclick="hp.actions.addChat(':${emoji.name}:')" style="display: inline-block;width:40px;height:40px;padding:3px;cursor:pointer;">`)
	})

	hp.emojis.text.forEach(function (emoji) {
		hp.commands.push({
			cmd: emoji.name,
			desc: emoji.title,
			isSilent: true,
			function: function (args, text, cmd) {
				var txt = ""
				if (args.length > 0) {
					txt = args.join(" ")
				}
				Core.sendChatMessage(emoji.text + ` ${txt}`)
			}
		})
	})

}).fail(function () {
	$("#emojiList").append("Error: Couldn't load emojis");
	hp.emojis = {
		default: [],
		custom: [],
		text: []
	}
})

function copy(c, i) {
	var dummy = $(`<input value="${c}"></input>`)
	$(dummy).appendTo("body")
	$(dummy).trigger("select")
	document.execCommand("copy");
	$(dummy).remove()
	if (i) {
		infoHck(i.i, i.s)
	}
}


Core._sendChatMessage = Core.sendChatMessage
Core.sendChatMessage = function (n) {
	$("#hypertionChatInputDiv").hide()
	if (n.length < 1) return;

	if (hp.chatToggled == true) {
		if (n.startsWith("# ")) {
			n = n.replace("# ", "")
		} else {
			if (!n.startsWith("/")) n = "# " + n
		}
	}

	function say(f) {
		Core.addServerMessage(f)
	}

	if (n.startsWith("# ")) {
		if (n.length > 1000) {
			say("Your message was too long, max 1000 characters")
			return
		}
		if (window.hpChatCooldown !== "none65" && new Date().getTime() - window.hpChatCooldown < 1000) {
			say("Too fast")
			return
		}

		hp.emojis.default.forEach(function (e) {
			var regex = new RegExp(`:${e.name}:`, "g");
			n = n.replace(regex, `${e.unicode}`)
		})

		hp.emojis.text.forEach(function (e) {
			var regex = new RegExp(`/${e.name}`, "g");
			n = n.replace(regex, `${e.text}`)
		})

		var cv = [null, "hpChat4312324", "chatHp312435edf", "hpChatCode56325t2", "chattingCodewqadsfda2", "SAFEMODechat123"]
		hp.actions.hpChat({
			name: window.account.discordName,
			nick: $("#nickname").val(),
			color: hp.local.settings.hpChatColor,
			text: n.replace("# ", ""),
			safeCode: cv[3],
			pid: hpID
		})
		if (window.hpChatCooldown !== "none65") window.hpChatCooldown = new Date().getTime();
		return
	}

	function isDoubleByte(str) {
		for (var i = 0, n = str.length; i < n; i++) {
			if (str.charCodeAt(i) > 255) {
				return true;
			}
		}
		return false;
	}

	function breakSentence(word, limit) {
		const queue = word.split(' ');
		const list = [];

		while (queue.length) {
			const word = queue.shift();

			if (word.length >= limit) {
				list.push(word)
			} else {
				let words = word;

				while (true) {
					if (!queue.length ||
						words.length > limit ||
						words.length + queue[0].length + 1 > limit) {
						break;
					}

					words += ' ' + queue.shift();
				}

				list.push(words);
			}
		}

		return list;
	}

	function splitString(str) {
		var middle = Math.ceil(str.length / 2);
		var s1 = str.slice(0, middle);
		var s2 = str.slice(middle);
		return s1 + "‎" + s2;
	};

	var excp = ['ban', 'mute', 'muteAccount', 'notify', 'teleport', 'kick', 'set', 'reload', 'mass']
	if (n.startsWith("/") && !excp.includes(n.split(" ")[0].slice(1))) {
		var args = n.split(" ").slice(1)
		var command = n.split(" ")[0].replace("/", "")

		if (hp.commands.filter(function (cmd) {
				return cmd.cmd == command
			}).length < 1) {
			Core.addServerMessage("Unknown command")
			return
		}

		hp.commands.forEach(function (cmd) {
			if (cmd.cmd == command) {
				cmd.function(args, n, command)
			}
		})

	} else {

		var wait = 0
		var now = new Date().getTime()
		if (hp.lastMsgTime + hp.nextMessage > now) {
			wait = hp.lastMsgTime + hp.nextMessage - now
		}
		if (n.startsWith("/") && !emojis.text.some(x => n.startsWith(`/${x.name}`))) wait = 0;
		setTimeout(function () {

			var words = n.split(" ")
			if (!n.startsWith("/")) {
				for (index = 0; index < words.length; ++index) {

					var isEmoji = hp.emojis.default.some(x => words[index] === `:${x.name}:`) || hp.emojis.custom.some(x => words[index] === `:${x.name}:`) || hp.emojis.text.some(x => words[index] === `/${x.name}`)
					//var isEmoji = (words[index].startsWith(":") && words[index].endsWith(":")) || words[index].startsWith("/")
					var isUnicode = isDoubleByte(words[index])

					if (isEmoji == false && isUnicode == false) {
						words[index] = splitString(words[index])
					}
					if (words[index].length == 6 || words[index].length == 8) words[index] = words[index] + "‎";
				}
			}
			n = words.join(" ")

			hp.emojis.default.forEach(function (e) {
				var regex = new RegExp(`:${e.name}:`, "g");
				n = n.replace(regex, `${e.unicode}`)
			})

			hp.emojis.text.forEach(function (e) {
				var regex = new RegExp(`/${e.name}`, "g");
				n = n.replace(regex, `${e.text}`)
			})

			n = breakSentence(n, 100)
			var timeout = 0
			hp.lastMsgTime = new Date().getTime()
			n.forEach(function (msg) {
				setTimeout(function () {
					if (msg.length == 8 || msg.length == 6 || msg.length == 4) msg += " "
					Core._sendChatMessage(msg)
				}, timeout * 1250)
				timeout += 1
				hp.nextMessage = 1250 * timeout
			}) //new Date().getTime()
		}, wait)
		hp.nextMessage += 1250
	}
}

$(".stats").append(`<div id="score">Score: 0</div><div id="sscore">Session score: 0</div><div id="cells">Cells: 0</div>`)

function infoHck(re, i) {
	$(".hckInfo").stop()
	$(".hckInfo").css("opacity", "1")
	if (i == false) {
		$(".hckInfo").css("color", "#ff5757")
	} else {
		$(".hckInfo").css("color", "#84ff80")
	}
	$(".hckInfo").text(re)
	$(".hckInfo").show()
	setTimeout(function () {
		$(".hckInfo").fadeOut(1000)
	}, 1000)
}

hp.actions.time_convert = function (num) {
	var hours = Math.floor(num / 60);
	var minutes = num % 60;
	return `${hours} ${hours == 1 ? 'h' : 'hrs'} ${minutes} ${minutes == 1 ? 'min' : 'mins'}`
}

hp.actions.time_convert = function (num) {
	var hours = Math.floor(num / 60);
	var minutes = num % 60;
	return `${hours} ${hours == 1 ? 'h' : 'hrs'} ${minutes} ${minutes == 1 ? 'min' : 'mins'}`
}

hp.actions.time_convert2 = function (time) {
	var minutes = Math.floor(time / 60);
	var seconds = time - minutes * 60;
	return `${minutes} ${minutes == 1 ? 'min' : 'mins'} ${seconds} ${seconds == 1 ? 'sec' : 'sec'}`
}

hp.actions.updateScore = function () {

	var data = hp.local.scores

	var scores = `<span>FFA score: ${hp.actions.comma(data['ffa'])}</span><br>
              <span>Instant score: ${hp.actions.comma(data['instant'])}</span><br>
              <span>Gigasplit score: ${hp.actions.comma(data['gigasplit'])}</span><br>
              <span>Megasplit score: ${hp.actions.comma(data['megasplit'])}</span><br>
              <span>Crazy score: ${hp.actions.comma(data['crazy'])}</span><br>
              <span>Self-feed score: ${hp.actions.comma(data['self-feed'])}</span><br>`

	$("#scores").html(scores)

	$("#onlinetime").text(`Online time: ${hp.actions.time_convert(hp.local.onlinetime)}`)
	$("#sessiontime").text(`Session time: ${hp.actions.time_convert(hp.sessiontime)}`)
	$("#longestalive").text(`Longest alive: ${hp.actions.time_convert2(hp.local.longestalive)}`)
	$("#hponline").text(`Hypertion Online: ${hp.data.count}`)

}


hp.intervals.minute = setInterval(function () {

	hp.sessiontime += 1
	hp.local.onlinetime = +hp.local.onlinetime + 1

	hp.actions.updateScore()
	hp.actions.save()

}, 6e4)

hp.intervals.second = setInterval(function () {

	$('.grecaptcha-badge').remove()

	hp.lastMove += 1
	hp.lastTick += 1

	if (!window.stopTokenUpdate) window.vanisToken = localStorage.vanisToken


	if (hp.lastMove > 30) {
		window.afk = true
	}

	var p = Core.playersCount()
	if ($('.vanis-list-item.active').length > 0 && p[0] !== 0) {
		$("#pC").text(`Players: ${p[0]} / ${p[1]}`)
	} else {
		$("#pC").text("")
	}

	if (Core.score && Core.score > 0 && Core.replaying == false && Core.spectating !== true && p[0] !== 0) {
		hp.alive += 1
		var time = hp.alive
		var minutes = Math.floor(time / 60);
		var seconds = time - minutes * 60;

		$("#alive").text(`Alive: ${minutes}min ${seconds}s`)


		if (Core.score > hp.local.scores[hp.currentGamemode])
			hp.local.scores[hp.currentGamemode] = Core.score

		if (Core.score > hp.score)
			hp.score = Core.score

		if (Core.score > hp.sessionscore)
			hp.sessionscore = Core.score

		$("#score").text(`Score: ${Core.getShortMass(hp.score)}`)
		$("#sscore").text(`Session score: ${Core.getShortMass(hp.sessionscore)}`)


	} else {
		$("#alive").text("")
		$("#score").text("")
		//  $("#sscore").text("")
	}

	if (Core.container) {
		if (hp.local.settings.transparentCells && Core.container.alpha !== hp.local.settings.transparentCellsAlpha)
			Core.container.alpha = hp.local.settings.transparentCellsAlpha
		else
		if (Core.container.alpha !== 1) Core.container.alpha = 1
	}

}, 1000)

hp.actions.blockUser = function (pid) {
	if (Core.ws && !Core.ws.blockedUsers)
		Core.ws.blockedUsers = []

	Core.ws.blockedUsers.push(pid)
}


Core.actions.stopMovement = function (f) {
	Core.moveToCenterOfCells = f
}

Core._showMenu = Core.showMenu

Core.showMenu = function (x, b) {

	hp.wasMovementStopped = !Core.moveToCenterOfCells

	Core._showMenu(x, b)
	if (hp.local.settings.movemenu && hp.wasMovementStopped)
		Core.moveToCenterOfCells = false

}


hp.actions.detectMessage = function () {

	if ($('#message-list').children().last().children().length == 1) return

	var message = $('#message-list').children().last().children()


	var msg = {
		name: $(message).first().text(), //.slice(0, -1)
		text: $(message).last().text(),
		nameColor: $(message).first().css("color"),
		pid: $(message).first().attr('data-pid'),
	}

	if (`${msg.pid}-${msg.nameColor}-${msg.text}-${msg.name}` !== hp.lastChatMessageCode) {
		hp.lastChatMessage = message
		hp.actions.onChatMessage(msg)
	}


}

$("#chatbox").css("opacity", "0")

hp.actions.popUp = function (text) {
	if (hp.local.settings.chatPopup && settings.showHud && $("#hpchatbox").is(":hidden") && $("#playerList").is(":hidden")) {

		UIkit.notification(text, {
			status: 'primary',
			pos: 'bottom-left'
		});

		if (document.getElementsByClassName("uk-notification-message-primary").length > 5) {
			document.getElementsByClassName("uk-notification-message-primary")[0].remove()
		}

	}
}

hp.actions.onChatMessage = function (msg) {

	hp.lastChatMessageCode = `${msg.pid}-${msg.nameColor}-${msg.text}-${msg.name}`
	hp.messages.unshift(msg)

	if (Core.ws && Core.ws.blockedUsers && Core.ws.blockedUsers.includes(msg.pid) || !msg || msg.text === "" || !msg.pid) return;

	var html

	hp.emojis.custom.forEach(function (e) {
		var regex = new RegExp(`:${e.name}:`, "g");
		msg.text = msg.text.replace(regex, `<img src="${e.url}" style="width:27px;height:27px;margin-left:3px;margin-right:3px;">`)
	})

	function clear(txt) {
		return txt.split("<").join("<").split(">").join(">")
	}

	html = `<div data-v-4900a413="" class="message-row"><span data-v-4900a413="" ${msg.nameColor ? `style="color:${rgb2hex(msg.nameColor)}"` : ''} oncontextmenu="hp.actions.rightClick.open(${msg.pid})" onclick="window.updatePlayerInfo(${msg.pid})" pid="${msg.pid}" class="message-from">${clear(msg.name)}</span> <span data-v-4900a413="" style="color:white;" class="message-text">${clear(msg.text)}</span></div>`

	$('#hpmessage-list').append(html)

	hp.actions.popUp(html)

	if ($('#hpmessage-list').children().length > hp.local.settings.maxChatMessages)
		$('#hpmessage-list').children().first().remove()


	$('#hpmessage-list').scrollTop($('#hpmessage-list')[0].scrollHeight);
}

Core.addServerMessage = function (x) {
	if (!x || x === "") return

	var html = `<div data-v-4900a413="" class="message-row"><span data-v-4900a413="" class="message-text" style="color: #828282">${x}</span></div>`
	$('#hpmessage-list').append(html)
	$('#hpmessage-list').scrollTop($('#hpmessage-list')[0].scrollHeight);
	hp.actions.popUp(html)
}

hp.actions.rightClick = {}

hp.actions.rightClick.open = function (pid) {

	var player = Core.playerManager.players[pid]

	if (player) {
		hp.rightClickMenuOpen = true

		$("#rightClickMenu").css("margin-left", "0px")
		$("#hpchatbox").css("margin-left", "140px")

		$("#rightClickPanel").empty()

		$("#rightClickPanel").append(`<b>${player.name}</b><br><br>`)


		//$("#rightClickMenu").css("margin-left", "-150px")
		//$("#hpchatbox").css("margin-left", "0px")
	}
}

hp.actions.updateVisuals = function () {

	if (Core.playerManager && Core.playerManager.players) {
		Object.values(Core.playerManager.players).forEach(player => {

			if (player.hasCrown == true) {
				Core.ws.lastCrown = player.pid

				if (hp.local.settings.hidecrown)
					player.setCrown(false)

			}

			if (!player._names)
				player._names = []

			if (!player._skins)
				player._skins = []

			if (!player._names.includes(player.name))
				player._names.push(player.name)

			if (!player._skins.includes(player.skinUrl))
				player._skins.push(player.skinUrl)

			if (player.onSameTag)
				player.type = 'tag'
			else
				player.type = 'enemy'

			if (player.isMe) {
				player.type = 'me'

				if (hp.local.settings.privskin)
					player.setSkin(hp.local.settings.privskinurl)
				else
				if (!Core.replaying) player.setSkin($("#skinurl").val())


			}

			if (settings.skinsEnabled) {
				if (hp.local.settings.allskins) {
					player.showSkin()
				} else {
					switch (player.type) {
						case 'me':
							if (hp.local.settings.hideownskin)
								player.hideSkin()
							else
								player.showSkin()
							break
						case 'tag':
							if (hp.local.settings.hidetagskin)
								player.hideSkin()
							else
								player.showSkin()
							break
						case 'enemy':
							player.hideSkin()
							break
					}
				}
			} else {
				player.hideSkin()
			}

		})
	}
	if (Core.container) {

		var borderStyle = `${hp.local.settings.borderColor}/${hp.local.settings.borderSize}/${hp.local.settings.borderEnabled}`

		if (Core.container.children.length == 3 && Core.container.children[0].borderStyle !== borderStyle)
			Core.container.removeChild(Core.container.children[0])


		if (hp.local.settings.borderEnabled && Core.container.children.length < 3) {
			//Core.container.removeChild(Core.container.children[0])

			var border = new PIXI.Graphics()
			border.lineStyle(parseInt(hp.local.settings.borderSize), hex2dec(hp.local.settings.borderColor));
			border.drawRect(-Core.border.height / 2, -Core.border.height / 2, Core.border.height, Core.border.width);
			border.borderStyle = borderStyle
			Core.container.addChildAt(border, 0)
		}

	}

	/*
	  var color = hp.local.settings.foodColor

	if(!hp.foodSprite || hp.foodSprite.color !== color){
	  var dec = hex2dec(color);
	  var food = new PIXI.Graphics();
	  food.beginFill(dec);
	  food.drawCircle(0, 0, 256);
	  food.color = color;
	  food.endFill();

	  hp.foodSprite = food
	}

	  color = hp.local.settings.feedColor

	if(!hp.feedSprite || hp.feedSprite !== color){
	  dec = hex2dec(color);
	  var feed = new PIXI.Graphics();
	  feed.beginFill(dec);
	  feed.drawCircle(0, 0, 256);
	  feed.color = color;
	  feed.endFill();

	  hp.feedSprite = feed
	}*/
}

hp.actions.updateVisuals()

hp.actions.removeColor = function (player) {
	var cell = player.cellContainer;
	var colored = cell.children.filter(function (x) {
		if (x.cellColor) return x
	});
	if (colored.length > 0) {
		colored.forEach(function (color) {
			cell.removeChild(color);
		});
		cell.cellColor = false
	}
	delete player.cellColor
}


hp.actions.colorNode = function (node, type) {

	if (!node) return;

	if (node.children.length > 0 && node.children[0].color !== (type == 1 ? hp.feedSprite : hp.foodSprite))
		node.removeChild(node.children[0])
	//feed = 1
	//food = 2

	var color = (type == 1 ? hp.local.settings.feedColor : hp.local.settings.foodColor)
	/*
	var food = new PIXI.Sprite(PIXI.Texture.WHITE);
	food.tint = hex2dec(color);
	food.color = color
	food.width = 256
	food.height = 256*/

	var food = new PIXI.Graphics();
	food.beginFill(hex2dec(color));
	food.drawCircle(0, 0, 256);
	food.color = color;
	food.endFill();

	node.addChild(food)

}

hp.actions.setColor = function (player, color) {

	if (!color || player.cellColor == color) return;

	var cell = player.cellContainer;

	if (!cell) return

	hp.actions.removeColor(player)

	var dec = hex2dec(color);
	var p = new PIXI.Graphics();
	p.beginFill(dec);
	p.drawCircle(0, 0, 256);
	p.cellColor = color;
	p.endFill();


	cell.cellColor = color;
	player.cellColor = color

	cell.addChildAt(p, 1)
}

hp.hatsData = {
	scale: {
		x: 1.28,
		y: 1.28
	},
	position: {
		x: -512,
		y: -512
	},
	alpha: 0.9
}

hp.actions.addHat = function (node, url) {

	if (!node.hats)
		node.hats = []

	if (!node.hats.includes(url)) {

		if (!hp.hatsStorage[url]) {
			var hat = new PIXI.Texture.from(url);
			hp.hatsStorage[url] = hat
		}

		var sprite = new PIXI.Sprite(hp.hatsStorage[url])
		sprite.hatUrl = url
		sprite.position = hp.hatsData.position;
		sprite.scale = hp.hatsData.scale;
		sprite.alpha = hp.hatsData.alpha;

		node.sprite.addChild(sprite);
		node.hats.push(url)

	}
}

hp.actions.removeHat = function (node, url) {

	if (node.hats && node.hats.includes(url)) {

		var hat = node.sprite.children.filter(function (hats) {
			if (hats.hatUrl == url) return hats
		})

		if (hat.length > 0) {
			node.sprite.removeChild(hat[0]);

			const index = node.hats.indexOf(url)
			if (index > -1) {
				node.hats.splice(index, 1);
			}
		}

	}
}


hp.actions.rightClick.close = function () {
	$("#rightClickMenu").css("margin-left", "-150px")
	$("#hpchatbox").css("margin-left", "0px")
}

$("body").attr("onmouseup", "hp.actions.rightClick.close()")

Core.myCells = function () {
	return Core.nodelist.filter(function (x) {
		if (x.player && x.player.pid == Core.playerId) return x
	})
}

hp.chatOpen = settings.showChat

hp.tick = function () {
	if (hp.local.settings.preboost && hp.tickDelay < hp.local.settings.tickDelay) {
		hp.tickDelay += 1
		return
	}

	hp.tickDelay = 0


	switch (settings.showChat) {
		case true:
			if (Core.ws && Core.ws.readyState == 1)
				$("#hpchatbox").show()
			else
				$("#hpchatbox").hide()

			$("#rightClickPanel").show()

			$(".uk-notification-bottom-left").children().first().remove()

			if (hp.chatOpen == false) {
				$('#hpmessage-list').scrollTop($('#hpmessage-list')[0].scrollHeight);
			}
			hp.chatOpen = true
			break
		case false:
			$("#hpchatbox").hide()
			hp.chatOpen = false

			$("#rightClickPanel").hide()
	}

	$("#cells").text(`Cells: ${Core.myCells().length}`)
	hp.actions.detectMessage()

	if (Core.score > 0) {
		$("#cells").text(`Cells: ${Core.myCells().length}`)
		if (hp.hadOpenMenu !== $("#player-data").is(":visible"))
			hp.hadOpenMenu = $("#player-data").is(":visible")

		if (hp.wasChatFocused !== $("#hpChatMsg").is(":focus"))
			hp.wasChatFocused = $("#hpChatMsg").is(":focus")
	} else {
		if ($("#cells").text() !== '')
			$("#cells").text('')
	}

	if ($(".btn.continue").is(":visible")) {

		if (hp.local.settings.skinrotator) {
			var random = Math.floor(Math.random() * $("img.skin:not(.selected):not([src*='skins.vanis.io/s/vanis1'])").length);
			$("img.skin:not(.selected):not([src*='skins.vanis.io/s/vanis1'])").eq(random).click();
		}

		if (hp.local.settings.skipStats && hp.local.settings.autorespawn == false) {

			$(".btn.continue").click()

			if (hp.wasChatFocused)
				$("#hpChatMsg").trigger("focus")
		}

		if (hp.local.settings.autorespawn && hp.hadOpenMenu == false) {
			$(".btn.continue").click()
			Core.toggleMenu(false);
			setTimeout(Core.joinGame, 400)

			if (hp.wasChatFocused)
				$("#hpChatMsg").trigger("focus")

			setTimeout(function () {
				if ($("#overlay").is(":hidden") && Core.score == 0 && Core.spectating == false) {
					Core.joinGame()
				}
			}, 1000)

		}
	}

	if (Core.nodelist && Core.nodes && Core.playerManager) {
		Object.values(Core.nodes).forEach(node => {

			var nodeMinSize = 180

			if (hp.local.settings.preboost)
				nodeMinSize = 250

			nodeMinSize = nodeMinSize + (Core.score / 500)

			if (node.player && node.size > nodeMinSize) {

				if (node.player.type && node.nameSprite) {
					switch (node.player.type) {
						case 'me':
							if (hp.local.settings.hideownname)
								node.nameSprite.scale.x = 0
							break
						case 'tag':
							if (hp.local.settings.hidetagname)
								node.nameSprite.scale.x = 0
							break
						case 'enemy':
							if (hp.local.settings.hideenemyname)
								node.nameSprite.scale.x = 0
					}
				}

				if (node.nameSprite && node.player.nameColor !== null)
					node.nameSprite.tint = node.player.nameColor

				if (node.player.hats && node.player.hats.length > 0) {

					node.player.hats.forEach(function (hat) {
						hp.actions.addHat(node, hat)
					})


					if (node.hats && node.hats.length > 0) {
						node.hats.forEach(function (hat) {

							if (!node.player.hats.includes(hat))
								hp.actions.removeHat(node, hat)

						})

					}

				}

			} else {
				/*
				      var feedSize = 36
				      var foodSize = 25

				      switch(hp.currentGamemode){
				        case 'self-feed':
				        feedSize = 100
				        break
				        case 'gigasplit':
				        feedSize = 40
				        break
				        case 'megasplit':
				        feedSize = 40
				        break
				        case 'ffa':
				        feedSize = 38
				        break
				      }

				      if(node.size == feedSize)
				      hp.actions.colorNode(node.sprite, 1)


				      if(hp.local.settings.oneFoodColor && settings.foodVisible && node.size < foodSize){
				        hp.actions.colorNode(node.sprite, 2)
				      }

				*/

			}

		})
	}

}


hp.intervals.autoreconnect = setInterval(function () { // auto reconnect
	if ($(".vanis-list-item.active").length < 1 && hp.lastServer !== "none" && $("#play-button").attr("disabled") == "disabled" && $("#leaderboard").is(":hidden")) {
		$('.vanis-list-item:contains(' + hp.lastServer + ')').click()
	}
	if ($(".vanis-list-item.active").length > 0 && $("#play-button").attr("disabled") == "disabled" && $("#leaderboard").is(":hidden") && hp.local.settings.autoreconnect) {
		$(".vanis-list-item.active").click()
	}
	if ($(".vanis-list-item.active").length > 0 && $(".vanis-list-item.active > server.name").text() !== "") hp.lastServer = $(".vanis-list-item.active > server.name").text()
}, 8000)


hp.actions.startGifSkins = function () {}


Core.__tick = Core.tick;
Core.tick = (...args) => {
	hp.tick();
	return Core.__tick.apply(this, args);
}

function md5(d) {
	return rstr2hex(binl2rstr(binl_md5(rstr2binl(d), 8 * d.length)))
}

function rstr2hex(d) {
	for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++) _ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _);
	return f
}

function rstr2binl(d) {
	for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++) _[m] = 0;
	for (m = 0; m < 8 * d.length; m += 8) _[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32;
	return _
}

function binl2rstr(d) {
	for (var _ = "", m = 0; m < 32 * d.length; m += 8) _ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255);
	return _
}

function binl_md5(d, _) {
	d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _;
	for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) {
		var h = m,
			t = f,
			g = r,
			e = i;
		f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e)
	}
	return Array(m, f, r, i)
}

function md5_cmn(d, _, m, f, r, i) {
	return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m)
}

function md5_ff(d, _, m, f, r, i, n) {
	return md5_cmn(_ & m | ~_ & f, d, _, r, i, n)
}

function md5_gg(d, _, m, f, r, i, n) {
	return md5_cmn(_ & f | m & ~f, d, _, r, i, n)
}

function md5_hh(d, _, m, f, r, i, n) {
	return md5_cmn(_ ^ m ^ f, d, _, r, i, n)
}

function
md5_ii(d, _, m, f, r, i, n) {
	return md5_cmn(m ^ (_ | ~f), d, _, r, i, n)
}

function safe_add(d, _) {
	var m = (65535 & d) + (65535 & _);
	return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m
}

function bit_rol(d, _) {
	return d << _ | d >>> 32 - _
}

function rgb2hex(rgb) {
	rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(,\s?\d+\.\d+)?\);?$/);

	function hex(x) {
		return ("0" + parseInt(x).toString(16)).slice(-2);
	}
	return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
