<!--时间选择器和输入框-->
<template>
  <div>
    <van-field
      :border="fieldBorder"
      :value="fieldValue"
      :name="fieldName"
      :label="fieldLabel"
      :placeholder="fieldPlaceholder"
      readonly
      right-icon="arrow"
      :rules="fieldRules"
      @click="mShowPicker = true"
    />
    <!--    为了使输入框下有线-->
    <div />
    <van-popup v-model="mShowPicker" round position="bottom">
      <van-datetime-picker
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="pickerConfirm"
        @cancel="mShowPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
import { DatetimePicker, Field, Popup } from "vant";

export default {
  name: "FieldDateTimePicker",
  components: {
    [DatetimePicker.name]: DatetimePicker,
    [Field.name]: Field,
    [Popup.name]: Popup,
  },
  props: {
    fieldBorder: {
      type: Boolean,
      default: true,
    },
    fieldLabel: {
      type: String,
      default: "mFieldLabel",
    },
    fieldName: {
      type: String,
      default: "mFieldName",
    },
    fieldPlaceholder: {
      type: String,
      default: "mPlaceholder",
    },
    fieldRules: {
      type: Array,
      default: function () {
        return [{ required: true, message: this.fieldPlaceholder }];
      },
    },
    fieldValue: {
      type: String,
      default: "",
    },
    minDate: {
      type: Date,
      default() {
        let date = new Date();
        date.setFullYear(date.getFullYear() - 10);
        return date;
      },
    },
    maxDate: {
      type: Date,
      default() {
        let date = new Date();
        date.setFullYear(date.getFullYear() + 10);
        return date;
      },
    },
    pickerColumns: {
      type: Array,
      default: function () {
        return ["选项一", "选项二", "选项三"];
      },
    },
  },
  data() {
    return {
      mShowPicker: false,
    };
  },
  methods: {
    pickerConfirm(value) {
      this.mShowPicker = false;
      this.$emit("confirm", value);
    },
  },
};
</script>

<style scoped>
.van-cell {
  font-size: inherit;
}
</style>
