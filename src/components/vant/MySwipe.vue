<!--通知消息轮播-->
<template>
  <div class="box">
    <van-icon name="bullhorn-o" />
    <van-swipe
      v-if="swipeData.length > 0"
      class="swipe-box"
      :autoplay="swipeConfig.autoplay"
      :height="swipeConfig.height"
      :width="swipeConfig.width"
      :duration="swipeConfig.duration"
      :loop="swipeConfig.loop"
      :show-indicators="swipeConfig.showIndicators"
      :vertical="swipeConfig.vertical"
    >
      <van-swipe-item
        v-for="(item, index) in swipeData"
        :key="index"
        @click="itemClick(item)"
      >
        <div class="swipe-item-box">
          <div class="van-ellipsis notificationTitle">{{ item.title }}</div>
          <div v-if="item.releaseTime" class="notificationTime">
            {{ item.releaseTime.substring(0, 10) }}
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Icon, Swipe, SwipeItem } from "vant";

export default {
  name: "MySwipe",
  components: {
    [Icon.name]: Icon,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  props: {
    swipeConfig: {
      type: Object,
      default: function () {
        return {
          autoplay: 3000,
          height: "20",
          width: "auto",
          duration: 500,
          loop: true,
          showIndicators: false,
          vertical: true,
        };
      },
    },
    swipeData: {
      type: Array,
      default() {
        return [
          { title: "通知一", releaseTime: "2021-05-26 16:47:59" },
          { title: "通知二", releaseTime: "2021-05-26 16:48:30" },
          { title: "通知三", releaseTime: "2021-05-26 16:48:54" },
        ];
      },
    },
  },
  methods: {
    itemClick(item) {
      this.$emit("itemClick", item);
    },
  },
};
</script>

<style scoped>
.box {
  display: inline-flex;
  align-items: center;
  width: fill-available;
  margin-top: 12px;
}

.notificationTime {
  color: #999999;
  font-size: 12px;
  white-space: nowrap;
}

.notificationTitle {
  color: #3a3a3a;
  flex-grow: 2;
  font-size: 12px;
  text-align: left;
}

.swipe-box {
  width: 100%;
  height: 20px;
  margin-left: 4px;
}

.swipe-item-box {
  display: inline-flex;
  width: fill-available;
}
</style>
