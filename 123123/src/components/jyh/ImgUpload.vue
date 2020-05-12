<template>
  <div>
    <el-upload
      http-request="fileUpload"
      class="upload-demo"
      drag
      action=""
      multiple
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">
        <!-- 只能上传jpg/png文件，且不超过500kb -->
      </div>
    </el-upload>
  </div>
</template>

<script>
export default {
  data() {
    return {
      demand: {
        demandName: "",
        demandType: ""
      },
      filelist: {},
      rules: {
        demandName: [{ require: true, message: "", trigger: "blur" }]
      }
    };
  },
  methods: {
    fileUpload(info) {
      console.log(info);
    }
  }
};
</script>

<style></style>
