Behaviour.register({
	'input#Form_EditForm_Title': {
		/**
		 * Get the URL segment to suggest a new field
		 */
		onchange: function() {
			if( this.value.length == 0 )
				return;
			
			var urlSegmentField = $('Form_EditForm_URLSegment');
			
			var newSuggestion = urlSegmentField.suggestNewValue( this.value.toLowerCase() );
			
			var isNew = $('Form_EditForm_ID').value.indexOf("new") == 0;
			
			if( newSuggestion == urlSegmentField.value || isNew || confirm( 'Would you like me to change the URL to:\n\n' + newSuggestion + '/\n\nClick Ok to change the URL, click Cancel to leave it as:\n\n' + urlSegmentField.value ) )
				urlSegmentField.value = newSuggestion;
			// If you type in Page name, the Navigation Label and Meta Title should automatically update the first time
			// @todo: Change file name from UpdateURL to something more geneneric since we now do more than update the URL.
			if( $('Form_EditForm_MenuTitle').value.indexOf("New") == 0 ) {
				$('Form_EditForm_MenuTitle').value = this.value;
			}
			// @todo see if updating this is confusing (Q: why isn't my page title changing? A: Check the Meta-Data tab)
			if( $('Form_EditForm_MetaTitle').value.length == 0 ) {
				$('Form_EditForm_MetaTitle').value = this.value;
			}
		}
	}
});
