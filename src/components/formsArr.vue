<template>
  <div class="card">
    <a-form :form="form" @submit="handleSubmit">
      <a-card>
        <a-icon type="delete" slot="extra" />
        <a-row :gutter="24">
          <a-col :span="3">
            <a-form-item>
              <a-input
                v-decorator="[
                  'note',
                  {
                    rules: [
                      { required: true, message: 'Please input your note!' }
                    ]
                  }
                ]"
              />
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item>
              <a-input
                v-decorator="[
                  'note1',
                  {
                    rules: [
                      { required: true, message: 'Please input your note!' }
                    ]
                  }
                ]"
              />
            </a-form-item>
          </a-col>
          <a-col :span="9">
            <a-form-item>
              <a-select
                v-decorator="[
                  'gender',
                  {
                    rules: [
                      { required: true, message: 'Please select your gender!' }
                    ]
                  }
                ]"
                @change="handleSelectChange"
              >
                <a-select-option value="male">
                  male
                </a-select-option>
                <a-select-option value="female">
                  female
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="3">
            <a-icon type="minus-circle" />
            <a-icon type="plus-circle" />
          </a-col>
        </a-row>
      </a-card>
    </a-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, {
        name: 'coordinated'
      })
    }
  },
  methods: {
    handleSubmit () {
      // e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          window.console.log('Received values of form: ', values)
          this.$emit('submitSuc', values)
        }
      })
    },
    handleSelectChange (value) {
      window.console.log(value)
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`
      })
    }
  }
}
</script>
<style lang="scss"></style>
