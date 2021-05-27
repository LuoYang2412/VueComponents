<!--Grid宫格-->
<template>
  <van-grid
    :column-num="mConfig.columnNum"
    :border="mConfig.border"
    :clickable="mConfig.clickable"
    :square="mConfig.square"
    :icon-size="mConfig.iconSize"
  >
    <van-grid-item
      v-for="(item, index) in mConfig.item"
      :key="index"
      :icon="item.icon"
      :text="item.text"
      :to="item.to"
    />
  </van-grid>
</template>

<script>
import { Grid, GridItem } from "vant";

export default {
  name: "MenuGrid",
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
  },
  props: {
    mConfig: {
      type: Object,
      default: function () {
        return {
          columnNum: 4,
          border: false,
          square: true,
          clickable: true,
          iconSize: 50,
          item: [
            {
              text: "item1",
              icon: "clock-o",
              to: "#1",
            },
            {
              text: "item2",
              icon: "chat-o",
              to: "#2",
            },
            {
              text: "item3",
              icon: "friends-o",
              to: "#3",
            },
          ],
        };
      },
    },
  },
};
</script>

<style scoped></style>
