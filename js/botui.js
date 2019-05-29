// ====================================
// 名前空間の定義
// ====================================
var BOTUI = BOTUI ||  {};

// ====================================
// 変数名定義
// ====================================
BOTUI.botui = new BotUI("bot_app");


// ====================================
// 関数定義
// ====================================
BOTUI.init = function(){

	BOTUI.botui.message.bot({
		delay: 300,
		content: "Hello !!"
	})
	.then(function(){

		BOTUI.user();

	});
}

BOTUI.user = function(){

	BOTUI.botui.message.human({
		delay: 300,
		content: "Hello From Human."
	})
	.then(function(){
		BOTUI.button();
	})
}

BOTUI.button = function(){

	BOTUI.botui.action.button({
		delay: 300,
		action: [{text: "button", value: "button"}]
	})
	.then(function(res){
		alert( res.value );
	});
}

// ====================================
//　初期実行関数
// ====================================
BOTUI.init();


// ====================================
// EOF
// ====================================
