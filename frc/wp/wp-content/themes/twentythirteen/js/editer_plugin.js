(function() {
	tinymce.create
	(
		'tinymce.plugins.newButtons',
		{
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
				ed.addCommand(
					'balloon_l',
					function() {
						var str = t._balloon_l();
						ed.execCommand('mceInsertContent', false, str);
					}
				);
				ed.addButton('balloon_l', {
					title : '吹出し左',
					cmd : 'balloon_l',
					image : url + '/../images/balloon_l.gif'});

				ed.addCommand(
						'balloon_r',
						function() {
							var str = t._balloon_r();
							ed.execCommand('mceInsertContent', false, str);
						}
					);
				ed.addButton('balloon_r', {
					title : '吹出し右',
					cmd : 'balloon_r',
					image : url + '/../images/balloon_r.gif'});
			},
			_balloon_l : function(d, fmt) {
				str = '<div class="ballw">' + this.editor.selection.getContent() + '</div><br><br>';
				return str;
			},
			_balloon_r : function(d, fmt) {
				str = '<div class="balrg">' + this.editor.selection.getContent() + '</div><br><br>';
				return str;
			}
		}
	);
	tinymce.PluginManager.add('newButtons', tinymce.plugins.newButtons);
})();