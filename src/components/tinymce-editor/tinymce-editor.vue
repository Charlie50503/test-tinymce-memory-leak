<template>
	<div class="tinymce-editor">
		<editor :id="tinymce_id" v-model="myValue" :init="init">
		</editor>
	</div>
</template>
<script>
	import {
		mapGetters
	} from 'vuex'
	import tinymce from 'tinymce/tinymce'
	import Editor from '@tinymce/tinymce-vue'
	import 'tinymce/themes/silver/theme'
	import 'tinymce/icons/default';
	import 'tinymce/plugins/image'
	import 'tinymce/plugins/link'
	import 'tinymce/plugins/preview'
	import 'tinymce/plugins/media'
	import 'tinymce/plugins/table'
	import 'tinymce/plugins/lists'
	import 'tinymce/plugins/wordcount'
	import 'tinymce/plugins/colorpicker'
	import 'tinymce/plugins/paste'
	import 'tinymce/plugins/code'
	import 'tinymce/plugins/help'

	export default {
		components: {
			Editor,
		},
		props: {
			target_name: String,
			tinymce_id: {
				type: String,
				default: function() {
					return 'vue-tinymce-' + +new Date() + ((Math.random() * 1000).toFixed(0) + '')
				}
			},
			disabled: Boolean,
			//set value for v-model
			value: {
				type: String,
				default: ''
			},
		},
		data() {
			return {
				text_size: 0,
				editor: null,
				active: true,
				init: {
					inline: false,
					height: 500,
					skin_url: './tinymce/skins/ui/my-oxide-ui',
					content_css: './tinymce/skins/content/default/myContent.css',
					branding: false,
					menubar: false,
					paste_data_images: true,
					importcss_append: true,
					forced_root_block: '',
				},
				myValue: this.value
			}
		},
		mounted() {
			let data_id = `[data-id="${this.tinymce_id}"]`
			console.log("data_id", data_id)
			this.editor = document.querySelector(data_id)
			console.log("this.editor", this.editor)
		},
		methods: {
			destroyTinymce() {
				const tinymce = window.tinymce.get(this.tinymce_id)
				console.log("tinymce beforeDestroy", tinymce)
				if (!tinymce) return
				tinymce.remove();
				tinymce.destroy()
			},
		},
		deactivated() {
			console.log("deactivated")
			this.active = false;
		},
		activated() {
			console.log("activated")
			this.active = true;
		},
		beforeDestroy() {
			this.destroyTinymce()
		},
		destroyed() {
			const tinymce = window.tinymce.get(this.tinymce_id)
			console.log("tinymce destroyed", tinymce)
		},
		watch: {
			value(newValue) {
				this.myValue = newValue
			},
			myValue(newValue) {
				this.$emit('input', newValue)
			},
		}
	}
</script>
<style scoped>
</style>
