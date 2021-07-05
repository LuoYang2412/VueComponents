<template>
  <div class="index">
    <div class="contentBox">
      宫格菜单
      <menu-grid />
    </div>
    <div class="contentBox">
      滚动通知
      <my-swipe @itemClick="swipeItemClick" />
    </div>
    <div class="contentBox">
      时间选择输入
      <field-date-time-picker
        :field-value="fieldDateTimePickerValue"
        field-label="请选择时间"
        field-placeholder="请选择时间"
        @confirm="fieldDateTimePickerValue = date2string($event)"
      />
    </div>
    <div class="contentBox">
      选择输入
      <field-picker
        :field-value="fieldPickerValue"
        field-label="请选择"
        field-placeholder="请选择"
        @confirm="fieldPickerValue = $event"
      />
    </div>
    <div class="contentBox">
      NavBar组件
      <NavBarComponent />
    </div>
  </div>
</template>

<script>
import FieldDateTimePicker from "@/components/vant/FieldDateTimePicker";
import FieldPicker from "@/components/vant/FieldPicker";
import MenuGrid from "@/components/vant/MenuGrid";
import MySwipe from "@/components/vant/MySwipe";
import NavBarComponent from "@/components/vant/NavBarComponent/NavBarComponent";
export default {
  name: "Index",
  components: {
    NavBarComponent,
    MySwipe,
    MenuGrid,
    FieldPicker,
    FieldDateTimePicker,
  },
  data() {
    return {
      fieldDateTimePickerValue: undefined,
      fieldPickerValue: undefined,
    };
  },
  methods: {
    date2string(date) {
      return (
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
      );
    },
    swipeItemClick(value) {
      console.log(JSON.stringify(value));
    },
  },
};
</script>

<style scoped></style>
