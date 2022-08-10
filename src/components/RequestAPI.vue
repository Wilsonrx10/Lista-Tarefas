<template>
  <!--  PHP LARAVEL 
    $upload = new Upload()
    $upload-name = $request->name;
    $upload->path = $request->file('imagem')->store('teste');
    $upload->save();
   -->
  <div>
    <h2>Upload com VueJS</h2>
    <input @change="Newfile" type="file" name="" id=""> <br>
    <button @click="upload">Upload</button> <br>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      file: null,
      name: null
    }
  },
  methods: {
    Newfile(event) {
      console.log(event)
      this.file = event.targe.files[0];
    },
    upload() {
      var form = ''
      form = new FormData()
      form.append('imagem', this.file)
      form.append('name', this.file)
      // Fazer a requisição para a API 
      this.$axios.post("upload", form, {
        headers: { 'content-type': 'multipart/form-data' }
      }).then((response) => {
        console.log(response)
      })
    }

  }
}
</script>

<style>
</style>
