<template>
	<div class="home">
		<tinymce v-model="value"></tinymce>
		<!-- <tinymce-editor v-model="question_content_input" ref="question_content_input" :disabled="is_end_disabled"
			:target_name="'question_content'"></tinymce-editor> -->
	</div>
</template>

<script>
	// @ is an alias to /src
	import tinymce from '@/components/tinymce-editor/tinymce-editor.vue'
	export default {
		name: 'Home',
		components: {
			tinymce
		},
		data() {
			return {
				value: 'test'
			}
		}
	}
</script>
