<!--选择器和输入框-->
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
      <van-picker
        show-toolbar
        :columns="pickerColumns"
        @confirm="pickerConfirm"
        @cancel="mShowPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
import { Field, Picker, Popup } from "vant";

export default {
  name: "FieldPicker",
  components: {
    [Field.name]: Field,
    [Picker.name]: Picker,
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
