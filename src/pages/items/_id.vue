<template>
  <section class="wrap">
    <div v-if="item" class="content-wrap">
      <div class="content">
        <div>
          <nuxt-link :to="{ name:'index'}">ホーム</nuxt-link>
          >
          <span class="pan">{{item.name}}</span>
        </div>
        <Tag />
        <h2 class="title">{{item.name}}</h2>
        <div class="images-wrap">
          <img :src='"/images/items/"+item.url' class="images"/>
        </div>
        <p v-html="item.description" class="des"></p>
      </div>
      <div class="action">
        <div>
          <span>3,000円</span>
          <span>（税込）</span>
        </div>
        <div class="btn-wrap">
          <Btn />
          <p>商品にお間違いがないかご確認ください。</p>
        </div>
        <div class="shop-text">
          <p class="title">ショップからのお知らせ</p>
          <p>
            只今発送までお時間を頂いております。<br>
            下記を目安にご注文ください。<br>
            <br>
            [アクセサリー]：ご注文頂いてから2週間ほどで発送<br>
            [布製品]：ご注文頂いてから3週間ほどで発送
          </p>
        </div>
      </div>
    </div>
    <div v-else>
      ろおディング
    </div>
  </section>
</template>

<script>
import db from '~/plugins/firebaseInit'

import Btn from '~/components/button/button.vue'
import Tag from '~/components/label/tag.vue'

export default {
  components: {
    Btn,
    Tag
  },
  // validate({ params }) {
  //   // 数値でなければならない
  //   return /^[a-zA-Z0-9]+$/.test(params.id)
  // },
  data() {
    return {
      item: [],
      loading: true
    }
  },
  asyncData({ params }) {
    return db
      .collection('items')
      .doc(params.id)
      .get()
      .then(doc => {
        return {
          item: {
            url: doc.data().url,
            name: doc.data().name,
            description: doc.data().description
          }
        }
      })
  }
}
</script>

<style lang="scss" scoped>
.content-wrap {
  display: flex;
  flex-wrap: wrap;
  margin: 35px 10px;
}

.content {
  .pan {
    font-size: 12px;
    margin: 0 0 10px 0;
    max-width: 445px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .title {
    font-size: 16px;
    font-weight: 600;
    max-width: 445px;
  }

  .images-wrap {
    margin: 15px 0;
    text-align: center;

    .images {
      width: 300px;
    }
  }

  .des {
    border-top: 1px solid $gray;
    font-size: 14px;
    padding: 15px 10px;
  }
}

.content,
.action {
  width: 100%;

  @include min-mq(sm) {
    flex: 1;
  }
}

.action {
  @include min-mq(sm) {
    margin: 0 0 0 10px;
  }

  .btn-wrap {
    background-color: $silver;
    margin: 0 0 20px 0;
    padding: 20px;
    text-align: center;
  }

  .shop-text {
    border: 1px solid $gray;
    padding: 10px;

    .title {
      font-size: 14px;
      font-weight: 600;
    }
  }
}

.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-enter {
  opacity: 0;
}
</style>
