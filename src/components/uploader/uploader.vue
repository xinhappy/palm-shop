<template>
  <div class="vue-uploader">
    <div class="file-list">
      <div v-if="status == 'ready'" class="up_img">
        <div @click="add">
          <img class="img-responsive" style="width: 20px;vertical-align: middle;padding: 2vw;" src="./images/upimg.png" alt="">
          <span>上传图片</span>
        </div>
      </div>
      <section v-for="(file, index) of files" class="file-item draggable-item">
        <img :src="file.src" alt="" ondragstart="return false;">
        <p class="file-name">{{file.name}}</p>
        <span class="file-remove" @click="remove(index)">+</span>
      </section>
    </div>

    <section v-if="files.length != 0" class="upload-func">
      <div class="progress-bar">
        <section v-if="uploading" :width="(percent * 100) + '%'">{{(percent * 100) + '%'}}</section>
      </div>
      <div class="operation-box">
        <!--<button v-if="status == 'ready'" @click="submit">上传</button>-->
        <button v-if="status == 'finished'" @click="finished">完成</button>
      </div>
    </section>
    <input type="file" @change="fileChanged" ref="file" multiple="multiple">
  </div>
</template>
<script>
  export default {
    props: {
      src: {
        type: String,
        required: true
      },
      params: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        status: 'ready',
        files: [],
        point: {},
        uploading: false,
        percent: 0
      }
    },
    methods: {
      add() {
        this.$emit('showRight', false)
        this.$refs.file.click()
      },
      submit() {
        if (this.files.length === 0) {
          console.warn('no file!')
          return
        }
        const formData = new FormData()
        this.files.forEach((item) => {
          formData.append('file', item.file)
        })
        for (let key in this.params) {
          formData.append(key, this.params[key])
        }
        const xhr = new XMLHttpRequest()
        xhr.upload.addEventListener('progress', this.uploadProgress, false)
        xhr.open('POST', this.src, true)
        this.uploading = true
        xhr.send(formData)
        xhr.onload = () => {
          this.uploading = false
          if (xhr.status === 200 || xhr.status === 304) {
            this.status = 'finished'
            console.log('upload success!')
          } else {
            console.log(`error：error code ${xhr.status}`)
          }
        }
      },
      finished() {
        this.files = []
        this.status = 'ready'
      },
      remove(index) {
        this.files.splice(index, 1)
      },
      fileChanged() {
        const list = this.$refs.file.files
        for (let i = 0; i < list.length; i++) {
          if (!this.isContain(list[i])) {
            const item = {
              name: list[i].name,
              size: list[i].size,
              file: list[i]
            }
            this.html5Reader(list[i], item)
            this.files.push(item)
          }
        }
        this.$refs.file.value = ''
      },
      // 将图片文件转成BASE64格式
      html5Reader(file, item) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.$set(item, 'src', e.target.result)
        }
        reader.readAsDataURL(file)
      },
      isContain(file) {
        this.files.forEach((item) => {
          if (item.name === file.name && item.size === file.size) {
            return true
          }
        })
        return false
      },
      uploadProgress(evt) {
        const component = this
        if (evt.lengthComputable) {
          const percentComplete = Math.round((evt.loaded * 100) / evt.total)
          component.percent = percentComplete / 100
        } else {
          console.warn('upload progress unable to compute')
        }
      }
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  .vue-uploader{
    /*border:1px solid #e5e5e5;*/
    background-color: #fff;
    .file-list{
      /*padding:10px 0px;*/
      &:after{
        content: '';
        display: block;
        clear: both;
        visibility: hidden;
        line-height: 0;
        height: 0;
        font-size: 0;
      }
      .up_img{
        text-align: right;
        color: #2385ff;
      }
      .file-item{
        float: left;
        position: relative;
        width: 100px;
        text-align: center;
        img{
          width: 80px;
          height: 80px;
          border: 1px solid #ececec;
        }
        .file-remove{
          position: absolute;
          right: 12px;
          display: none;
          top: 4px;
          width: 14px;
          height: 14px;
          color: white;
          cursor: pointer;
          line-height: 12px;
          border-radius: 100%;
          transform: rotate(45deg);
          background: rgba(0, 0, 0, 0.5);
        }
        &:hover{
          .file-remove{
            display: inline;
          }
        }
        .file-name{
          margin: 0;
          height: 40px;
          word-break: break-all;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }
    .add{
      width: 80px;
      height: 80px;
      margin-left: 10px;
      float: left;
      text-align: center;
      line-height: 80px;
      border: 1px dashed #ececec;
      font-size: 30px;
      cursor: pointer;
    }
    .upload-func{
      display: flex;
      padding: 10px;
      margin: 0px;
      background: #f8f8f8;
      border-top: 1px solid #ececec;
      .progress-bar{
        flex-grow: 1;
        section{
          margin-top: 5px;
          background: #00b4aa;
          border-radius: 3px;
          text-align: center;
          color: #fff;
          font-size: 12px;
          transition: all .5s ease;
        }
      }
      .operation-box{
        flex-grow: 0;
        padding-left: 10px;
        button{
          padding: 4px 12px;
          color: #fff;
          background: #007acc;
          border: none;
          border-radius: 2px;
          cursor: pointer;
        }
      }
    }

    & > input[type="file"]{
      display: none;
    }
  }
</style>
