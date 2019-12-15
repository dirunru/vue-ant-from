<template>
  <div>
    <a-button @click="submit">提交</a-button>
    <forms-arr
      class="card"
      v-for="(item, index) in formList"
      ref="formCard"
      :key="index"
      @submitSuc="submitOk"
    >
    </forms-arr>
  </div>
</template>

<script>
import formsArr from "../components/formsArr";
export default {
  name: "Home",
  data() {
    return {
      formList: [{}, {}, {}],
      arr: []
    };
  },

  props: {},
  components: {
    formsArr
  },

  computed: {},

  created() {},

  mounted() {},

  methods: {
    submit() {
      this.$refs.formCard.map(item => {
        item.handleSubmit();
      });
    },
    submitOk(data) {
      this.arr.push(data);
      console.log("shuju", this.arr);
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 20px;
}
</style>
