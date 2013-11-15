(function() {
	tinymce.create('tinymce.plugins.newButtons', {
		getInfo : function() {
		return {
			longname : 'Float Clear Button',
			author : 'Nori Takahashi',
			authorurl : 'http://webdesignrecipes.com/',
			infourl : 'http://webdesignrecipes.com/',
			version : "1.0.0"
			};
		},
		init : function(ed, url) {
			var t = this;
			t.editor = ed;
			ed.addCommand('balloon',
		function() {
				var str = t._newButton();
				ed.execCommand('mceInsertContent', false, str);
		});
		ed.addButton('balloon', {
			title : '吹出し',
			cmd : 'balloon',
			image : url + '/../images/cl.gif'});
		},
		_newButton : function(d, fmt) {
			str = '<div class="ballw">' + this.editor.selection.getContent() + '</div>';
			return str;
		  }
		});
	tinymce.PluginManager.add('newButtons', tinymce.plugins.newButtons);
})();