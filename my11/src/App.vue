<template>
  <div>
    <div class="head">메모 앱</div>
    <div class="body">
      <div class="list" v-if="mode == 'list'">
        <ul>
          <li v-for="memo in memos" :key="memo" @click="open(memo.id)">
            {{ memo.content }}
          </li>
        </ul>
      </div>
      <div class="write" v-else>
        <textarea v-model="inData"></textarea>
        <div>
          <button v-if="mode === 'write'" class="save-btn" @click="save">
            저장
          </button>
          <button v-if="mode === 'edit'" class="del-btn" @click="deleteM">
            삭제
          </button>
          <button class="cancel-btn" @click="cancel">취소</button>
        </div>
        <button v-if="mode === 'edit'" class="edit-btn" @click="edit">
          수정
        </button>
      </div>
      <button class="add-btn" @click="write" v-if="mode == 'list'">+</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mode: 'list',
      inData: '',
      memo: {
        id: null,
        content: null,
        regData: null
      },
      memos: [
        // {
        //   id: 1,
        //   content: '메모 #1',
        //   regData: new Date()
        // },
        // {
        //   id: 2,
        //   content: '메모 #2',
        //   regData: new Date()
        // },
        // {
        //   id: 3,
        //   content: '메모 #3',
        //   regData: new Date()
        // }
      ]
    }
  },
  methods: {
    write: function () {
      this.mode = 'write'
      this.inData = ''
    },
    open: function (e) {
      // console.log(e) // test 해보기
      for (const i in this.memos) {
        if (e === this.memos[i].id) {
          this.memo = this.memos[i]
        }
      }
      // console.log({ ...this.memo }) // 깊은복사
      this.inData = { ...this.memo }.content // 깊은복사
      this.mode = 'edit'
    },
    save: function () {
      this.memos.push({
        id: this.memos.length + 1,
        content: this.inData,
        regData: new Date()
      })
      this.content = this.inData
      this.regData = new Date()
      this.mode = 'list'
      localStorage.setItem('memos', JSON.stringify(this.memos))
    },
    edit: function () {
      for (const i in this.memos) {
        if (this.memo.id === this.memos[i].id) {
          this.memos[i].id = this.memo.id
          this.memos[i].content = this.inData
          this.memos[i].regData = new Date()
        }
      }
      this.mode = 'list'
      localStorage.setItem('memos', JSON.stringify(this.memos))
    },
    cancel: function () {
      this.mode = 'list'
    },
    deleteM: function () {
      this.memos.forEach((_, i) => {
        if (this.memo.id === this.memos[i].id) {
          this.memos.splice(i, 1)
        }
      })
      this.mode = 'list'
      localStorage.setItem('memos', JSON.stringify(this.memos))
    }
  },
  created: function () {
    const memos = localStorage.getItem('memos')
    if (memos) {
      this.memos = JSON.parse(memos)
    }
  },
  components: {}
}
</script>
<style>
html,
body {
  margin: 0;
  padding: 0;
}
.head {
  font-size: 20px;
  padding: 20px;
  background: #459ad6;
  color: #fff;
  text-align: center;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
}
.body ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.body ul li {
  padding: 20px;
  font-size: 16px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}
.body .add-btn {
  display: inline-block;
  padding: 20px 25px;
  font-size: 30px;
  position: fixed;
  right: 10px;
  bottom: 10px;
  background: #459ad6;
  color: #fff;
  border-radius: 50%;
  outline: 0;
  margin: 10px;
  border: none;
}
textarea {
  width: 100%;
  height: 420px;
  font-size: 2.5em;
  padding: 10px;
  box-sizing: border-box;
}
.save-btn {
  background: #459ad6;
  color: #fff;
  width: 50%;
  height: 50px;
  font-size: 1.3em;
}
.edit-btn {
  background: #459ad6;
  color: #fff;
  width: 100%;
  height: 50px;
  font-size: 1.3em;
  margin-top: 5px;
}
.cancel-btn {
  background: hsl(41, 58%, 31%);
  color: #fdd0d0;
  width: 50%;
  height: 50px;
  font-size: 1.3em;
}
.del-btn {
  background: hsl(0, 63%, 71%);
  color: #fff;
  width: 50%;
  height: 50px;
  font-size: 1.3em;
}
</style>
